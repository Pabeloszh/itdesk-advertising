<template>
  <Title :groupedProps="marketing" />
  <MarketingDesc />
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import MarketingDesc from "@/components/MarketingDesc/MarketingDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "Marketing",
  components: {
    Title,
    MarketingDesc,
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
        desc: "Skuteczny i Efektywny",
        title: "MARKETING INTERNETOWY"
      }
    };
  }
};
</script>
