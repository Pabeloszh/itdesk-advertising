<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>NIE ZNALAZŁEŚ USŁUGI<br />KTÓREJ POTRZEBUJESZ?</h2>
      <h4>Napisz do nas postaramy się pomóc</h4>
      <form action="submit">
        <input type="text" name="" id="" placeholder="Imię i nazwisko" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="15"
          rows="8"
          placeholder="Wiadomość"
        ></textarea>
        <input type="button" value="WYŚLIJ WIADOMOŚĆ" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  mounted(){
    window.addEventListener("scroll", this.animateOnScroll);
  },
  unmounted(){
    window.removeEventListener("scroll", this.animateOnScroll);
  },
  methods:{
    inView(){
      var element = document.querySelector('.contact-container');
      var elementHeight = element.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
      
      if (scrollPosition > elementPosition * 0.75) {
        return true;
      }
      return false;
    },
    animateOnScroll(){
      if (this.inView()) {
        console.log(123);
        document.querySelector('.contact-container').classList.add('animate');
      }
    }
  },
};
</script>
<style scoped lang="scss" src="./ContactUs.style.scss"></style>
