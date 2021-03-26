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
        <router-link to="/uslugi"
          >OFERTA <i class="fas fa-caret-down"></i
        ></router-link>
        <div class="offers-dropdown">
          <div>
            <router-link to="/marketing-internetowy"
              >MARKETING<br />INTERNETOWY</router-link
            >
            <router-link to="/opieka-marketingowa"
              >OPIEKA MARKETINGOWA</router-link
            >
            <router-link to="/google-ads">GOOGLE ADS</router-link>
            <router-link to="/audyt-strony-internetowej"
              >AUDYT STRONY</router-link
            >
            <router-link to="/blog-firmowy">BLOG FIRMOWY</router-link>
            <router-link to="/mailing">MAILING</router-link>
            <router-link to="/pozycjonowanie">POZYCJONOWANIE</router-link>
            <router-link to="/social-media">SOCIAL MEDIA</router-link>
            <router-link to="/marketing-szeptany"
              >MARKETING SZEPTANY</router-link
            >
          </div>
          <div>
            <router-link to="/strony-i-sklepy-internetowe"
              >STRONY I SKLEPY<br />INTERNETOWE</router-link
            >
            <router-link to="/systemy-zarzadzania-trescia-cms"
              >SYSTEMY ZARZĄDZANIA<br />TREŚCIĄ CMS</router-link
            >
            <router-link to="/strony-internetowe"
              >STRONY INTERNETOWE</router-link
            >
            <router-link to="/opieka-nad-strona-www"
              >OPIEKA NAD STRONĄ<br />WWW</router-link
            >
            <router-link to="/sklep-sote">SOTE SHOP</router-link>
            <router-link to="/sklep-presta">PRESTA SHOP</router-link>
            <router-link to="/sklep-magento">MAGENTO</router-link>
          </div>
          <div>
            <router-link to="/oprogramowanie-dedykowane"
              >OPROGRAMOWANIE<br />DEDYKOWANE</router-link
            >
            <router-link to="/hosting-i-domeny">HOSTING I DOMENY</router-link>
            <router-link to="/aplikacje-mobilne">APLIKACJE MOBILNE</router-link>
            <router-link to="/wideomarketing">WIDEOMARKETING</router-link>
            <router-link to="/uslugi-w-chmurze">USŁUGI W CHMURZE</router-link>
            <router-link to="/szkolenia">SZKOLENIA</router-link>
          </div>
        </div>
      </div>
      <div>
        <router-link to="/blog">BLOG</router-link>
      </div>
      <div>
        <router-link to="/o-firmie">KIM JESTEŚMY</router-link>
      </div>
      <div>
        <router-link to="/portfolio">PORTFOLIO</router-link>
      </div>
      <div>
        <router-link to="/kontakt">KONTAKT</router-link>
      </div>
      <div>
        <router-link to="/wycena">WYCENA</router-link>
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
    <router-link to="/">Agencja Marketingowa</router-link>
    <router-link to="/uslugi">Oferta</router-link>
    <div class="mobile-offers">
      <router-link to="/marketing-internetowy">Marketing internetowy</router-link>
      <div>
        <router-link to="/opieka-marketingowa">Opieka marketingowa</router-link>
        <router-link to="/google-ads">Google Ads</router-link>
        <router-link to="/audyt-strony-internetowej">Audyt Strony</router-link>
        <router-link to="/blog-firmowy">Blog firmowy</router-link>
        <router-link to="/mailing">Mailing</router-link>
        <router-link to="/pozycjonowanie">Pozycjonowanie</router-link>
        <router-link to="/social-media">Social Media</router-link>
        <router-link to="/marketing-szeptany">Marketing Szeptany</router-link>
      </div>
      <router-link to="/strony-i-sklepy-internetowe">Strony i sklepy internetowe</router-link>
      <div>
        <router-link to="/systemy-zarzadzania-trescia-cms">Systemy zarządzania treścią CMS</router-link>
        <router-link to="/strony-internetowe">Strony internetowe</router-link>
        <router-link to="/opieka-nad-strona-www">Opieka nad stroną WWW</router-link>
        <router-link to="/sklep-sote">Sote Shop</router-link>
        <router-link to="/sklep-presta">Presta Shop</router-link>
        <router-link to="/sklep-magento">Magento</router-link>
      </div>
      <router-link to="/oprogramowanie-dedykowane">Oprogramowanie dedykowane</router-link>
      <div>
        <router-link to="/hosting-i-domeny">Hosting i domeny</router-link>
        <router-link to="/aplikacje-mobilne">Aplikacje Mobilne</router-link>
        <router-link to="/wideomarketing">Wideomarketing</router-link>
        <router-link to="/uslugi-w-chmurze">Usługi w chmurze</router-link>
        <router-link to="/szkolenia">Szkolenia</router-link>
      </div>
    </div>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/o-firmie">Kim jesteśmy</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/kontakt">Kontakt</router-link>
    <router-link to="/wycena">Wycena</router-link>
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
