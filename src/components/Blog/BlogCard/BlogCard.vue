<template>
  <div class="card-container">
    <img :src="groupedProps.img" alt="" />
    <div class="card-desc">
      <h5>{{ groupedProps.title }}</h5>
      <p>{{ groupedProps.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    groupedProps: {
      type: Object
    }
  },
};
</script>
<style scoped lang="scss" src="./BlogCard.style.scss"></style>
