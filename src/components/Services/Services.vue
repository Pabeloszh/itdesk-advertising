<template>
  <div class="serv-container">
    <div class="serv-desc">
      <h3>agencja marketingowa itDesk</h3>
      <h4>Wybierz</h4>
      <h2>SPRAWDZONE USŁUGI</h2>
      <p>
        Agencja marketingowa itDesk w swojej ofercie posiada pełen wachlarz
        usług internetowych, dzięki czemu jesteśmy w stanie zapewnić pełną
        obsługę nawet najbardziej wymagającym klientom.
      </p>
    </div>
    <div class="serv-box">
      <BoxElement :groupedProps="first" />
      <BoxElement :groupedProps="second" />
      <BoxElement :groupedProps="third" />
      <BoxElement :groupedProps="fourth" />
      <BoxElement :groupedProps="fifth" />
      <BoxElement :groupedProps="sixth" />
    </div>
  </div>
</template>
<script>
import BoxElement from "./BoxElement/BoxElement";
export default {
  name: "Services",
  components: {
    BoxElement
  },
  data() {
    return {
      first: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona1-p.svg",
        title: "MARKETING INTERNETOWY",
        desc:
          "Wprowadzimy Twoją Markę na rynek, sprawimy, że usłyszy o niej cały świat.",
        url: "/marketing-internetowy"
      },
      second: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona2-p-1.svg",
        title: "STRONY I SKLEPY INTERNETOWE",
        desc:
          "Od ponad 10 lat tworzymy strony internetowe, portale i sklepy dla firm i klientów indywidualnych.",
        url: "/strony-i-sklepy-internetowe"
      },
      third: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona3-p.svg",
        title: "HOSTING I DOMENY",
        desc:
          "Hosting to dedykowane miejsce na serwerze dla Twojej strony, sklepu internetowego lub aplikacji.",
        url: "/hosting-i-domeny"
      },
      fourth: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona4-p.svg",
        title: "OPROGRAMOWANIE DEDYKOWANE",
        desc:
          "Zajmujemy się pisaniem systemów dedykowanych dla naszych klientów.",
        url: "/oprogramowanie-dedykowane"
      },
      fifth: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona5-p.svg",
        title: "APLIKACJE MOBILNE",
        desc:
          "Tworzymy skuteczne aplikacje na najpopularniejsze obecnie platformy mobilne.",
        url: "/aplikacje-mobilne"
      },
      sixth: {
        img:
          "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona6-p.svg",
        title: "ZOBACZ WIECEJ",
        desc: "Sprawdź jakie inne usługi mamy jeszcze w ofercie.",
        url: "/uslugi"
      }
    };
  },
  mounted() {
    window.addEventListener("scroll", this.animateOnScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.animateOnScroll);
  },
  methods: {
    inView() {
      var element = document.querySelector(".serv-container");
      var elementHeight = element.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;

      var scrollPosition = scrollY + windowHeight;
      var elementPosition =
        element.getBoundingClientRect().top + scrollY + elementHeight;

      if (scrollPosition > elementPosition * 0.25) {
        return true;
      }
      return false;
    },
    animateOnScroll() {
      if (this.inView()) {
        document.querySelector(".serv-container").classList.add("animate");
      }
    }
  }
};
</script>
<style lang="scss" src="./Services.style.scss"></style>
