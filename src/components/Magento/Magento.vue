<template>
  <Title :groupedProps="titleData" />
  <div class="mshop-desc">
    <p>
      Magento, jest rozbudowanym skryptem, pozwala tworzyć funkcjonalne, złożone
      sklepy internetowe w oparciu o sprzedaż polską i zagraniczną. Decydując
      się na ten sklep, warto podjąć współpracę z ekspertami, którzy mają
      doświadczenie w budowaniu sklepów opartych na tym silniku.
    </p>
    <div class="mshop-box">
      <div>
        <h3>Główne cechy Magento</h3>
        <p>
          silnik przeznaczony dla właścicieli średnich i dużych sklepów (min.
          kilkadziesiąt produktów)
        </p>
        <p>sprawdzony na rynkach polskich i międzynarodowych</p>
        <p>wyróżnia się rozbudowaną funkcjonalnością</p>
        <p>wymaga zaawansowanej wiedzy wdrożeniowca</p>
        <p>posiada dość złożony panel administracyjnym</p>
        <p>
          możliwość stworzenia sklepu internetowego w technologii responsive
        </p>
        <p>wiele darmowych dodatków</p>
        <p>definiowane uprawnienia administratorów</p>
        <p>możliwość użycia wielu walut</p>
        <p>możliwość zarządzania wieloma językami</p>
        <p>
          funkcja multisklepu – możliwość zarządzania kilkoma sklepami z jednego
          panelu.
        </p>
      </div>
      <div>
        <h3>Integracja Magento</h3>
        <p>
          Magento, to złożony system pozwalający na integrację z popularnymi
          programami księgowo – magazynowymi, takimi jak
          <a href="https://itdesk.eu/usluga/enova365-erp/">Enova</a>, Subiekt,
          WF-MAG.<br />
          Profesjonalnie przeprowadzona integracja z subiektem pozwala na
          zautomatyzowanie pewnych czynności:
        </p>
        <p>integracja produktów</p>
        <p>integracja i możliwość edytowania cech produktu</p>
        <p>integracja kontrahentów</p>
        <p>synchronizacja danych</p>
        <p>czytelny sposób przesyłania informacji o stanach magazynowych</p>
        <p>
          Rozwiązanie to dedykujemy właścicielom większych sklepów
          internetowych, którym zależy na pełnej integracji i szybszej obsłudze
          sklepu.
        </p>
      </div>
    </div>
  </div>
  <OssBoxSec />
</template>

<script>
import Title from "@/components/Title/Title.vue";
import OssBoxSec from "@/components/OssBoxSec/OssBoxSec.vue";
export default {
  name: "Magento",
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
        desc: "Rozbudowany",
        title: "SKLEP MAGENTO"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./Magento.style.scss"></style>
