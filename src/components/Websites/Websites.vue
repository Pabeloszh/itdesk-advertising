<template>
  <Title :groupedProps="titleData" />
  <div class="web-desc">
    <div>
      <p>
        Jeśli jesteś właścicielem firmy, masz ciekawy pomysł na biznes, albo
        nietypowe zainteresowania, którymi chciałbyś się podzielić – zgłoś się
        do nas! Tanie strony internetowe, to Twoje okno na świat, tylko dzięki
        nim możesz pozyskać zainteresowanych odbiorców, klientów, kontrahentów!
      </p>
      <p>
        <router-link to="=/strony-i-sklepy-internetowe"
          >Nasza oferta</router-link
        >
        pokazuje, że profesjonalna, skuteczna strona internetowa może być w
        atrakcyjnej, przystępnej cenie!
      </p>
      <p>
        Tylko u nas nowoczesne rozwiązania, projekty pozwalające cieszyć się
        stroną internetową w rozsądnej cenie! Oferujemy tanie strony internetowe
        w oparciu o gotowe lub indywidualne projekty graficzne.
      </p>
      <p>
        <a href="https://graficzne.studio/">Graficy ItDesk</a>, tworząc stronę
        internetową, wielokrotnie&nbsp;<strong
          >konsultują się z klientem w celu uzyskania jak najlepszych
          efektów</strong
        >. Korzystają z księgi znaku, logotypów i odpowiedniej palety kolorów
        tak by kolorystyka komponowała się z daną branżą. Ponadto dzięki ścisłej
        współpracy z koderami i fotografami są w stanie stworzyć spójne
        rozwiązania nie tylko dla strony głównej ale też sklepów, czy szablonów
        aukcyjnych opartych na zasadach UX
      </p>
    </div>
    <div>
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/foto3.jpg"
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
  name: "Websites",
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
        desc: "Profesjonalne",
        title: "STRONY INTERNETOWE"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./Websites.style.scss"></style>
