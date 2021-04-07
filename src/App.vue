<template>
  <Navbar />
  <router-view :key="$route.path"></router-view>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss"></style>
