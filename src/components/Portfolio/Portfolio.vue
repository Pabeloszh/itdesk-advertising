<template>
  <Title :groupedProps="titleData" />
  <div class="port-container" v-if="projectsLoaded">
      <div class="filters">
          <div style="background-color:#f9f9f9">
              <p @click="filter('all', 0)">ALL</p>
          </div>
          <div @click="filter('google ads', 1)">
              <p>GOOGLE ADS</p>
          </div>
          <div  @click="filter('oprogramowanie dedykowane', 2)">
              <p>OPROGRAMOWANIE</p>
          </div>
          <div @click="filter('sklep internetowy', 3)">
              <p>SKLEPY INTERNETOWE</p>
          </div>
          <div @click="filter('social media', 4)">
              <p>SOCIAL MEDIA</p>
          </div>
          <div @click="filter('strona internetowa', 5)">
              <p>STRONY INTERNETOWE</p>
          </div>
      </div>
      <div class="projects">
        <div  v-for="(item, index) in currItems"
        :key="index" @click="$router.push({ name: 'Project', params: { name: item.fields.title.replace(/\s+/g, '-').toLowerCase() } })">
            <img :src="item.fields.mainPhoto" alt="">
            <h3>{{item.fields.title}}</h3>
        </div>
      </div>
      <div class="pages" v-if="projectsLoaded">
          <p v-if="currPage !== 1" @click="currPage--">Prev</p>
          <p v-for="(n,index) in pages" :key="index" @click="currPage = n" :style="currPage === n ? {color: '#ef7a07'} : {color: '#999'}">
              {{n}}
          </p>
          <p v-if="currPage !== pages" @click="currPage++">Next</p>
      </div>
  </div>
  <ContactForm />
</template>

<script>
import  {mapState, mapMutations} from "vuex"
import Title from "@/components/Title/Title.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
    name:"Portfolio",
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
                desc: "Wybrane",
                title: "REALIZACJE"
            },
            pages: 0,
            itemsOnPage: 20,
            currPage: 1,
            currItems: [],
            filteredItems:[]
        }
    },
    computed: {
        ...mapState(["ourProjects","projectsLoaded"])
    },
    created() {
        this.$store.dispatch("loadProjects");
    },
    methods: {
         ...mapMutations(["ourProjects", "projectsLoaded"]),
         filter(params, i){
            this.currPage = 1;
            let divs = document.querySelectorAll('.filters div');
            divs.forEach(div => div.style.backgroundColor = "#fff")
            divs[i].style.backgroundColor = "#f9f9f9"

             if(params === 'all') {
                this.filteredItems = [];
                this.pages = Math.ceil(this.ourProjects.data.items.length / this.itemsOnPage);       
                this.currItems = this.ourProjects.data.items.slice((this.currPage - 1) * 20, this.itemsOnPage);
             } else {
                this.filteredItems = this.ourProjects.data.items.filter((item)=>
                    item.fields.type.toLowerCase().includes(params)
                )
                this.pages = Math.ceil(this.filteredItems.length / this.itemsOnPage);
                this.currItems = this.filteredItems.slice((this.currPage - 1) * 20, this.itemsOnPage);
            }
        }
    },
    watch:{
        projectsLoaded: {
            handler: function(){
                if(this.projectsLoaded) {
                    this.pages = Math.ceil(this.ourProjects.data.items.length / this.itemsOnPage);       
                    this.currItems = this.ourProjects.data.items.slice((this.currPage - 1) * 20, this.itemsOnPage);
                }
            },
            immediate: true
        },
        currPage: function(val){
            if(this.filteredItems.length === 0) this.currItems = this.ourProjects.data.items.slice((val - 1) * 20, this.currPage < (this.ourProjects.data.items.length / this.itemsOnPage) ? this.currPage * this.itemsOnPage : this.itemsOnPage * (this.ourProjects.data.items.length / this.itemsOnPage));
            if(this.filteredItems.length !== 0) this.currItems = this.filteredItems.slice((val - 1) * 20, this.currPage < (this.ourProjects.data.items.length / this.itemsOnPage) ? this.currPage * this.itemsOnPage : this.itemsOnPage * (this.ourProjects.data.items.length / this.itemsOnPage));
        }
    }
}
</script>

<style scoped lang="scss" src="./Portfolio.style.scss">

</style>