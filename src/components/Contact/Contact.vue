<template>
  <Title :groupedProps="titleData" />
  <div class="contact-container">
    <div>
      <h2>MASZ PYTANIA?</h2>
      <p>Napisz do nas a postaramy się pomóc</p>
      <form action="submit">
        <input type="text" name="" id="" placeholder="Imię i Nazwisko" />
        <input type="text" name="" id="" placeholder="Adres Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Wiadomość"
        ></textarea>
        <input type="button" value="WYŚLIJ WIADOMOŚĆ" />
      </form>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.0840226938662!2d17.891317915739105!3d50.662700479505226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053a33e4af861%3A0xa2554556906ca6d1!2sitDesk!5e0!3m2!1spl!2spl!4v1617705264730!5m2!1spl!2spl"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
export default {
  name: "Contact",
  components: {
    Title
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back11.jpg)",
          padding: "145px 10% 65px 10%"
        },
        desc: "Zapraszamy do kontaktu z nami",
        title: "OPOLE, UL.DOMAŃSKIEGO 112A",
        phone:
          "tel. <a href='tel:+48 519 818 970' number-data='+48 519 818 970'>+48 519 818 ***</a>",
        email:
          "<a href='mailto:advertising@itdesk.eu'>advertising@itdesk.eu</a>",
        paragraph:
          "Pracujemy od poniedziałku do piątku w godzinach od 8.00 do 16.00"
      }
    };
  }
};
</script>
<style scoped lang="scss" src="./Contact.style.scss"></style>
