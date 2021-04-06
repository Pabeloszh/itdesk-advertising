<template>
    <div class="blackbg"></div>
    <div class="prodesc-container" v-if="projectsLoaded">
        <p>{{project.type}}</p>
        <h2>{{project.descTitle}}</h2>
        <div class="box">
            <p>{{project.descText}}</p>
            <div>
                <h3>Szczegóły</h3>
                <a :href="project.link">{{project.link}}</a>
            </div>
            <div>
                <h3>Technologie</h3>
                <p>{{project.tech}}</p>
            </div>
        </div>
    </div>
    <div class="proimg-container" v-if="projectsLoaded">
        <div>
            <img :src="project.descPhoto" alt="">
        </div>
    </div>
</template>

<script>
import  {mapState, mapMutations} from "vuex"
export default {
    name: "Project",
    data(){
        return {
            project: null,
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
    },
    watch:{
        projectsLoaded: {
            handler: function(){
                if(this.projectsLoaded) {
                    this.ourProjects.data.items.filter((obj)=>{if(obj.fields.title.replace(/\s+/g, '-').toLowerCase() === this.$route.params.name) this.project = obj.fields});
                    console.log(this.project)
                }
            },
            immediate: true
            
        },
    }
}
</script>

<style scoped lang="scss" src="./Project.style.scss">

</style>