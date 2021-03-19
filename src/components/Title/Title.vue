<template>
  <div class="title-container" :style="groupedProps.backgroundPhoto">
    <div class="title-title">
      <h4>{{ groupedProps.desc }}</h4>
      <h2>{{ groupedProps.title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    groupedProps: {
      type: Object
    }
  }
};
</script>
<style scoped lang="scss" src="./Title.style.scss"></style>
