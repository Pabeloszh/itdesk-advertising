<template>
  <Title :groupedProps="offers" />
  <div class="ssl-container">
    <p>
      Domena internetowa to adres, pod którym Twoja
      <router-link to="/strony-i-sklepy-internetowe"
        ><strong>strona internetowa</strong></router-link
      >&nbsp;i konto
      <router-link to="/hosting-i-domeny" data-et-has-event-already="true"
        >email</router-link
      >
      będą widoczne w internecie. Nazwa domeny powinna być łatwa do zapamiętania
      i kojarzona z firmą bądź z typem działalności Twojej firmy. Jest to
      decyzja na lata, więc warto się dobrze zastanowić nad wyborem właściwej
      nazwy domeny. Jeżeli nie jesteś pewien jaką nazwę wybrać, chętnie pomożemy
      Ci podjąć właściwą decyzję.
    </p>
    <div class="table">
      <div class="col">
        <div>
          <p>Typ domeny</p>
        </div>
        <div>
          <p><strong>.pl</strong><br />Polska</p>
        </div>
        <div>
          <p>
            <strong>.com.pl, .org.pl, .net.pl</strong><br />Polska -
            Funkcjonalne
          </p>
        </div>
        <div>
          <p><strong>.katowice.pl, .waw.pl</strong><br />Polska - Regionalne</p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Minimalny okres</p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Rejestracja domeny</p>
        </div>
        <div>
          <p><strong>19.90 zł</strong><br />24.48 zł z VAT</p>
        </div>
        <div>
          <p><strong>19.90 zł</strong><br />24.48 zł z VAT</p>
        </div>
        <div>
          <p><strong>9.90 zł</strong><br />12.18 zł z VAT</p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Odnowienie domeny</p>
        </div>
        <div>
          <p><strong>99.00 zł</strong><br />121.77 zł z VAT</p>
        </div>
        <div>
          <p><strong>75.00 zł</strong><br />92.25 zł z VAT</p>
        </div>
        <div>
          <p><strong>29.00 zł</strong><br />35.67 zł z VAT</p>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="col">
        <div>
          <p>Typ domeny</p>
        </div>
        <div>
          <p><strong>.biz</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.com</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.info</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.mobi</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.name</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.net</strong><br />Domena Globalna</p>
        </div>
        <div>
          <p><strong>.org</strong><br />Domena Globalna</p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Minimalny okres</p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
        <div>
          <p><strong>1 rok</strong></p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Rejestracja domeny</p>
        </div>
        <div>
          <p><strong>69.00 zł</strong><br />84.87 zł z VAT</p>
        </div>
        <div>
          <p><strong>59.00 zł</strong><br />72.57 zł z VAT</p>
        </div>
        <div>
          <p><strong>59.00 zł</strong><br />72.57 zł z VAT</p>
        </div>
        <div>
          <p><strong>99.00 zł</strong><br />121.77 zł z VAT</p>
        </div>
        <div>
          <p><strong>49.00 zł</strong><br />60.27 zł z VAT</p>
        </div>
        <div>
          <p><strong>59.00 zł</strong><br />72.57 zł z VAT</p>
        </div>
        <div>
          <p><strong>69.00 zł</strong><br />84.87 zł z VAT</p>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Odnowienie domeny</p>
        </div>
        <div>
          <p><strong>99.00 zł</strong><br />121.77 zł z VAT</p>
        </div>
        <div>
          <p><strong>89.00 zł</strong><br />109.47 zł z VAT</p>
        </div>
        <div>
          <p><strong>89.00 zł</strong><br />109.47 zł z VAT</p>
        </div>
        <div>
          <p><strong>99.00 zł</strong><br />121.77 zł z VAT</p>
        </div>
        <div>
          <p><strong>79.00 zł</strong><br />97.17 zł z VAT</p>
        </div>
        <div>
          <p><strong>89.00 zł</strong><br />109.47 zł z VAT</p>
        </div>
        <div>
          <p><strong>99.00 zł</strong><br />121.77 zł z VAT</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "DomainsSSL",
  components: {
    Title
  },
  data() {
    return {
      offers: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back10.jpg)",
          color: "#fff"
        },
        desc: "Atrakcyjne",
        title: "DOMENY I CERTYFIKATY SSL"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./DomainsSSL.style.scss"></style>
