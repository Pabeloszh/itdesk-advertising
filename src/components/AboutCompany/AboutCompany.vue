<template>
  <Title :groupedProps="titleData" />
  <div class="acomp-desc">
    <div class="desc">
      <p>
        <strong>itDesk development &amp; advertising</strong> to przede
        wszystkim&nbsp;<strong>zespół ekspertów</strong>, ludzi kreatywnych, z
        doświadczeniem, którzy są w stanie sprostać nawet
        <strong>najtrudniejszym wyzwaniom</strong>. Jako Agencja Marketingowa
        wchodzącą w skład <a href="https://itdesk.eu/">itDesk group</a> –
        opolskiej firmy z branży informatycznej świadczącej
        <strong>usługi kompleksowej obsługi informatycznej</strong> dla MSP.
      </p>
      <p>
        Od momentu powstania w 2007 r., po dziś dzień naszym głównym celem i
        specjalizacją jest&nbsp;dostarczanie kompleksowej obsługi firm w
        internecie. W swojej ofercie posiadamy
        <strong
          ><router-link to="/uslugi"
            >pełen wachlarz usług internetowych</router-link
          >,</strong
        >
        dzięki czemu jesteśmy w stanie zapewnić pełną obsługę nawet najbardziej
        wymagającym klientom.
      </p>
    </div>
  </div>
  <div class="acomp-title">
    <h2>Jak działa<br />nasza Agencja<br />Marketingowa</h2>
  </div>
  <div class="acomp-container" :style="{height:stepsLoaded ? (ourSteps.data.items.length * 225) : 1800 + 'px'}">
    <span id="dot"></span>
    <div class="flexbox">
      <div class="box" v-if="stepsLoaded">
        <div class="info" :style="{top: item.fields.id * (100/(ourSteps.data.items.length + 1)) + '%'}" v-for="(item, index) in ourSteps.data.items.sort((a, b) =>{
            return a.fields.id - b.fields.id
          })" :key="index">
          <p>{{`Krok ` + item.fields.id}}</p>
          <h2>
            {{item.fields.title}}
            <p>{{item.fields.desc}}</p>
          </h2>
        </div>
      </div>
      <div class="box" v-if="stepsLoaded">
        <div class="info" :style="{top: item.fields.id * (100/(ourSteps.data.items.length + 1)) + '%'}" v-for="(item, index) in ourSteps.data.items.sort((a, b) =>{
            return a.fields.id - b.fields.id
          })" :key="index">
          <p>{{`Krok ` + item.fields.id}}</p>
          <h2>
            {{item.fields.title}}
            <p>{{item.fields.desc}}</p>
          </h2>
        </div>
      </div>
    </div>
    <div class="div" v-if="stepsLoaded">
      <span class="dot" :style="{top: item.fields.id * (100/(ourSteps.data.items.length + 1)) + '%'}" v-for="(item, index) in ourSteps.data.items.sort((a, b) =>{
            return a.fields.id - b.fields.id
          })" :key="index"><i :class="item.fields.iconClass"></i></span>
    </div>
  </div>
  <ContactForm />
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Title from "@/components/Title/Title.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
  name: "AboutCompany",
  components: {
    Title,
    ContactForm
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back11.jpg)"
        },
        desc: "O firmie",
        title: "ITDESK"
      },
      dotPos: 0,
      pos: 0,
      top: 0,
      bottom: 0,
      scrollReady: false,
    };
  },
  computed: {
    ...mapState(["ourSteps", "stepsLoaded"])
  },
  created() {
    this.$store.dispatch("loadSteps");
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.pos = window.scrollY;

    this.bottom =
      document.querySelector(".title-container").clientHeight +
      document.querySelector(".acomp-desc").clientHeight +
      document.querySelector(".acomp-container").clientHeight;
    this.top =
      document.querySelector(".title-container").clientHeight +
      document.querySelector(".acomp-desc").clientHeight;

    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
      dot.classList.remove("dot-active");
    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["ourSteps", "stepsLoaded"]),

    handleScroll() {
      this.dotPos = window
        .getComputedStyle(document.querySelector("#dot"))
        .getPropertyValue("top");
      this.pos = window.scrollY;

      if (this.pos <= 0) document.querySelector("#dot").style.top = "-12.5px";
      else if (this.pos >= this.bottom)
        document.querySelector("#dot").style.top =
          document.querySelector(".acomp-container").clientHeight - 25;
      else if (this.pos >= this.top)
        document.querySelector("#dot").style.top = `calc(${this.pos -
          this.top +
          "px"})`;

      let dots = document.querySelectorAll(".dot");
      dots.forEach(dot => {
        let dotTop = window.getComputedStyle(dot).getPropertyValue("top");
        if (
          parseInt(this.dotPos.replace(/[^\d.-]/g, "")) >
          parseInt(dotTop.replace(/[^\d.-]/g, ""))
        ) {
          dot.classList.add("dot-active");
        } else {
          dot.classList.remove("dot-active");
        }
      });
    }
  },
  watch: {
    stepsLoaded: {
      handler: function() {
        if (this.stepsLoaded) {
          this.scrollReady = true
          console.log(this.ourSteps.data.items.sort((a, b) =>{
            return b.fields.id - a.fields.id
          }))
        }
      },
      immediate: true
    },
    scrollReady: {
      handler: function() {
        if (this.stepsLoaded) {
          console.log(this.scrollReady)
        }
      },
      immediate: true
    },
  }
};
</script>
<style lang="scss" src="./AboutCompany.style.scss"></style>
