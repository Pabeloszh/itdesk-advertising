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
  <div class="acomp-container">
    <span id="dot"></span>
    <div class="flexbox">
      <div class="box">
        <div class="info">
          <p>KROK 2</p>
          <h2>
            Hosting
            <p>serwer hostingowy oraz skrzynki pocztowe</p>
          </h2>
        </div>
        <div class="info">
          <p>KROK 4</p>
          <h2>
            Pozycjonowanie
            <p>
              optymalizacja strony internetowej pod kątem pozycjonowania w
              wyszukiwarkach
            </p>
          </h2>
        </div>
        <div class="info">
          <p>Krok 6</p>
          <h2>
            Google Ads
            <p>reklama w wyszukiwarce Google Ads</p>
          </h2>
        </div>
        <div class="info">
          <p>Krok 8</p>
          <h2>
            Konwersja
            <p>
              optymalizacja strony internetowej pod kątem użyteczności,
              zwiększania poziomu konwersji i wartości koszyka
            </p>
          </h2>
        </div>
      </div>
      <div class="box">
        <div class="info">
          <p>KROK 1</p>
          <h2>Rezerwacja<br />domeny</h2>
        </div>
        <div class="info">
          <p>KROK 2</p>
          <h2>
            Hosting
            <p>serwer hostingowy oraz skrzynki pocztowe</p>
          </h2>
        </div>
        <div class="info">
          <p>KROK 3</p>
          <h2>
            Strona / Sklep
            <p>
              projekt strony internetowej lub portalu (np. społecznościowego),
              wdrożenie sklepu internetowego dostosowanego do potrzeb klienta
            </p>
          </h2>
        </div>
        <div class="info">
          <p>KROK 4</p>
          <h2>
            Pozycjonowanie
            <p>
              optymalizacja strony internetowej pod kątem pozycjonowania w
              wyszukiwarkach
            </p>
          </h2>
        </div>
        <div class="info">
          <p>KROK 5</p>
          <h2>
            Analiza
            <p>
              monitoring strony internetowej pod kątem odwiedzin, najlepszych i
              najgorszych treści, słów kluczowych – Google Analytics
            </p>
          </h2>
        </div>
        <div class="info">
          <p>Krok 6</p>
          <h2>
            Google Ads
            <p>reklama w wyszukiwarce Google Ads</p>
          </h2>
        </div>
        <div class="info">
          <p>KROK 7</p>
          <h2>
            Kampania<br />REKLAMOWA
            <p>
              – kampania reklamowa w internecie (banery reklamowe, marketing
              szeptany, mailing, reklama na portalach branżowych, portale
              YouTube, Facebook, Twitter, fora i blogi internetowe)
            </p>
          </h2>
        </div>
        <div class="info">
          <p>Krok 8</p>
          <h2>
            Konwersja
            <p>
              optymalizacja strony internetowej pod kątem użyteczności,
              zwiększania poziomu konwersji i wartości koszyka
            </p>
          </h2>
        </div>
      </div>
    </div>
    <div class="div">
      <span class="dot"><i class="far fa-lightbulb"></i></span>
      <span class="dot"><i class="fas fa-inbox"></i></span>
      <span class="dot"><i class="far fa-image"></i></span>
      <span class="dot"><i class="far fa-file-alt"></i></span>
      <span class="dot"><i class="fas fa-balance-scale-right"></i></span>
      <span class="dot"><i class="fas fa-dollar-sign"></i></span>
      <span class="dot"><i class="fas fa-globe"></i></span>
      <span class="dot"><i class="far fa-thumbs-up"></i></span>
    </div>
  </div>
  <ContactForm />
</template>
<script>
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
      bottom: 0
    };
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
    console.log(
      document.querySelector(".title-container").clientHeight +
        document.querySelector(".acomp-desc").clientHeight +
        document.querySelector(".acomp-container").clientHeight
    );
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
      dot.classList.remove("dot-active");
    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
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

      console.log(this.pos, parseInt(this.dotPos.replace(/[^\d.-]/g, "")));

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
  }
};
</script>
<style lang="scss" src="./AboutCompany.style.scss"></style>
