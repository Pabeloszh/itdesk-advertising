<template>
  <div class="blog-container">
    <div class="blog-title">
      <h4>Czytaj</h4>
      <h2>NASZ BLOG</h2>
    </div>
    <div class="blog-desc" >
      <BlogCard v-for="(post, index) in posts" :key="index" :groupedProps="post" />
    </div>
  </div>
</template>
<script>
import  {mapState, mapMutations} from "vuex"
import BlogCard from "./BlogCard/BlogCard.vue";

export default {
    name: "Blog",
    components: {
      BlogCard
    },
    computed:{
        ...mapState(['posts'])
    },
    mounted(){
      window.addEventListener("scroll", this.animateOnScroll);
    },
    unmounted(){
      window.removeEventListener("scroll", this.animateOnScroll);
    },
    methods:{
      ...mapMutations(['posts']),
      inView(){
        var element = document.querySelector('.blog-container');
        var elementHeight = element.clientHeight;
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        
        var scrollPosition = scrollY + windowHeight;
        var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
        
        if (scrollPosition > elementPosition * 0.55) {
          return true;
        }
        return false;
      },
      animateOnScroll(){
        if (this.inView()) {
          document.querySelector('.blog-container').classList.add('animate');
        }
    }
}

};
</script>
<style scoped lang="scss" src="./Blog.style.scss"></style>
