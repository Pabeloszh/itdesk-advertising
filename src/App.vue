<template>
    <Navbar/>
    <MainSlider/>
    <Services/>
    <ContactUs/>
    <AboutUs/>
    <Blog/>
    <ContactForm/>
    <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import MainSlider from "@/components/MainSlider/MainSlider.vue";
import Services from "@/components/Services/Services.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue"
import AboutUs from "@/components/AboutUs/AboutUs.vue"
import Blog from "@/components/Blog/Blog.vue"
import ContactForm from "@/components/ContactForm/ContactForm.vue"
import Footer from "@/components/Footer/Footer.vue"

export default {
  name: "App",
  components: {
    Navbar,
    MainSlider,
    Services,
    ContactUs,
    AboutUs,
    Blog,
    ContactForm,
    Footer
  }
};
</script>

<style lang="scss">
</style>
