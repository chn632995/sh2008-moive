// 发送具体的请求
// 导入需要使用模块
import http from "@/api/http";
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
    cityListUrl,
} from "@/config/url";

// 请求正在热映列表数据
export const nowPlayingListData = (pageNum) => {
    http.defaults.headers.info = "";
    return http.get(nowPlayingListUri + pageNum);
};

// 请求即将上映列表数据
export const comingSoonListData = (pageNum) => {
    return http.get(comingSoonListUri + pageNum);
};

// 请求电影详情数据
export const moiveDetailData = (filmId) => {
    // 给axios设置请求头
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId);
};

// 城市列表数据
export const cityListData = async () => {
    // 给axios设置请求头
    http.defaults.headers.info = "city";
    let ret = await http.get(cityListUrl);
    // 定义基本的数据
    let cities = ret.data.data.cities;
    let codeList = []; //'A','B','C'....（完整26个字母）
    let dataList = []; // 城市信息
    let indexList = []; //'A','B','C'....（经过筛选的字母）
    
    // for循环生成26个字母
    for(let i = 65;i <= 90;i++){
        codeList.push(String.fromCharCode(i))
    }

    // 开始处理
    codeList.forEach((element) => {
        // 与城市信息的pinyin字段首字母进行对比，如果符合则留下大字母
        let tempArr = cities.filter((item) => element.toLowerCase() == item.pinyin.substr(0,1))
        if(tempArr.length > 0){
            indexList.push(element)
            dataList.push({
                index: element,
                data: tempArr,
            });
        }
    })
    // 返回数据
    return Promise.resolve([dataList, indexList]);
};
