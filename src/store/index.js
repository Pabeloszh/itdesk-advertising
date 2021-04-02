import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
  state() {
    return {
      posts: [
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2021/02/ilustracja-lifting_v2-400x250.jpg",
          title: "Lifting strony internetowej, czy jest mi już potrzebny?",
          desc:
            "Zacznijmy od tego, że w dzisiejszych czasach chcąc nie chcąc posiadanie strony www jest koniecznością. Nawet jeśli ma to być tylko prosty projekt strony internetowej, jest obowiązkowy. Jeśli Twoja strona www tworzona była na początku XXI wieku lub o zgrozo jeszcze..."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2021/01/grafika-do-wpisu-6-400x250.png",
          title:
            "Wizytówka Google Moja Firma, bezpłatne i niezbędne narzędzie internetowe!",
          desc:
            "Jeśli posiadacie małą firmę, która nie ma dużego budżetu na marketing internetowy, albo dopiero otwieracie swój biznes, wizytówka Google Moja Firma jest pierwszym i podstawowym miejscem, w którym powinny znaleźć się informacje o Waszej firmie. Dzięki temu możecie..."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/12/blog-wpis-5-400x250.png",
          title: "Kampanie reklamowe Facebook’a, czy warto w nie inwestować?",
          desc:
            "Odpowiedź brzmi, koniecznie! A raczej, dlaczego jeszcze tego nie robicie? Firma Marka Zukenberga przez ostatnie kilka lat bardzo mocno rozwinęła swoje narzędzia dla reklamodawców. Facebook jest królem zbierania o nas wszelkich danych, dlatego też zostawił swoją..."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/man-with-laptop-shouting-by-megaphone1-400x250.jpg",
          title: "Najpopularniejsza reklama w Internecie – Google Ads",
          desc:
            "Każdy użytkownik Internetu codziennie spotyka się z tysiącami reklam, przeglądając strony www. Mają one różne postacie, jedne irytują, drugie przyciągają uwagę. Jedne są skuteczniejsze dla danej branży inne dla innej. W chaosie i gąszczu tych wszystkich banerów,..."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/4642-400x250.jpg",
          title: "Pozycjonowanie – kto i jak znajdzie Was w sieci?",
          desc:
            "Kiedy macie już własną stronę internetową lub założony FanPage to dopiero połowa sukcesu. Nawet najlepiej przygotowana domena czy efektowny Facebook niestety nie wystarczą, aby świat dowiedział się o Waszej działalności.  Użytkownik internetu musi Was znaleźć w sieci...."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/blog1a-400x250.jpg",
          title: "FanPage – czy może być alternatywą dla strony internetowej?",
          desc:
            "W poprzednim artykule opisaliśmy, od czego zacząć, jeśli chcecie wejść z własnym biznesem do Internetu – czyli od strony internetowej. Alternatywą dla niej, ale tylko w przypadku niektórych firm, może być założenie firmowego profilu na Facebooku i prowadzenie..."
        },
        {
          img:
            "https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/04/hero2-400x250.jpg",
          title: "Strony internetowe – jak zaistnieć w sieci?",
          desc:
            "W dzisiejszych czasach, kiedy w Polsce jest ponad 30,5 miliona użytkowników internetowych każda firma, która chce się rozwijać, musi zaistnieć w Internecie. Kiedyś wystarczało posiadać wizytówkę firmową z telefonem i adresem, lecz w 2020 roku to już zdecydowanie za..."
        }
      ],
      blogPosts:[],
      postsLoaded: false,
    };
  },
  mutations: {
    show(state) {
      console.log(state);
    },
    SAVE_POSTS(state, posts) {
      state.blogPosts = posts;
      state.postsLoaded = true;
    }
  },
  actions:{
    loadPost({commit}) {
      axios.get('https://cdn.contentful.com/spaces/zr4nt40z5mav/environments/master/entries?access_token=xJofx5ouX0Xpco1qx-8CuO_IGVDfD5xtA71aJt_iUVM').then(result => {
        commit('SAVE_POSTS', result);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
});

export default store;
