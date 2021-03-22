<template>
  <Title :groupedProps="titleData"/>
  <div class="mdesc-container">
    <div class="mdesc-title">
      <h5>Marketing internetowy</h5>
      <h5><em>„zaspokajać potrzeby, osiągając zysk”</em></h5>
      <p>
        Pomożemy Ci określić potrzeby Twojego klienta. Następnie przygotujemy
        koordynację marketingową do sprzedaży produktów i usług, które je
        zaspokoją.
      </p>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue"
export default {
  name: "InternetMarketing",
  components: {
    Title
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)"
        },
        desc: "Skuteczny i Efketywny",
        title: "MARKETING INTERNETOWY"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./InternetMarketing.style.scss"></style>
