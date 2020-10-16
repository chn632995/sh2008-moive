export default {
    path: "/film/:filmId",
    name: "detail",
    component: () => import('@/views/Detail/Detail')
};