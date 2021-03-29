<template>
  <div class="title-container" :style="groupedProps.backgroundPhoto">
    <div class="title-title" :style="[groupedProps.phone ? {'height': '300px'} : {'height': '180px'}]">
      <h4>{{ groupedProps.desc }}</h4>
      <h2 :style="[groupedProps.phone ? {'font-size': '50px'} : {'font-size': '70px'}]">{{ groupedProps.title }}</h2>
      <h5 v-show="groupedProps.phone" v-html="groupedProps.phone"></h5>
      <h5 v-show="groupedProps.email" v-html="groupedProps.email"></h5>
      <p v-show="groupedProps.paragraph" v-html="groupedProps.paragraph"></p>
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
<style lang="scss" src="./Title.style.scss"></style>
