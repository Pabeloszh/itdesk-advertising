<template>
  <div class="navbar-container" :class="navbarToggler ? 'scrolled' : ''">
    <div class="logo">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/itdesk-advertising-logo-w.svg"
        alt="logo"
      />
    </div>
    <div class="nav">
      <div>
        <router-link to="/">AGENCJA MARKETINGOWA</router-link>
      </div>
      <div class="dropdown">
        <router-link to="/uslugi">OFERTA <i class="fas fa-caret-down"></i></router-link>
        <div class="offers-dropdown">
          <div>
            <router-link to="/marketing-internetowy">MARKETING<br />INTERNETOWY</router-link>
            <router-link to="/opieka-marketingowa">OPIEKA MARKETINGOWA</router-link>
            <router-link to="/google-ads">GOOGLE ADS</router-link>
            <router-link to="/audyt-strony-internetowej">AUDYT STRONY</router-link>
            <router-link to="/blog-firmowy">BLOG FIRMOWY</router-link>
            <router-link to="/mailing">MAILING</router-link>
            <router-link to="/pozycjonowanie">POZYCJONOWANIE</router-link>
            <router-link to="/social-media">SOCIAL MEDIA</router-link>
            <router-link to="/marketing-szeptany">MARKETING SZEPTANY</router-link>
          </div>
          <div>
            <router-link to="/strony-i-sklepy-internetowe">STRONY I SKLEPY<br />INTERNETOWE</router-link>
            <router-link to="/systemy-zarzadzania-trescia-cms">SYSTEMY ZARZĄDZANIA<br />TREŚCIĄ CMS</router-link>
            <router-link to="/strony-internetowe">STRONY INTERNETOWE</router-link>
            <router-link to="/opieka-nad-strona-www">OPIEKA NAD STRONĄ<br />WWW</router-link>
            <a href="">SOTE SHOP</a>
            <a href="">PRESTA SHOP</a>
            <a href="">MAGENTO</a>
          </div>
          <div>
            <a href="">OPROGRAMOWANIE<br />DEDYKOWANE</a>
            <a href="">HOSTING I DOMENY</a>
            <a href="">APLIKACJE MOBILNE</a>
            <a href="">WIDEOMARKETING</a>
            <a href="">USŁUGI W CHMURZE</a>
            <a href="">SZKOLENIA</a>
          </div>
        </div>
      </div>
      <div>
        <a href="">BLOG</a>
      </div>
      <div>
        <a href="">KIM JESTEŚMY</a>
      </div>
      <div>
        <a href="">PORTFOLIO</a>
      </div>
      <div>
        <a href="">KONTAKT</a>
      </div>
      <div>
        <a href="">WYCENA</a>
      </div>
    </div>
    <div class="mobile-button" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </div>

  <div
    class="mobile-nav"
    :style="menuToggler ? 'display:flex' : 'display:none'"
  >
    <a href="">Agencja Marketingowa</a>
    <a href="">Oferta</a>
    <div class="mobile-offers">
      <a href="">Marketing internetowy</a>
      <div>
        <a href="">Opieka marketingowa</a>
        <a href="">Google Ads</a>
        <a href="">Audyt Strony</a>
        <a href="">Blog firmowy</a>
        <a href="">Mailing</a>
        <a href="">Pozycjonowanie</a>
        <a href="">Social Media</a>
        <a href="">Marketing Szeptany</a>
      </div>
      <a href="">Strony i sklepy internetowe</a>
      <div>
        <a href="">Systemy zarządzania treścią CMS</a>
        <a href="">Strony internetowe</a>
        <a href="">Opieka nad stroną WWW</a>
        <a href="">Sote Shop</a>
        <a href="">Presta Shop</a>
        <a href="">Magento</a>
      </div>
      <a href="">Oprogramowanie dedykowane</a>
      <div>
        <a href="">Hosting i domeny</a>
        <a href="">Aplikacje Mobilne</a>
        <a href="">Wideomarketing</a>
        <a href="">Usługi w chmurze</a>
        <a href="">Szkolenia</a>
      </div>
    </div>
    <a href="">Blog</a>
    <a href="">Kim jesteśmy</a>
    <a href="">Portfolio</a>
    <a href="">Kontakt</a>
    <a href="">Wycena</a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarToggler: false,
      menuToggler: false,
      winWidth: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.resizeToggle);
    window.addEventListener("mouseenter", this.dropdownToggle);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeToggle);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) this.navbarToggler = true;
      else if (!this.menuToggler && window.scrollY === 0)
        this.navbarToggler = false;
    },
    toggleMenu() {
      this.menuToggler = !this.menuToggler;
      if (this.menuToggler) {
        this.navbarToggler = true;
      } else if (!this.menuToggler && window.scrollY === 0) {
        this.navbarToggler = false;
      }
    },
    resizeToggle() {
      if (window.innerWidth > 1024) {
        this.menuToggler = false;
      }
      if (window.innerWidth > 1024 && window.scrollY === 0) {
        this.navbarToggler = false;
        this.menuToggler = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Navbar.style.scss"></style>
