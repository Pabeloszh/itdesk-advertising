<template>
  <Title :groupedProps="titleData" />
  <div class="sshop-desc">
    <p>
      Sote Shop, to jeden z najpopularniejszych w kraju silników, na którego
      bazie możemy oprzeć sklep internetowy. Tworzone przez nas sklepy
      internetowe Sote są tak przygotowane, by klient odebrał gotowy, działający
      sklep, który już tego samego dnia może zarabiać.
    </p>
    <div class="sshop-box">
      <div class="col">
        <div>
          <h3>Najlepsza grafika w standardzie</h3>
          <p>
            <a href="https://www.sote.pl/">SOTESHOP</a> w standardzie posiada 7
            pięknych grafik. Każda z nich jest wyjątkowa. Każda posiada pełną
            edycję, dzięki czemu w prosty sposób dostosujesz ją do własnych
            potrzeb.
          </p>
        </div>
        <div>
          <h3>Dokumentacja Wideo</h3>
          <p>
            Sklep i panel sklepu jest intuicyjnie zaprojektowany. Dodatkowo
            przygotowaliśmy wiele profesjonalnych prezentacji
            <router-link to="/wideomarketing">Wideo</router-link><br />
            opisujących jak korzystać z funkcji programu.
          </p>
        </div>
        <div>
          <h3>Społeczność Facebook, Youtube, Twitter, Forum</h3>
          <p>
            Sklep jest zintegrowany z portalami społecznościowymi. Sami z nich
            korzystamy, budując społeczność osób korzystających z naszego
            programu.
          </p>
        </div>
        <div>
          <h3>Sprawdzona technologia</h3>
          <p>
            SOTESHOP to bezpieczeństwo. Zajmujemy się sklepami od ponad 14 lat.
            Rozumiemy specyfikę prowadzenia sklepów. Dobieramy najlepsze
            technologie, pozwalające m.in. na zachowanie ciągłości sprzedaży,
            także w gorących okresach świątecznych.
          </p>
        </div>
      </div>
      <div class="col">
        <div>
          <h3>Dostosowany do sprzedaży w Polsce i w Europie</h3>
          <p>
            Program SOTESHOP jest certyfikowany przez Trusted Shops. Oznacza to,
            że sprzedaż prowadzona za jego pomocą spełnia polskie normy prawne i
            jest stale monitorowana.<br />
            Posiadamy także certyfikację na rynek niemiecki i francuski.
            Dodatkowo możesz oferować swoje produkty w całej Europie i na
            świecie. Także w języku chińskim. Pełna obsługa międzynarodowej
            sprzedaży. W standardzie 12 gotowych wersji językowych.
          </p>
        </div>
        <div>
          <h3>Bezpłatne aktualizacje</h3>
          <p>
            Każdy sklep oparty na SOTESHOP ma dostęp do bezpłatnych
            aktualizacji. Cały proces jest prosty i zautomatyzowany.<br />
            Szybko reagujemy na zmiany technologiczne i prawne. Co tydzień
            wydajemy nowe aktualizacje i usprawnienia, a co miesiąc ukazuje się
            nowa wersja. Ponad 250 aktualizacji w 6 miesięcy.
          </p>
        </div>
        <div>
          <h3>Webstore - 51 dodatków do sklepu</h3>
          <p>
            SOTESHOP zbudowany jest modułowo. Oznacza to, że możesz w dowolnym
            momencie doinstalować do niego dodatkowe aplikacje, podobnie jak w
            telefonie. Wszystko odbywa się automatycznie bez ręcznej ingerencji
            w kod programu. Nasi klienci pobrali nasze aplikacje ponad 30 000
            razy.
          </p>
        </div>
      </div>
      <div class="col">
        <div>
          <h3>Bogata funkcjonalność sklepu</h3>
          <p>
            Sklepy internetowe nie są takie same i funkcje programu też się
            różnią. Staramy się by każdy z elementów sklepu, był jak najlepszy.
            Nie chodzi tylko by dana funkcja w sklepie była, ale o to by była
            najlepsza.<br />
            Przykładem są m.in. zdjęcia produktów: w Sote Shop możesz je nie
            tylko dodać, ale także: załączać je hurtowo, ustalać kolejność,
            ustawiać domyślne zdjęcie, różne rozmiary na listach, generować
            miniaturki, wybierać obszar kadrowania zdjęcia, dodawać znak
            wodny.<br />
            Dodatkowo system wygeneruje automatycznie galerię z powiększaniem
            produktów, zadba o odpowiednie opisy zdjęć potrzebne do
            pozycjonowania. SOTESHOP potrafi także poprawić ostrość zdjęć i
            wyostrzyć kolory. Jakość ma znaczenie.
          </p>
        </div>
        <div>
          <h3>Profesjonalny serwis</h3>
          <p>
            Kupując sklep internetowy SOTESHOP, otrzymujesz od nas roczną
            gwarancję oraz 90 dni bezpłatnej pełnej pomocy technicznej.<br />
            Nasi specjaliści pomogą Ci rozpocząć sprzedaż i skonfigurować sklep.
            U nas nie czekasz na odpowiedź (średni czas odpowiedzi 0.8 dnia
            roboczego) i możesz ocenić realizację każdego zgłoszenia. Całość
            realizowana jest przez profesjonalny system serwisowy.
          </p>
        </div>
      </div>
    </div>
    <img
      src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/soteshop.png"
      alt=""
    />
  </div>
  <OssBoxSec />
</template>

<script>
import Title from "@/components/Title/Title.vue";
import OssBoxSec from "@/components/OssBoxSec/OssBoxSec.vue";
export default {
  name: "SoteShop",
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
        desc: "Nowoczesny",
        title: "SKLEP SOTE"
      }
    };
  }
};
</script>

<style scoped lang="scss" src="./SoteShop.style.scss"></style>
