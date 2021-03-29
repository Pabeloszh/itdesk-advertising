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
            map
        </div>
    </div>
</template>

<script>
import Title from "@/components/Title/Title.vue"
export default {
  name: "Contact",
  components: {
    Title,
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back11.jpg)",
            padding: '145px 10% 65px 10%'
        },
        desc: "Zapraszamy do kontaktu z nami",
        title: "OPOLE, UL.DOMAŃSKIEGO 112A",
        phone: "tel. <a href='tel:+48 519 818 970' number-data='+48 519 818 970'>+48 519 818 ***</a>",
        email: "<a href='mailto:advertising@itdesk.eu'>advertising@itdesk.eu</a>",
        paragraph: "Pracujemy od poniedziałku do piątku w godzinach od 8.00 do 16.00"
      },
    }
  }
}
</script>
<style scoped lang="scss" src="./Contact.style.scss">

</style>