<template>
  <div class="mark-box">
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing1-p.svg"
        alt=""
      />
      <div>
        <h5>OPIEKA MARKETINGOWA</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Przestudiujemy dotychczasową strategię działań Twojej firmy i
          zbudujemy ją na nowo. Uzyskasz analizy i wskazówki dotyczące kampanii
          <a href="https://agencja-interaktywna.opole.pl/google-ads/"
            >Google Ads</a
          >
          i Facebook Ads. Wdrożymy narzędzia analityczne wraz z pełnym raportem
          działań.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing2-p.svg"
        alt=""
      />
      <div>
        <h5>GOOGLE ADS</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Reklama w najpopularniejszej wyszukiwarce internetowej. Specjalizujemy
          się w skutecznych działaniach docierania do klienta w elastycznym
          budżecie.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing3-p.svg"
        alt=""
      />
      <div>
        <h5>AUDYT STRONY</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Przeanalizujemy Twoją witrynę internetową, jej pozycję w wyszukiwarce
          i odbiór przez potencjalnych klientów. Popełnione wcześniej błędy
          będziesz mógł przekuć w sukces.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing4-p.svg"
        alt=""
      />
      <div>
        <h5>POZYCJONOWANIE</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Słowo klucz to klucz do sukcesu. Dzięki współpracy z nami Twoja strona
          internetowa zajmie najwyższe miejsca w wyszukiwarce
          <a href="https://www.google.pl/">Google</a>. Usprawnimy także szybkość
          działania witryny, dostosowując ją do wymogów algorytmów Google oraz
          wersji mobilnych.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing5-p.svg"
        alt=""
      />
      <div>
        <h5>SOCIAL MEDIA</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          “Jeśli nie ma Cię na Facebooku, nie istniejesz” – kto nie słyszał tego
          zdania. Nasze działania na Facebooku, Instagramie, Twitterze,
          Pinterest czy LinkedIn zbudują wizerunek Twojej firmy.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing6-p.svg"
        alt=""
      />
      <div>
        <h5>BLOG FIRMOWY</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Twoja firma to nie tylko dobra reklama. Wizerunek i markę tworzymy
          poprzez więź klienta z firmą. Osiągnąć ją można przez publikacje
          artykułów ciekawych, merytorycznych, a czasem satyrycznych z branży
          Twojej działalności.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing7-p.svg"
        alt=""
      />
      <div>
        <h5>MAILING</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          Nie atakujemy klientów setką SPAM-ów, tworzymy treści dostosowane do
          wyselekcjonowanej grupy docelowej – bo tylko taki zabieg daje
          zamierzone pozytywne cele.
        </p>
      </div>
    </div>
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-marketing8-p.svg"
        alt=""
      />
      <div>
        <h5>MARKETING SZEPTANY</h5>
        <p v-if="$route.path === '/marketing-internetowy'">
          To przeciwieństwo bardzo modnego ostatnio słowa “trolling” . Budujemy
          pozytywne opinie wokół firmy i jej produktów, nienachalnie opisując
          korzyści wynikające ze współpracy z daną firmą.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MarketingBox"
};
</script>
<style scoped lang="scss" src="./MarketingBox.style.scss"></style>
