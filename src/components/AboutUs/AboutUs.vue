<template>
  <div class="about-container">
    <div class="about-title">
      <h4>Dowiedz sie</h4>
      <h2>KIM JESTEŚMY</h2>
    </div>
    <div class="about-desc">
      <div class="about-info">
        <p>
          itDesk development i itDesk advertising to przede wszystkim zespół
          ekspertów, ludzi kreatywnych, z doświadczeniem, którzy są w stanie
          sprostać nawet najtrudniejszym wyzwaniom. Nasza agencja marketingowa
          wchodzi w skład itDesk group – opolskiej firmy z branży informatycznej
          świadczącej usługi kompleksowej obsługi informatycznej dla MSP. Od
          momentu powstania w 2007 r., po dziś dzień naszym głównym celem i
          specjalizacją jest dostarczanie kompleksowej obsługi firm w
          internecie. W swojej ofercie posiadamy pełen wachlarz usług
          internetowych, dzięki czemu jesteśmy w stanie zapewnić pełną obsługę
          nawet najbardziej wymagającym klientom.
        </p>
      </div>
      <div class="about-list">
        <div>
          <h4>01. PROJEKTY WYKONUJEMY NA CZAS</h4>
        </div>
        <div>
          <h4>02. JESTEŚMY NASTAWIENI NA WYNIKI</h4>
        </div>
        <div>
          <h4>03. ZAPEWNIAMY WYSOKĄ JAKOŚĆ KODU</h4>
        </div>
        <div>
          <h4>04. PROJEKTY REALIZUJEMY KOMPLEKSOWO</h4>
        </div>
        <div>
          <h4>05. ZAPEWNIAMY OPIEKĘ I WSPARCIE</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  mounted() {
    window.addEventListener("scroll", this.animateOnScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.animateOnScroll);
  },
  methods: {
    inView() {
      var element = document.querySelector(".about-container");
      var elementHeight = element.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;

      var scrollPosition = scrollY + windowHeight;
      var elementPosition =
        element.getBoundingClientRect().top + scrollY + elementHeight;

      if (scrollPosition > elementPosition * 0.75) {
        return true;
      }
      return false;
    },
    animateOnScroll() {
      if (this.inView()) {
        console.log();
        document.querySelector(".about-container").classList.add("animate");
      }
    }
  }
};
</script>
<style scoped lang="scss" src="./AboutUs.style.scss"></style>
