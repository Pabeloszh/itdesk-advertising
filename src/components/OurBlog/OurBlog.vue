<template>
  <Title :groupedProps="titleData" />
  <div class="blog-container">
    <div class="blog-desc">
      <BlogCard
        v-for="(post, index) in posts"
        :key="index"
        :groupedProps="post"
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
    ...mapState(["posts"])
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
  methods: {
    ...mapMutations(["posts"])
  }
};
</script>

<style scoped lang="scss" src="./OurBlog.style.scss"></style>
