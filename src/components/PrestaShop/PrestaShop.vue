<template>
  <Title :groupedProps="titleData" />
  <div class="pshop-desc">
      <p>
          Wybór silnika sklepu nie jest prosty. Zależy od wielu czynników, między innymi stopnia złożoności sklepu, asortymentu, liczby produktów, kraju, w którym chcemy dokonywać sprzedaży. Sklepy internetowe Presta Shop stanowią sprawdzone rozwiązanie, dedykowane zarówno mniejszym, jak i średnim sklepom internetowym.
      </p>
      <div class="pshop-box">
          <div>
            <h3>Główne cechy Presta Shop</h3>
            <p>system lekki i łatwy w konfiguracji</p>
            <p>prosty w obsłudze panel administracyjny</p>
            <p>idealny do sprzedaży polskiej i zagranicznej</p>
            <p>wydajny, nie wymaga dużych zasobów serwera</p>
            <p>posiada dużo wbudowanych funkcjonalności</p>
            <p>idealny zarówno do małych, jak i większych sklepów</p>
            <p>możliwość tworzenia sklepów w różnych wersjach językowych</p>
            <p>obsługa wielu walut</p>
            <p>dodatki</p>
            <p>integracja z programami księgowo-magazynowymi Subiekt, WF-MAG, Enova</p>
          </div>
          <div>
            <h3>Integracja PrestaShop</h3>
            <p>Jeśli prowadzisz dynamiczny biznes, potrzebujesz dedykowanego rozwiązania integrującego sklep z <a href="https://itdesk.eu/usluga/enova365-erp/">Enovą</a>, Subiektem i WF-Mag, koniecznie czytaj dalej!<br> Nasi eksperci pokażą, że integracja PrestaShop z subiektem, to same korzyści:</p>
            <p>eksport produktów z WF-Mag do sklepu</p>
            <p>dodawanie nowych produktów automatycznie po dodaniu w WF-Mag</p>
            <p>automatyczne tworzenie i przypisywanie producentów</p>
            <p>obsługa i edycja wariantów produktu</p>
            <p>aktualizowanie statusów zamówień w sklepie</p>
            <p>synchronizacja danych</p>
            <p>import zamówień do WF-MAG</p>
          </div>
      </div>
  </div>
  <OssBoxSec />
</template>

<script>
import Title from "@/components/Title/Title.vue";
import OssBoxSec from "@/components/OssBoxSec/OssBoxSec.vue";
export default {
  name: "PrestaShop",
  components: {
    Title,
    OssBoxSec
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back10.jpg)"
        },
        desc: "Sprawdzony",
        title: "SKLEP PRESTA SHOP"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./PrestaShop.style.scss">

</style>