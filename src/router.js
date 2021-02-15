import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Index from "./views/Index.vue";
import ComingSoon from "./views/ComingSoon.vue";
import Advance from "./views/Advance.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import CompleteRegisteration from "./views/CompleteRegisteration.vue";
import Distribution from "./views/Distribution.vue";
import Contact from "./views/Contact.vue";
import AboutUs from "./views/AboutUs.vue";
import Faq from "./views/Faq.vue";
import ForgotPassword from "./views/ForgotPassword.vue";

// Dashboard
import App from "./views/dashboard/App.vue";
import AppView from "./views/dashboard/pages/AppView";
import MusicMonitor from "./views/dashboard/pages/MusicMonitor";
import Wallet from "./views/dashboard/pages/Wallet";
import Settings from "./views/dashboard/pages/Settings";
import NewRelease from "./views/dashboard/pages/NewRelease";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        header: AppHeader,
        default: Index,
        footer: AppFooter,
      },
    },
    {
      path: "/distribution",
      name: "distribution",
      components: {
        header: AppHeader,
        default: Distribution,
        footer: AppFooter,
      },
    },
    {
      path: "/about-us",
      name: "about-us",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter,
      },
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter,
      },
    },
    {
      path: "/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: Faq,
        footer: AppFooter,
      },
    },
    {
      path: "/advance",
      name: "advance",
      components: {
        header: AppHeader,
        default: Advance,
        footer: AppFooter,
      },
    },
    {
      path: "/sign-in",
      name: "sign-in",
      components: {
        default: SignIn,
      },
    },
    {
      path: "/sign-up",
      name: "sign-up",
      components: {
        default: SignUp,
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      components: {
        default: ForgotPassword,
      },
    },
    {
      path: "/complete-registeration",
      name: "complete-registeration",
      components: {
        default: CompleteRegisteration,
      },
    },
    {
      path: "/app",
      name: "app",
      redirect: "/app/home",
      component: AppView,
      children: [
        {
          path: "home",
          component: App,
        },
        {
          path: "music-monitor",
          component: MusicMonitor,
        },
        {
          path: "wallet",
          component: Wallet,
        },
        {
          path: "settings",
          component: Settings,
        },
        {
          path: "new-release",
          component: NewRelease,
        },
      ],
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});
