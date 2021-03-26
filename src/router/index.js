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
import OnlineStores from "../views/OnlineStores.vue";
import OnlineSitesStores from "@/components/OnlineSitesStores/OnlineSitesStores.vue";
import Cms from "@/components/Cms/Cms.vue";
import Websites from "@/components/Websites/Websites.vue";
import WebsiteMaintenance from "@/components/WebsiteMaintenance/WebsiteMaintenance.vue";
import SoteShop from "@/components/SoteShop/SoteShop.vue";
import PrestaShop from "@/components/PrestaShop/PrestaShop.vue";
import Magento from "@/components/Magento/Magento.vue";
import Software from "../views/Software.vue";
import DedicatedSoftware from "@/components/DedicatedSoftware/DedicatedSoftware.vue";
import Hosting from "@/components/Hosting/Hosting.vue";
import MobileApps from "@/components/MobileApps/MobileApps.vue";
import VideoMarketing from "@/components/VideoMarketing/VideoMarketing.vue";
import Cloud from "@/components/Cloud/Cloud.vue";
import Training from "@/components/Training/Training.vue";
import OurBlog from "@/components/OurBlog/OurBlog.vue";
import AboutCompany from "@/components/AboutCompany/AboutCompany.vue";
import Contact from "@/components/Contact/Contact.vue"
import ContactForm from "@/components/ContactForm/ContactForm.vue"

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
      }
    ]
  },
  {
    path: "/strony-sklepy-internetowe",
    name: "OnlineStores",
    component: OnlineStores,
    children: [
      {
        path: "/strony-i-sklepy-internetowe",
        name: "OnlineSitesStores",
        component: OnlineSitesStores
      },
      {
        path: "/systemy-zarzadzania-trescia-cms",
        name: "Cms",
        component: Cms
      },
      {
        path: "/strony-internetowe",
        name: "Websites",
        component: Websites
      },
      {
        path: "/opieka-nad-strona-www/",
        name: "WebsiteMaintenance",
        component: WebsiteMaintenance
      },
      {
        path: "/sklep-sote/",
        name: "SoteShop",
        component: SoteShop
      },
      {
        path: "/sklep-presta/",
        name: "PrestaShop",
        component: PrestaShop
      },
      {
        path: "/sklep-magento/",
        name: "Magento",
        component: Magento
      }
    ]
  },
  {
    path: "/oprogramowanie",
    name: "Software",
    component: Software,
    children: [
      {
        path: "/oprogramowanie-dedykowane",
        name: "DedicatedSoftware",
        component: DedicatedSoftware
      },
      {
        path: "/hosting-i-domeny",
        name: "Hosting",
        component: Hosting
      },
      {
        path: "/aplikacje-mobilne",
        name: "MobileApps",
        component: MobileApps
      },
      {
        path: "/wideomarketing",
        name: "VideoMarketing",
        component: VideoMarketing
      },
      {
        path: "/uslugi-w-chmurze",
        name: "Cloud",
        component: Cloud
      },
      {
        path: "/szkolenia",
        name: "Training",
        component: Training
      }
    ]
  },
  {
    path: "/blog",
    name: "OurBlog",
    component: OurBlog,
  },
  {
    path: "/o-firmie",
    name: "AboutCompany",
    component: AboutCompany,
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/wycena",
    name: "ContactForm",
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
