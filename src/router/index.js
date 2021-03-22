import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Offers from "../views/Offers.vue";
import Marketing from "../views/Marketing.vue";
import MarketingCare from "../views/MarketingCare.vue";
import GoogleAds from "../views/GoogleAds.vue";
import SiteAudit from "../views/SiteAudit.vue";
import CompanyBlogDesc from "../views/CompanyBlog.vue";
import Mailing from "../views/Mailing.vue";
import Positioning from "../views/Positioning.vue";
import SocialMedia from "../views/SocialMedia.vue";
import WhisperMarketing from "../views/WhisperMarketing.vue"

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
  {
    path: "/mailing",
    name: "Mailing",
    component: Mailing
  },
  {
    path: "/pozycjonowanie",
    name: "Positioning",
    component: Positioning
  },
  {
    path: "/social-media",
    name: "SocialMedia",
    component: SocialMedia
  },
  {
    path: "/marketing-szeptany",
    name: "WhisperMarketing",
    component: WhisperMarketing
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
