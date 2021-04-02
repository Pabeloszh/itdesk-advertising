<template>
  <Title :groupedProps="titleData" />
  <div class="positioning-container">
    <div>
      <p>
        Dzisiejszy klient szuka szybkich odpowiedzi na swoje pytania, nie ma
        czasu przeglądać wielu linków wyświetlonych po jego słowie kluczowym.
        Dlatego, aby osiągnąć sukces, Twoja firma musi znaleźć się w Top10
        wynikach wyszukiwania. Im wyższa pozycja, tym efektywniejsza sprzedaży.
        Zleć u nas pozycjonowanie !
      </p>
    </div>
    <div>
      <p>
        Przygotowując
        <router-link to="/audyt-strony">optymalizację SEO</router-link>,
        tworzymy unikalne treści, które są najważniejszym czynnikiem wpływającym
        na pozycję danej witryny w wynikach wyszukiwania. Udoskonalamy kod
        strony, <a href="https://graficzne.studio/">ulepszamy grafię</a>.
      </p>
    </div>
    <div>
      <h3>Pozycjonowanie stron</h3>
      <p>
        To bardzo rozbudowany proces optymalizacji różnych aspektów domeny
        internetowej.<br />
        Ich efektem jest wzrost widoczności strony w wyszukiwanych frazach
        kluczowych zadawanych przez użytkowników. Idealne pozycjonowanie daje
        przewagę nad konkurencją i zwiększa rozpoznawalność marki.
      </p>
    </div>
    <div>
      <h3>Pozycjonowanie sklepów</h3>
      <p>
        Ze względu na charakter sklepów internetowych z wieloma podstronami,
        działania SEO różnią się od tych prowadzonych na stronach
        internetowych.<br />
        Cel jest ten sam znaleźć się w Top 10 wyników, lecz jego realizacja jest
        bardziej złożonym procesem, w którym pomogą Ci nasi specjaliści.
      </p>
    </div>
    <div>
      <h3>Pozycjonowanie Lokalne</h3>
      <p>
        Jeśli prowadzisz biznes lokalny, to właśnie ten model pozycjonowania
        powinie być wdrożony dla twojej marki.<br />
        Proces ten koncentruje się na zastosowaniu fraz zawierających
        lokalizację danej firmy, dzięki czemu Twoja firma będzie rozpoznawalna w
        lokalnej społeczności, dla której prowadzisz biznes.
      </p>
    </div>
    <div>
      <h3>Pozycjonowanie zagraniczne</h3>
      <p>
        Duże firmy działające lub chcące działać na rynkach międzynarodowych
        posiadają swoje strony w różnych wersjach językowych, lecz to nie
        wystarczy, aby móc aktywnie uczestniczyć w tych rynkach. Dlatego dla
        takich firm przygotowaliśmy pozycjonowanie zagraniczne, skupiające się
        na optymalizacji strony pod kątem charakterystyki danego kraju oraz słów
        kluczowych w jego języku.
      </p>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "Positioning",
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
        desc: "Efektywne",
        title: "POZYCJONOWANIE"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./Positioning.style.scss"></style>
