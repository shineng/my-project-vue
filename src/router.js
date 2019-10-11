import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/UserLayout"),
      children: [
        {
          path: "",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/index"
        },
        {
          path: "/dashboard/index",
          name: "index",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "./views/Dashboard/Index"
            )
        },
        {
          path: "/dashboard/form",
          name: "form",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Form")
        }
      ]
    },
    {
      path: "*",
      component: () => import(/* webpackChunkName: "dashboard" */ "./views/404")
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
