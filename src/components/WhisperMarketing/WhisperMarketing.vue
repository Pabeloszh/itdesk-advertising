<template>
  <Title :groupedProps="titleData" />
  <div class="whisper-container">
    <div class="whisper-desc">
      <div>
        <p>
          Marketing szeptany to
          <strong>nowoczesna forma skutecznej reklamy</strong>. Tajemnica tkwi w
          odwróceniu znanych trendów reklamowych. Liczy się przede wszystkim
          odpowiednie podejście do odbiorcy jak do człowieka spragnionego
          informacji, a nie typowo konsumenta. Buzz marketing to
          <strong>budowanie pozytywnej opinii</strong> wokół firmy, wokół
          produktu, nienachalne opisywanie korzyści wynikających ze współpracy z
          daną firmą.
        </p>
      </div>
      <div>
        <p>
          Marketing szeptany <strong>nie jest nachalny</strong>, nie wywołuje
          negatywnych emocji i <strong>buduje pozytywne skojarzenia</strong> z
          produktem. Forma ta bazuje na autorytecie znajomych, zwyczajnych
          użytkowników, a nie zatrudnionych celebrytów, brzmi „ludzkim” językiem
          i cieszy się wysoką wiarygodnością.<br />
          Pozwala stopniowo budować markę, a
          <strong>efekty marketingu szeptanego są długofalowe</strong>. W ten
          sposób można zareklamować każdy produkt. 90% konsumentów przy wyborze
          danego produktu kieruje się opiniami i rekomendacjami innych.
        </p>
      </div>
    </div>
    <h2>Po co ,,szeptać''?</h2>
    <div class="whisper-info">
      <div>
        <i class="far fa-check-square"></i>
        <h4>Budowanie pozytywnego wizerunku firmy</h4>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <h4>Działania długofalowe</h4>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <h4>
          Zwiększenie ruchu na stronie, które przekłada się na zyski finansowe
        </h4>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <h4>Szybki sposób dotarcia do potencjalnych klientów</h4>
      </div>
      <div>
        <i class="far fa-check-square"></i>
        <h4>Duża wiarygodność przekazu</h4>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "WhisperMarketing",
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
        desc: "Wiarygodny",
        title: "MARKETING SZEPTANY"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./WhisperMarketing.style.scss"></style>
