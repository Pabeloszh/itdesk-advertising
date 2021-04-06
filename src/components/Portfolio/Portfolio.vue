<template>
  <Title :groupedProps="titleData" />
  <div class="port-container" v-if="projectsLoaded">
      <div class="filters">
          *filters*
      </div>
      <div class="projects">
        <div  v-for="(item, index) in ourProjects.data.items"
        :key="index" @click="$router.push({ name: 'Project', params: { name: item.fields.title.replace(/\s+/g, '-').toLowerCase() } })">
            <img :src="item.fields.mainPhoto" alt="">
            <h3>{{item.fields.title}}</h3>
        </div>
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
            }
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
    }
}
</script>

<style scoped lang="scss" src="./Portfolio.style.scss">

</style>