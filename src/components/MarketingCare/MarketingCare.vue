<template>
  <Title :groupedProps="titleData" />
  <div class="mcare-container">
    <div class="mcare-desc">
      <div>
        <p>
          Opieka marketingowa to spójne działania marketingu w internecie na
          wielu płaszczyznach, a to klucz do sukcesu Twojej Marki.
        </p>
        <p>
          Jeśli dotychczas prowadziłeś pewne działania marketingowe,
          <strong>pomożemy Ci je zoptymalizować.</strong>
        </p>
        <p>
          ItDesk Advertising posiada specjalistów w każdej dziedzinie. Do
          dyspozycji Twojej firmy będzie <strong>dedykowany opiekun</strong>,
          który poprowadzi spójne działania.
        </p>
      </div>
      <div>
        <p>
          W ramach opieki marketingowej gwarantujemy
          <strong>stałą liczbę godzin</strong> pracy.
        </p>
        <p>
          Mamy dla Ciebie przygotowany <a href="">HelpDesk</a>, który gwarantuje
          przejrzystość i transparentność działań.
        </p>
        <p>Całość podsumowujemy na comiesięcznych spotkaniach.</p>
      </div>
    </div>
    <div class="mcare-list">
      <h3>W zakres naszych działań wchodzi:</h3>
      <div>
        <ul>
          <li>
            <strong>Analiza</strong> dotychczasowych działań oraz budowanie
            strategii firmy;
          </li>
          <li>
            Obsługa i optymalizacja kampanii
            <a href="https://agencja-interaktywna.opole.pl/google-ads/"
              ><strong>Google Ads</strong></a
            >;
          </li>
          <li>
            Obsługa i optymalizacja kampanii <strong>Facebook Ads</strong>;
          </li>
          <li>
            Prowadzenie kont w
            <a href="https://agencja-interaktywna.opole.pl/social-media/"
              ><strong>social mediach</strong></a
            >
            (Facebook, Instagram);
          </li>
          <li>
            <a href="https://agencja-interaktywna.opole.pl/mailing/"
              ><strong>E-mail marketing</strong></a
            >
            oraz SMS marketing;
          </li>
          <li>
            <a href="https://agencja-interaktywna.opole.pl/marketing-szeptany/"
              ><strong>Marketing szeptany</strong></a
            >
            (wpisy na forach, pozytywne oceny m.in. w Google Moja Firma);
          </li>
        </ul>
        <ul>
          <li>
            Wdrożenie <strong>narzędzi analitycznych</strong>, raportowanie
            działań;
          </li>
          <li>
            <a href="https://agencja-interaktywna.opole.pl/audyt-strony/"
              ><strong>Audyt strony</strong></a
            >
            wraz z wprowadzaniem zmian optymalizacyjnych;
          </li>
          <li><strong>Pozyskiwanie linków</strong> zewnętrznych;</li>
          <li>Optymalizacja wizytówki <strong>Google Moja Firma</strong>;</li>
          <li><strong>Copywriting</strong> i tworzenie tekstów na bloga;</li>
          <li>Wdrożenie narzędzi zwiększających liczbę konwersji.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="mcare-prices">
    <h2>Cennik</h2>
    <div class="prices-desc">
      <div class="box">
        <div>
          <p>
            Cena za jedną godzinę pracy marketingowca w ramach podpisanej umowy
          </p>
        </div>
        <div>
          <p><strong>120</strong> zł netto</p>
        </div>
      </div>
      <div class="box">
        <div>
          <p>Cena każdej kolejnej godziny</p>
        </div>
        <div>
          <p><strong>140</strong> zł netto</p>
        </div>
      </div>
      <div class="box">
        <div>
          <p>
            Umowa opieki marketingowej podpisywana jest na okres 12 miesięcy.
          </p>
          <p>
            Minimalna ilość pakietu godzin w umowie wynosi 15 godz./miesięcznie.
          </p>
          <p>15-20 godz. – rozliczanie godzinowe</p>
          <p>>20 godz. – rozliczenie półgodzinne</p>
        </div>
        <img
          src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/opieka-marketingowa-300x213.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "MarketingCare",
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
        desc: "Wygodna",
        title: "OPIEKA MARKETINGOWA"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./MarketingCare.style.scss"></style>
