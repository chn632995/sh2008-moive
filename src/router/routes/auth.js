export default [
    {
        path: "/login",
        component: () => import("@/views/Auth/Login"),
    },
    {
        path: "/logout",
        component: () => import("@/views/Auth/Logout"),
    },
];