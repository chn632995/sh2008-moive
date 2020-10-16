// 定义电影列表需要的地址
export const nowPlayingListUri =
    "gateway?cityId=110100&pageSize=10&type=1&k=5230130&pageNum=";

export const comingSoonListUri =
    "gateway?cityId=110100&pageSize=10&type=2&k=7957247&pageNum=";

// 电影详情数据
export const moiveDetailUrl = "gateway?k=5950600&filmId=";

// 城市列表数据
export const cityListUrl = "gateway?k=3233761";

// 个人中心相关接口
export const loginUrl = "http://127.0.0.1:3000/api/v1/login";
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info";

// 后续有其他地址请求届时再加