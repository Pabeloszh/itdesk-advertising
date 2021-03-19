<template>
  <Title :groupedProps="marketing" />
  <CompanyBlogDesc />
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import CompanyBlogDesc from "@/components/CompanyBlogDesc/CompanyBlogDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "CompanyBlog",
  components: {
    Title,
    CompanyBlogDesc,
    MarketingBox,
    ContactForm
  },
  data() {
    return {
      marketing: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)"
        },
        desc: "Interesujay",
        title: "BLOG FIRMOWY"
      }
    };
  }
};
</script>
