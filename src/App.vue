<template>
    <Navbar/>
    <MainSlider/>
    <Services/>
    <ContactUs/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import MainSlider from "@/components/MainSlider/MainSlider.vue";
import Services from "@/components/Services/Services.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue"


export default {
  name: "App",
  components: {
    Navbar,
    MainSlider,
    Services,
    ContactUs
  }
};
</script>

<style lang="scss">
.idk{
  background-color:gray;
  height: 150vh;
}
</style>
