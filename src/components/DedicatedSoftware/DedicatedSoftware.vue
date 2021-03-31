<template>
  <Title :groupedProps="titleData" />
  <div class="dsoft-desc">
    <p>
      Zajmujemy się pisaniem systemów dedykowanych dla naszych klientów.<br />
      Napisaliśmy między innymi:
    </p>
    <div class="dsoft-box">
      <div class="box">
        <div>
          <a href="https://informatyk360.pl/">
            <img
              src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/projectdesk.png"
              alt=""
            />
          </a>
        </div>
        <h3>System do ewidencji zgłoszeń</h3>
        <p>
          Jesteśmy autorem oprogramowania dedykowanego dla działów wewnętrznych,
          w tym serwisowych i informatycznych.
        </p>
        <ul>
          <li>dodawanie zadań z wieloma polami do wyboru</li>
          <li>możliwość planowania czasu pracy</li>
          <li>różnorodne statusy zleceń</li>
          <li>reporty</li>
          <li>możliwość integracji z zewnętrznym oprogramowaniem</li>
          <li>przydział zadań do poszczególnych pracowników</li>
          <li>indywidualne role i uprawnienia dla użytkowników</li>
          <li>dodawanie umów, zleceń itp.</li>
          <li>wyświetlanie zmian</li>
        </ul>
      </div>
      <div class="box">
        <div>
          <a href="https://flexrekruter.itdesk.eu/">
            <img
              src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/flexrekruter.png"
              alt=""
            />
          </a>
        </div>
        <h3>System do wspomagania Agencji Pracy</h3>
        <p>
          Flexrekruter to rozbudowany system kadrowo – płacowy napisany
          specjalne dla agencji pośrednictwa pracy oraz agencji pracy
          tymczasowej.
        </p>
        <ul>
          <li>Lista spraw</li>
          <li>Rekrutacja</li>
          <li>Klienci</li>
          <li>Rozliczenia</li>
          <li>Aplikacje</li>
          <li>Kursy</li>
          <li>Wiadomości</li>
          <li>Wykresy</li>
        </ul>
      </div>
      <div class="box">
        <div>
          <a href="https://ngocrm.itdesk.eu/">
            <img
              src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/ngocrm3.png"
              alt=""
            />
          </a>
        </div>
        <h3>System do wspomagania pracy NGO</h3>
        <p>
          Dostosowany do urządzeń mobilnych system dla organizacji non profit,
          to narzędzie ułatwiające i przyspieszające przepływ informacji między
          Organizacją a jej Podopiecznym.
        </p>
        <ul>
          <li>możliwość zaimportowania danych Podopiecznego</li>
          <li>własne konta Podopiecznych</li>
          <li>pełną kontrolę nad kosztami i darowiznami</li>
          <li>kontakt z Podopiecznym przez system</li>
          <li>dedykowane strony Podopiecznych</li>
          <li>integrację ze stroną Organizacji</li>
        </ul>
      </div>
      <div class="box">
        <h2>SPRZEDAŻ BILETÓW<br />ONLINE</h2>
        <h3>
          System do sprzedaży biletów<br />
          dla <a href="https://rezerwacja.hoplandia.pl/form">Sal Zabaw</a> i
          <a href="https://rezerwacja.odskocznia.opole.pl/form"
            >Parków Trampolin</a
          >
        </h3>
        <ul>
          <li>sprzedaż biletów online i offline</li>
          <li>szczegółowa rezerwacja (dzień, godzina)</li>
          <li>rezerwacja urodzinowa</li>
          <li>rezerwacja telefoniczna</li>
          <li>promocje/karty rabatowe</li>
          <li>elektroniczna akceptacja regulaminów</li>
          <li>różne typy biletów</li>
          <li>intuicyjna obsługa</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "DedicatedSoftware",
  components: {
    Title
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back11.jpg)"
        },
        desc: "Profesjonalne",
        title: "OPROGRAMOWANIE DEDYKOWANE"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./DedicatedSoftware.style.scss"></style>
