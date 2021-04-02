<template>
  <Title :groupedProps="offers" />
  <OffersBox />
  <ContactUs />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import OffersBox from "@/components/OffersBox/OffersBox.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
export default {
  name: "Offers",
  components: {
    Title,
    OffersBox,
    ContactUs
  },
  data() {
    return {
      offers: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/4198525-1-scaled.jpg)",
          color: "#999"
        },
        desc: "Profesjonalne",
        title: "USŁUGI INTERNETOWE"
      }
    };
  }
};
</script>
