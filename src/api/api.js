// 发送具体的请求
// 导入需要使用模块
import http from "@/api/http";
import { nowPlayingListUri, comingSoonListUri } from "@/config/url";

// 请求正在热映列表数据
export const nowPlayingListData = (pageNum) => {
    return http.get(nowPlayingListUri + pageNum);
}

// 请求即将上映列表数据
export const comingSoonListData = (pageNum) => {
    return http.get(comingSoonListUri + pageNum);
}