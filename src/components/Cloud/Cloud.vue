<template>
    <Title :groupedProps="titleData" />
    <div class="cloud-desc">
        <div class="text">
            <p>Jesteśmy kilkuletnim partnerem dostawców ofert usługi w chmurze. Możemy zaproponować innowacyjne i sprawdzone rozwiązania, które pozwolą wykorzystać nowoczesne technologie w codziennej pracy.</p>
            <div>
                <img src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/google.png" alt="">
            </div>
            <div>
                <img src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/office365.gif" alt="">
            </div>
        </div>
        <p>Dysk w chmurze to doskonały nośnik wszelkich dokumentów, nad którymi pracuje wielu ludzi jednocześnie. <a href="https://www.office.com/">Office 365</a>, w odróżnieniu od swojego pudełkowego odpowiednika, oferuje również tak ważna&nbsp;<strong>stałą pomoc techniczną</strong><span>&nbsp;czy&nbsp;</span><strong>aktualizacje</strong>&nbsp;w zakresie bezpieczeństwa i wydajności oprogramowania.</p>
        <p>Ponadto, doskonałym rozwiązaniem dla biznesu jest również Exchange Online, czyli<strong>&nbsp;hostowana poczta email dla firm</strong>. Rozwiązanie to cechuje się bardzo wysokim poziomem ochrony danych, zabezpieczając zarówno przed wniknięciem spamu lub innego złośliwego oprogramowania, a także przed przypadkowym wysłaniem poufnych informacji poza grupę zaufanych odbiorców.&nbsp;</p>
    </div>
    
</template>

<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "VideoMarketing",
  components: {
    Title,
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back10.jpg)"
        },
        desc: "Nowoczesne",
        title: "USŁUGI W CHMURZE"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./Cloud.style.scss">

</style>