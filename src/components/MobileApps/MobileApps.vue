<template>
    <Title :groupedProps="titleData" />
    <div class="apps-desc">
        <p>Tworzymy skuteczne aplikacje na najpopularniejsze obecnie platformy mobilne: iOS oraz <a href="https://play.google.com/store/search?q=itDesk&amp;hl=pl&amp;gl=US">Android</a>, oraz na tablice interaktywne.<br> Współpracujemy z <a href="https://agencja-interaktywna.opole.pl/project/gtv-bus/">klientami polskimi</a> i zagranicznymi, mamy bogate doświadczenie w tworzeniu aplikacji.</p>
        <div class="apps-info">
            <div>
                <h2>Aplikacje mobilne natywne lub multi-platformowe HTML5</h2>
                <h2>Powiązanie aplikacji z mediami społecznościowymi</h2>
                <h2>Wykorzystanie GPS w połączeniu z dostępnymi mapami,</h2>
                <h2>Integracja z gotowymi systemami online</h2>
                <h2>Wykorzystywanie wszystkich funkcjonalności urządzeń mobilnych (kamera, akcelerometr)</h2>
                <h2>Aplikacje działają na smartphone’ach, phabletach i tabletach</h2>
                <h2>Wsparcie dla rozszerzonej rzeczywistości</h2>
            </div>
            <div>
                <img src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/foto5.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "MobileApps",
  components: {
    Title,
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back11.jpg)"
        },
        desc: "Uniwersalne",
        title: "APLIKACJE MOBILNE"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./MobileApps.style.scss">

</style>