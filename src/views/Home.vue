<template>
  <MainSlider />
  <Services />
  <ContactUs />
  <AboutUs />
  <Blog />
  <ContactForm />
</template>

<script>
// @ is an alias to /src
import MainSlider from "@/components/MainSlider/MainSlider.vue";
import Services from "@/components/Services/Services.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";
import Blog from "@/components/Blog/Blog.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "Home",
  components: {
    MainSlider,
    Services,
    ContactUs,
    AboutUs,
    Blog,
    ContactForm
  }
};
</script>
