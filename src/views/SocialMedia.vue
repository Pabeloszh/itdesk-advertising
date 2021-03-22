<template>
  <Title :groupedProps="marketing" />
  <SocialMediaDesc/>
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import SocialMediaDesc from "@/components/SocialMediaDesc/SocialMediaDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "SiteAudit",
  components: {
    Title,
    SocialMediaDesc,
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
        desc: "Skuteczne",
        title: "SOCIAL MEDIA"
      }
    };
  }
};
</script>