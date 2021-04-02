<template>
  <div class="main-container">
    <Slide :groupedProps="first" />
    <Slide :groupedProps="second" style="z-index:2" />
    <Slide :groupedProps="third" style="z-index:2" />

    <div class="prev-next">
      <i class="fas fa-chevron-left" @click="toggleLeft"></i>
      <i class="fas fa-chevron-right" @click="toggleRight"></i>
    </div>
    <div class="dots">
      <p style="opacity:1" @click="counter = 0">&bull;</p>
      <p @click="counter = 1">&bull;</p>
      <p @click="counter = 2">&bull;</p>
    </div>
  </div>
</template>
<script>
import Slide from "./Slide/Slide";
export default {
  name: "MainSlider",
  components: {
    Slide
  },
  data() {
    return {
      first: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back1.jpg)"
        },
        desc: "Skuteczny",
        title1: "MARKETING",
        title2: "INTERNETOWY",
        paragraph: "pozycjonowanie / social media / kreacja treści",
        buttonDesc: "Zobacz jak zwiększymy Twoje dochody",
        isLight: false,
        url: "/marketing-internetowy"
      },
      second: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back2.jpg)"
        },
        desc: "Efektowne i Efektywne",
        title1: "STRONY I SKLEPY",
        title2: "INTERNETOWE",
        paragraph: "wordpress / prestashop / magento / sote",
        buttonDesc: "Zobacz jak usprawnimy twój biznes",
        isLight: true,
        url: "/strony-i-sklepy-internetowe"
      },
      third: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back3.jpg)"
        },
        desc: "Niezawodny",
        title1: "HOSTING",
        title2: "I DOMENY",
        paragraph: "serwery dedykowane / niezawodna poczta / usługi na miarę",
        buttonDesc: "Wybierz usługi dopasowane do twoich potrzeb",
        isLight: true,
        url: "/hosting-i-domeny"
      },
      counter: 0
    };
  },
  methods: {
    toggleLeft() {
      this.counter -= 1;
      if (this.counter === -1) {
        this.counter = 2;
      }
    },
    toggleRight() {
      this.counter += 1;
      if (
        this.counter === document.querySelectorAll(".slide-container").length
      ) {
        this.counter = 0;
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.counter += 1;
      if (
        this.counter === document.querySelectorAll(".slide-container").length
      ) {
        this.counter = 0;
      }
    }, 4000);
  },
  watch: {
    counter: function(val) {
      let slides = document.querySelectorAll(".slide-container");
      let arrows = document.querySelectorAll(".prev-next i");
      let bulls = document.querySelectorAll(".dots p");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
        slides[i].style.opacity = "0";
        slides[i].style.zIndex = "2";
        bulls[i].style.opacity = "0.5";
      }
      if (val !== 0) {
        for (let j = 0; j < arrows.length; j++) {
          arrows[j].style.color = "#353740";
        }
        for (let k = 0; k < bulls.length; k++) {
          bulls[k].style.color = "#353740";
        }
      } else {
        for (let j = 0; j < arrows.length; j++) {
          arrows[j].style.color = "#fff";
        }
        for (let k = 0; k < bulls.length; k++) {
          bulls[k].style.color = "#fff";
        }
      }
      slides[val].style.visibility = "visible";
      slides[val].style.opacity = "1";
      slides[val].style.zIndex = "3";
      bulls[val].style.opacity = "1";
    }
  }
};
</script>
<style lang="scss" src="./MainSlider.style.scss"></style>
