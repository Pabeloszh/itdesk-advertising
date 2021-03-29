<template>
  <div class="cform-container">
    <div class="cform-title">
      <h4>Zainteresowany</h4>
      <h2>Wypełnij formularz kontaktowy, a my przygotujemy ofertę</h2>
      <p>
        Jeżeli zainteresowała Cię nasza oferta, posiadasz własny serwis
        internetowy lub chcesz rozpocząć swój biznes w internecie, złóż nam
        zapytanie ofertowe. Oprócz wyceny otrzymasz kilka wskazówek dotyczących
        możliwych do obrania strategii marketingowych w internecie.
      </p>
    </div>
    <div class="cform-desc">
      <form action="submit">
        <div class="div">
          <input type="text" name="" id="" placeholder="Imię i Nazwisko" />
          <input type="text" name="" id="" placeholder="Adres Email" />
        </div>
        <div class="div">
          <input type="text" name="" id="" placeholder="Nazwa Firmy" />
          <input type="text" name="" id="" placeholder="Telefon" />
        </div>
        <select name="" id="">
          <option value="">Budżet</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Wiadomość"
        ></textarea>
        <input type="button" value="WYŚLIJ ZAPYTANIE" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  mounted(){
    window.addEventListener("scroll", this.animateOnScroll);
  },
  unmounted(){
    window.removeEventListener("scroll", this.animateOnScroll);
  },
  methods:{
    inView(){
      var element = document.querySelector('.cform-container');
      var elementHeight = element.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
      
      if (scrollPosition > elementPosition * 0.8) {
        return true;
      }
      return false;
    },
    animateOnScroll(){
      if (this.inView()) {
        document.querySelector('.cform-container').classList.add('animate');
      }
    }
  },
};
</script>
<style scoped lang="scss" src="./ContactForm.style.scss"></style>
