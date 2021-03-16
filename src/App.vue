<template>
    <Navbar/>
    <MainSlider/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import MainSlider from "@/components/MainSlider/MainSlider.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MainSlider
  }
};
</script>

<style lang="scss">
.idk{
  background-color:gray;
  height: 150vh;
}
</style>
