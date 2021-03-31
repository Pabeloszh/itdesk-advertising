<template>
  <div class="slide-container" :style="groupedProps.backgroundPhoto">
    <div class="slide-desc">
      <h4>{{ groupedProps.desc }}</h4>
      <h2 :style="groupedProps.isLight ? 'color: #353740' : 'color: #fff'">
        {{ groupedProps.title1 }}<br />{{ groupedProps.title2 }}
      </h2>
      <p :style="groupedProps.isLight ? 'color: #353740' : 'color: #fff'">
        {{ groupedProps.paragraph }}
      </p>
      <button @click="$router.push(groupedProps.url)">{{ groupedProps.buttonDesc }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slide",
  props: {
    groupedProps: {
      type: Object
    }
  }
};
</script>
<style scoped lang="scss" src="./Slide.style.scss"></style>
