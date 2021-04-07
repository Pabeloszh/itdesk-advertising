<template>
  <Title :groupedProps="titleData" />
  <div class="pshop-desc">
    <p>
      Wybór silnika sklepu nie jest prosty. Zależy od wielu czynników, między
      innymi stopnia złożoności sklepu, asortymentu, liczby produktów, kraju, w
      którym chcemy dokonywać sprzedaży. Sklepy internetowe Presta Shop stanowią
      sprawdzone rozwiązanie, dedykowane zarówno mniejszym, jak i średnim
      sklepom internetowym.
    </p>
    <div class="pshop-box">
      <div>
        <h3>Główne cechy Presta Shop</h3>
        <div>
          <i class="far fa-check-square"></i>
          <p>system lekki i łatwy w konfiguracji</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>prosty w obsłudze panel administracyjny</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>idealny do sprzedaży polskiej i zagranicznej</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>wydajny, nie wymaga dużych zasobów serwera</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>posiada dużo wbudowanych funkcjonalności</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>idealny zarówno do małych, jak i większych sklepów</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>możliwość tworzenia sklepów w różnych wersjach językowych</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>obsługa wielu walut</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>dodatki</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>
            integracja z programami księgowo-magazynowymi Subiekt, WF-MAG, Enova
          </p>
        </div>
      </div>
      <div>
        <h3>Integracja PrestaShop</h3>
        <p>
          Jeśli prowadzisz dynamiczny biznes, potrzebujesz dedykowanego
          rozwiązania integrującego sklep z
          <a href="https://itdesk.eu/usluga/enova365-erp/">Enovą</a>, Subiektem
          i WF-Mag, koniecznie czytaj dalej!<br />
          Nasi eksperci pokażą, że integracja PrestaShop z subiektem, to same
          korzyści:
        </p>
        <div>
          <i class="far fa-check-square"></i>
          <p>eksport produktów z WF-Mag do sklepu</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>dodawanie nowych produktów automatycznie po dodaniu w WF-Mag</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>automatyczne tworzenie i przypisywanie producentów</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>obsługa i edycja wariantów produktu</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>aktualizowanie statusów zamówień w sklepie</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>synchronizacja danych</p>
        </div>
        <div>
          <i class="far fa-check-square"></i>
          <p>import zamówień do WF-MAG</p>
        </div>
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

<style scoped lang="scss" src="./PrestaShop.style.scss"></style>
