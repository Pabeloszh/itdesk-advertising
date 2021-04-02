<template>
  <div class="blog-container" v-if="postsLoaded">
    <div class="blog-title">
      <h4>Czytaj</h4>
      <h2>NASZ BLOG</h2>
    </div>
    <div class="blog-desc">
      <BlogCard
        v-for="(item, index) in blogPosts.data.items"
        :key="index"
        @click="$router.push({ name: 'BlogPost', params: { post: item.fields.url } })"
        :groupedProps="{img: item.fields.mainPhoto, title: item.fields.title, desc: item.fields.blogPost.content[0].content[0].value}"
      />
    </div>
  </div>
</template>
<script>
// import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import  {mapState, mapMutations} from "vuex"
import BlogCard from "./BlogCard/BlogCard.vue";

export default {
  name: "Blog",
  components: {
    BlogCard,
    // RichTextRenderer
  },
  computed: {
    ...mapState(["posts", "blogPosts","postsLoaded"])
  },
  created() {
    this.$store.dispatch("loadPost");
  },
  mounted() {
    // console.log(this.blogPosts.data.items)
    window.addEventListener("scroll", this.animateOnScroll);
    // this.cardProps = {id:}
  },
  unmounted() {
    window.removeEventListener("scroll", this.animateOnScroll);
  },
  methods: {
    ...mapMutations(["posts", "blogPosts", "postsLoaded"]),
    clac(id){
      console.log(id)
    },
    renderMarks() {
        return {
            [MARKS.BOLD]: (text, key) => ('custom-bold', { key: key }, text)
        };
    },
    renderNodes() {
        return {
            [BLOCKS.PARAGRAPH]: (node, key, next) => ('custom-paragraph', { key: key }, next(node.content, key, next))
        }
    },
    inView() {
      var element = document.querySelector(".blog-container");
      var elementHeight = element.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;

      var scrollPosition = scrollY + windowHeight;
      var elementPosition =
        element.getBoundingClientRect().top + scrollY + elementHeight;

      if (scrollPosition > elementPosition * 0.55) {
        return true;
      }
      return false;
    },
    animateOnScroll() {
      if (this.inView()) {
        document.querySelector(".blog-container").classList.add("animate");
      }
    }
  }
};
</script>
<style scoped lang="scss" src="./Blog.style.scss"></style>
