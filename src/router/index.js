import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Offers from "../views/Offers.vue";
import Marketing from "../views/Marketing.vue";
import InternetMarketing from "@/components/InternetMarketing/InternetMarketing.vue";
import MarketingCare from "@/components/MarketingCare/MarketingCare.vue";
import GoogleAds from "@/components/GoogleAds/GoogleAds.vue";
import SiteAudit from "@/components/SiteAudit/SiteAudit.vue";
import CompanyBlog from "@/components/CompanyBlog/CompanyBlog.vue";
import Mailing from "@/components/Mailing/Mailing.vue";
import Positioning from "@/components/Positioning/Positioning.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import WhisperMarketing from "@/components/WhisperMarketing/WhisperMarketing.vue";
import OnlineStores from "../views/OnlineStores.vue"

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
    path: "/marketing",
    name: "Marketing",
    redirect: "/uslugi",
    component: Marketing,
    children: [
      {
        path: "/marketing-internetowy",
        name: "Marketing",
        component: InternetMarketing
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
        name: "CompanyBlog",
        component: CompanyBlog
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
      },
    ]
  },
  {
    path: "/strony-i-sklepy-internetowe",
    name: "OnlineStores",
    component: OnlineStores
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
