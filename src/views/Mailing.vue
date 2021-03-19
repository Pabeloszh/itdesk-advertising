<template>
  <Title :groupedProps="marketing" />
  <MailingDesc />
  <MarketingBox />
  <ContactForm />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import MailingDesc from "@/components/MailingDesc/MailingDesc.vue";
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "CompanyBlog",
  components: {
    Title,
    MailingDesc,
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
        desc: "Przemyslany",
        title: "Mailing"
      }
    };
  }
};
</script>