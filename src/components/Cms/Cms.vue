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
        <router-link to="/pozycjonowanie">pozycjonowanie</router-link>
        stron.
      </p>
      <p>Nasze systemy zarządzania treścią są:</p>
      <div>
        <i class="far fa-check-square"></i>
        <p>nowoczesne, zgodne z obowiązującymi trendami</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>dostosowane do najczęściej stosowanych rozdzielczości monitora</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>zgodne z zasadami UX</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>przyjazne wyszukiwarkom</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>atrakcyjne dla odbiorców</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>czytelne i przejrzyste</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>z dedykowaną grafiką</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>wykonane w technologii responsive</p>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <p>przygotowane pod pozycjonowanie</p>
      </div>
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
