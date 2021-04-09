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
  },
  watch: {
    $route: {
      handler: function() {
        window.scrollTo(0,0);
      },
      immediate: true
    },
  }
};
</script>

<style lang="scss">
</style>
