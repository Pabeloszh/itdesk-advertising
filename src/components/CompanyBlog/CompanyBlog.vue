<template>
  <Title :groupedProps="titleData"/>
  <div class="blog-container">
    <div class="blog-desc">
      <div>
        <p>
          Blog firmowy pomaga w budowaniu wizerunku marki i firmy. Umożliwia
          czytelnikom bliższe poznanie firmy i branży, w której firma działa
          poprzez publikowanie artykułów poruszających tematykę danej branży.
        </p>
      </div>
      <div>
        <p>
          Dają również możliwość do pochwalenia się swoją fachową wiedzą, dzięki
          czemu rośniesz w oczach potencjalnego klienta.
        </p>
        <p>
          Zajrzyj na
          <a href="/blog/"><strong>naszego bloga firmowego</strong></a
          >, na którym opisujemy sekrety marketingu internetowego.
        </p>
      </div>
    </div>
    <h2>Jakie są zalety prowadzenia bloga firmowego?</h2>
    <div class="blog-list">
      <ul>
        <li>
          Na blogu możemy <strong>zamieszczać określone reklamy</strong> czy też
          materiały promocyjne
        </li>
        <li>
          To łatwy i niedrogi sposób na
          <strong>pogłębienie i nawiązanie relacji z klientami</strong>
        </li>
        <li>
          <strong>Budowa autorytetu</strong> i dobrego wizerunku firmy poprzez
          profesjonalne oraz ciekawe wpisy
        </li>
      </ul>
      <ul>
        <li>Blog firmowy umożliwia <strong>prowadzenie dialogu</strong></li>
        <li>
          <strong>Zwiększa się liczba odwiedzin</strong> witryny internetowej
          przedsiębiorstwa – rośnie współczynnik konwersji
        </li>
        <li>
          Prowadzenie bloga korzystnie wpływa na
          <strong>proces pozycjonowania</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title/Title.vue"
export default {
  name: "CompanyBlog",
  components:{
    Title
  },
  data(){
    return{
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)"
        },
        desc: "Interesujay",
        title: "BLOG FIRMOWY"
      }
    }
  }
};
</script>
<style scoped lang="scss" src="./CompanyBlog.style.scss"></style>
