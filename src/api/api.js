// 发送具体的请求
// 导入需要使用模块
import http from "@/api/http";
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
} from "@/config/url";

// 请求正在热映列表数据
export const nowPlayingListData = (pageNum) => {
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
