<template>
  <Title :groupedProps="titleData" />
  <div class="scmedia-container">
    <div class="scmedia-desc">
      <div>
        <p>
          Badania pokazują, iż przeciętny użytkownik Facebooka wchodzi na niego
          nawet do 20 razy dziennie, tylko po to, by sprawdzić co słychać u
          znajomych i polajkować ich aktywności w Social Media
        </p>
        <p>
          Jeśli chcesz, <strong>by mówiono o Twoim produkcie</strong>, musisz
          zaistnieć tam, gdzie są klienci, czyli na
          <a href="https://agencja-interaktywna.opole.pl/project/facebook/"
            >Facebooku</a
          >, Instagramie, Twitterze, Pinterest czy LinkedInie.
        </p>
      </div>
      <div>
        <p>
          Posiadamy
          <strong>najlepszych na rynku specjalistów</strong> działających w
          Social Media. Dzięki ich wiedzy:
        </p>
        <ul>
          <li>
            Budujemy świadomość marki przez regularne wpisy świadczące o tym, że
            Twoja firma jest wiarygodna i rzeczywista
          </li>
          <li>
            Tworzymy grupę fanów – to oni poinformują Cię o jakości produktów,
            usług, czasie ich realizacji, a także wypromują Cię wśród swoich
            znajomych
          </li>
          <li>
            Kreujemy kampanie reklamowe z precyzyjnie dobraną grupą docelową
          </li>
          <li>Rozwijamy komunikację i dialog z Twoimi klientami</li>
        </ul>
      </div>
    </div>
    <h3>
      Poznaj kreatywność naszych specjalistów na ich
      <a href="https://www.facebook.com/prowadzeniefanpagedlafirm/"
        >Fanpage-u!</a
      >
    </h3>
  </div>
  <div class="fb-packet">
    <h2>Pakiet dla Facebook'a</h2>
    <div class="fb-table">
      <div class="table-col">
        <div>
          <h3>Basic</h3>
        </div>
        <div>
          <h2>890 zł</h2>
        </div>
        <div>
          <ul>
            <li>Stworzenie profilu</li>
            <li>Indywidualny Opiekun Konta</li>
            <li>Strategia komunikacji</li>
            <li>Zdjęcie profilowe</li>
            <li>1 - Propozycja cover photo (zdjęcia w tle)</li>
            <li>Uzupełnienie profilu</li>
            <li>Monitorowanie komentarzy</li>
            <li>Stworzenie i zaprojektowanie postów - 4/mc</li>
            <li>Obsługa płatnych kampanii - 1/mc</li>
            <li>Proponowany budżet na reklamę - 100-200zł</li>
            <li>Raport miesięczny</li>
            <li>Instalacja widgetu na stronę www</li>
          </ul>
        </div>
      </div>
      <div class="table-col">
        <div>
          <h3>Standard</h3>
        </div>
        <div>
          <h2>1090 zł</h2>
        </div>
        <div>
          <ul>
            <li>Stworzenie profilu</li>
            <li>Indywidualny Opiekun Konta</li>
            <li>Strategia komunikacji</li>
            <li>Zdjęcie profilowe</li>
            <li>1 - Propozycja cover photo (zdjęcia w tle)</li>
            <li>Uzupełnienie profilu</li>
            <li>Monitorowanie komentarzy</li>
            <li>Stworzenie i zaprojektowanie postów - 6/mc</li>
            <li>Obsługa płatnych kampanii - 3/mc</li>
            <li>Proponowany budżet na reklamę - 200-500zł</li>
            <li>Raport miesięczny</li>
            <li>Instalacja widgetu na stronę www</li>
          </ul>
        </div>
      </div>
      <div class="table-col">
        <div>
          <h3>Dynamic</h3>
        </div>
        <div>
          <h2>1440 zł</h2>
        </div>
        <div>
          <ul>
            <li>Stworzenie profilu</li>
            <li>Indywidualny Opiekun Konta</li>
            <li>Strategia komunikacji</li>
            <li>Zdjęcie profilowe</li>
            <li>2 - Propozycja cover photo (zdjęcia w tle)</li>
            <li>Uzupełnienie profilu</li>
            <li>Monitorowanie komentarzy</li>
            <li>Stworzenie i zaprojektowanie postów - 10/mc</li>
            <li>Obsługa płatnych kampanii - 6/mc</li>
            <li>Proponowany budżet na reklamę - 500-1500zł</li>
            <li>Raport miesięczny</li>
            <li>Instalacja widgetu na stronę www</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="scmedia-info">
    <p>
      Prowadzimy również działania na serwisach: Instagram, LinkedIn, Twiter,
      Pinterest. Jeśli chciałbyś zaistnieć, w którymś z tych Social Mediów
      przygotujemy ofertę szytą na miarę i doradzimy, który z nich będzie
      najbardziej odpowiedni dla Twojej marki.
    </p>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "SocialMedia",
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
        desc: "Skuteczne",
        title: "SOCIAL MEDIA"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./SocialMedia.style.scss"></style>
