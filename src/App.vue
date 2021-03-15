<template>
    <Navbar/>
    <div class="idk">
      Kutas
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.idk{
  background-color:gray;
  height: 150vh;
}
</style>
