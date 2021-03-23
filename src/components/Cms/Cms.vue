<template>
  <Title :groupedProps="titleData" />
  <div class="cms-desc">
    <div>
      <p>
        Nasi fachowcy korzystają z większości popularnych i znanych systemów,
        takich jak: <a href="https://pl.wordpress.org/">WordPress</a>,
        <a href="https://www.drupal.org.pl/">Drupal</a> czy
        <a href="https://www.joomla.org/">Joomla</a>, które są świetnie
        przygotowane pod
        <a href="https://agencja-interaktywna.opole.pl/pozycjonowanie/"
          >pozycjonowanie</a
        >
        stron.
      </p>
      <p>Nasze systemy zarządzania treścią są:</p>
      <p>nowoczesne, zgodne z obowiązującymi trendami</p>
      <p>dostosowane do najczęściej stosowanych rozdzielczości monitora</p>
      <p>zgodne z zasadami UX</p>
      <p>przyjazne wyszukiwarkom</p>
      <p>atrakcyjne dla odbiorców</p>
      <p>czytelne i przejrzyste</p>
      <p>z dedykowaną grafiką</p>
      <p>wykonane w technologii responsive</p>
      <p>przygotowane pod pozycjonowanie</p>
    </div>
    <div>
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/ipad-2.32.01-PM.png"
        alt=""
      />
    </div>
  </div>
  <OssBoxMain />
</template>

<script>
import Title from "@/components/Title/Title.vue";
import OssBoxMain from "@/components/OssBoxMain/OssBoxMain.vue";
export default {
  name: "Cms",
  components: {
    Title,
    OssBoxMain
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back2.jpg)"
        },
        desc: "Wygodne",
        title: "SYSTEMY ZARZĄDZANIA TREŚCIĄ"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./Cms.style.scss"></style>
