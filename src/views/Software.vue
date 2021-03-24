<template>
  <router-view></router-view>
  <ContactForm />
</template>
<script>
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "Software",
  components: {
    ContactForm
  }
};
</script>
<style></style>
