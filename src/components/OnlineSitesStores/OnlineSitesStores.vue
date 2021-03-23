<template>
  <Title :groupedProps="titleData" />
  <div class="oss-container">
    <div class="oss-title">
      <h2>Strony internetowe</h2>
      <p>
        Od 13 lat tworzymy strony internetowe i portale dla firm i klientów
        indywidualnych. Swoje projekty opieramy na wiedzy i doświadczeniu
        naszych ekspertów.
      </p>
      <p>
        Jesteśmy&nbsp;<a
          href="https://www.google.com/partners/agency?id=5703269339"
          >Certyfikowanym Partnerem Google</a
        >, dzięki czemu nasze strony są zgodne z wytycznymi Google.
      </p>
    </div>
  </div>
  <OssBoxMain />
  <div class="oss-container second-cont">
    <div class="oss-title">
      <h2>Sklepy internetowe</h2>
      <p>
        Równie długo tworzymy sklepy internetowe w oparciu o popularne silniki,
        z wykorzystaniem
        <a href="https://graficzne.studio/"
          >indywidualnych projektów graficznych</a
        >. Przy tworzeniu sklepów internetowych bierzemy pod uwagę naszą wiedzę,
        aktualnie panujące trendy, branżę Klienta, a także jego potrzeby i
        oczekiwania. Dzięki temu tworzymy skuteczne i dochodowe sklepy
        internetowe
      </p>
    </div>
  </div>
  <OssBoxSec />
</template>
<script>
import Title from "@/components/Title/Title.vue";
import OssBoxMain from "@/components/OssBoxMain/OssBoxMain.vue";
import OssBoxSec from "@/components/OssBoxSec/OssBoxSec.vue";
export default {
  name: "OnlineSitesStores",
  components: {
    Title,
    OssBoxMain,
    OssBoxSec
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back2.jpg)"
        },
        desc: "Nowoczesne i Funkcjonalne",
        title: "STRONY I SKLEPY INTERNETOWE"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./OnlineSitesStores.style.scss"></style>
