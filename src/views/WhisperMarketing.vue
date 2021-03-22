<template>
  <Title :groupedProps="marketing" />
  <WhisperMarketingDesc />
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import WhisperMarketingDesc from "@/components/WhisperMarketingDesc/WhisperMarketingDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "WhisperMarketing",
  components: {
    Title,
    WhisperMarketingDesc,
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
        desc: "Wiarygodny",
        title: "MARKETING SZEPTANY"
      }
    };
  }
};
</script>