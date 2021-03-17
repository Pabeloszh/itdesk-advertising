<template>
    <Navbar/>
    <MainSlider/>
    <Services/>
    <ContactUs/>
    <AboutUs/>
    <Blog/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import MainSlider from "@/components/MainSlider/MainSlider.vue";
import Services from "@/components/Services/Services.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue"
import AboutUs from "@/components/AboutUs/AboutUs.vue"
import Blog from "@/components/Blog/Blog.vue"


export default {
  name: "App",
  components: {
    Navbar,
    MainSlider,
    Services,
    ContactUs,
    AboutUs,
    Blog
  }
};
</script>

<style lang="scss">
.idk{
  background-color:gray;
  height: 150vh;
}
</style>
