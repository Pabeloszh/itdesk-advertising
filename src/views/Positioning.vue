<template>
  <Title :groupedProps="marketing" />
  <PositioningDesc />
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import PositioningDesc from "@/components/PositioningDesc/PositioningDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "Positioning",
  components: {
    Title,
    PositioningDesc,
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
        desc: "Efektywne",
        title: "POZYCJONOWANIE"
      }
    };
  }
};
</script>
