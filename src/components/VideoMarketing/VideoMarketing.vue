<template>
    <Title :groupedProps="titleData" />
    <div class="vmark-desc">
        <div>
            <img src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/foto7b.png" alt="">
        </div>
        <div>
            <p><strong>Wideomarketing</strong>, to innowacyjny i bardzo skuteczny sposób na przedstawienie oferowanych produktów i usług. Połączenie dźwięku, obrazu i perswazyjnych treści, w sposób oryginalny i nienachalny, zachęci do zakupu.</p>
            <p>Przygotowane przez nas <strong><a href="https://www.youtube.com/user/ITDeskTVAdvertising">filmy</a> znacznie zwiększają konwersję</strong> i zainteresowanie oferowanym asortymentem, pozwalają w pełni wykorzystać potencjał w środowisku internetowym. Są doskonale przygotowane pod <a href="https://agencja-interaktywna.opole.pl/pozycjonowanie/">pozycjonowanie</a>.</p>
        </div>
    </div>
    <div class="vmark-profit">
        <h2>Co otrzymujesz</h2>
        <div>
            <p>interesujące, wysokiej jakości video (zebranie materiałów i przygotowanie treści w cenie)</p>
            <p>pomoc  w dystrybucji filmów video</p>
            <p>pomoc w stworzeniu własnego, firmowego kanału na YouTube</p>
            <p>skuteczną promocję Twojego filmu – film dotrze do zdefiniowanej grupy docelowej</p>
        </div>
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
        desc: "Efektowne",
        title: "MULTIMEDIA"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./VideoMarketing.style.scss">

</style>