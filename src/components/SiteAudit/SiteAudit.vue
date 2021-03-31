<template>
  <Title :groupedProps="titleData" />
  <div class="saudit-container">
    <div class="saudit-desc">
      <div>
        <p>Zamów audyt strony internetowej jeśli:</p>
        <p>– Twoja witryna nie przynosi zysków</p>
        <p>– inwestujesz w reklamę, pozycjonujesz, a wyniki nie zachwycają</p>
        <p>Sprawdź, co należy poprawić!</p>
      </div>
      <div>
        <p>
          Audyt SEO to dogłębna analiza badanej witryny internetowej, jej
          pozycji w wyszukiwarkach, odbioru przez potencjalnych klientów. Audyt
          to również wytyczenie ścieżki zmian, które pozwolą zwiększyć pozycję
          Twojej
          <router-link to="/strony-internetowe"
            >strony internetowej.</router-link
          >
        </p>
      </div>
    </div>
    <h2>W zakres naszych działań wchodzi:</h2>
    <div class="saudit-info">
      <div>
        <h3>Ocena jakości technicznej strony pod kątem SEO</h3>
        <p>
          Przeprowadzimy dogłębną analizę techniczną Twojej strony internetowej.
          Ocenimy budowę strony, linki, słowa kluczowe, tagi.
        </p>
      </div>
      <div>
        <h3>Ocena użyteczności strony</h3>
        <p>
          Specjaliści wcielą się w rolę Twojego Klienta i przeanalizują stronę
          internetową pod względem jej intuicyjności i łatwości w obsłudze.
          Analizie zostanie poddany układ strony, czcionki, grafika, treść.
        </p>
      </div>
      <div>
        <h3>86 testów strony</h3>
        <p>
          Przeprowadzimy 86 testów weryfikujących poprawność kodu, użyteczność
          strony, BackLinks itp. Otrzymasz szczegółowy raport z przeprowadzonych
          testów.
        </p>
      </div>
      <div>
        <h3>Responsywność strony</h3>
        <p>
          Sprawdzimy czy Twoja witryna jest zoptymalizowana pod kątem urządzeń
          mobilnych, na których coraz więcej użytkowników korzysta z interentu.
        </p>
      </div>
      <div>
        <h3>Czasy ładowania treści</h3>
        <p>
          Analizujemy optymalizację Twojej strony pod względem czasu ładowania
          się treści. I wskazujemy możliwości przyśpieszenia. Nikt nie lubi
          czekać by załadowały mu się zdjęcia lub teksty.
        </p>
      </div>
      <div>
        <h3>Widoczność w sieci</h3>
        <p>
          Sprawdzamy czy do Twojej strony prowadzą media społecznościowe, mapy
          Google lub portale sprzedażowe.
        </p>
      </div>
      <div>
        <h3>Kompleksowy Raport</h3>
        <p>
          Otrzymasz szczegółowy, kilkunastostronicowy Raport zawierający
          bezcenne informacje dotyczące witryny. Wszystkie błędy są praktycznie
          i rzeczowo opisane, w prostym dla odbiorcy języku.
        </p>
      </div>
      <div>
        <h3>Propozycje zmian</h3>
        <p>
          Oprócz Raportu otrzymasz propozycje zmian, porady, które pomogą w
          pozycjonowaniu strony. Dzięki nam sięgniesz wyżej niż konkurencja!
        </p>
      </div>
      <div>
        <h3>15% rabatu na wdrożenie proponowanych zmian</h3>
        <p>
          >Wdrożymy zmiany a dodatkowo otrzymasz 15% rabatu na inne usługi
          marketingu internetowego <a href="https://itdesk.eu/">itDesk!</a>
        </p>
      </div>
    </div>
    <p>
      Po przeprowadzonym audycie zaproponujemy również nasze usługi
      <strong>optymalizacji strony www</strong>, w skład której wchodzi m.in
      <strong>content marketing</strong>, czyli napisanie treści z dobrze
      dobranymi słowami kluczowymi, opisanie grafik, stworzenie systemu
      linkowania wewnętrznego i zewnętrznego. Dzięki czemu Twoja strona będzie
      się pięła na szczyty listy w wyszukiwarce Google.
    </p>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "SiteAudit",
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
        desc: "Szczegółowy",
        title: "AUDYT STRONY"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./SiteAudit.style.scss"></style>
