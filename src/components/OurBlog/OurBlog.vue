<template>
  <Title :groupedProps="titleData" />
  <div class="blog-container">
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
import { mapState, mapMutations } from "vuex";
import Title from "@/components/Title/Title.vue";
import BlogCard from "@/components/Blog/BlogCard/BlogCard.vue";
export default {
  name: "OurBlog",
  components: {
    Title,
    BlogCard
  },
  computed: {
    ...mapState(["blogPosts","postsLoaded"])
  },
  created() {
    this.$store.dispatch("loadPost");
  },
  methods: {
    ...mapMutations(["blogPosts", "postsLoaded"]),
  },
  data() {
    return {
      titleData: {
        backgroundPhoto: {
          backgroundImage:
            "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back13.jpg)"
        },
        desc: "Nasz",
        title: "BLOG"
      },
    };
  },
  
};
</script>

<style scoped lang="scss" src="./OurBlog.style.scss"></style>
