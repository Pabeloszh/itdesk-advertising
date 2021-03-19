import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Offers from "../views/Offers.vue"
import Marketing from "../views/Marketing.vue"
import MarketingCare from "../views/MarketingCare.vue"
import GoogleAds from "../views/GoogleAds.vue"
import SiteAudit from "../views/SiteAudit.vue"
import CompanyBlogDesc from "../views/CompanyBlog.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/uslugi",
    name: "Offers",
    component: Offers
  },
  {
    path: "/marketing-internetowy",
    name: "Marketing",
    component: Marketing
  },
  {
    path: "/opieka-marketingowa",
    name: "MarketingCare",
    component: MarketingCare
  },
  {
    path: "/google-ads",
    name: "GoogleAds",
    component: GoogleAds
  },
  {
    path: "/audyt-strony-internetowej",
    name: "SiteAudit",
    component: SiteAudit
  },
  {
    path: "/blog-firmowy",
    name: "CompanyBlogDesc",
    component: CompanyBlogDesc
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
