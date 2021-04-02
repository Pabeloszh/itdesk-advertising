<template>
  <div class="title-container" :style="groupedProps.backgroundPhoto">
    <div
      class="title-title"
      :style="[groupedProps.phone ? { height: '300px' } : { height: '180px' }]"
    >
      <h4>{{ groupedProps.desc }}</h4>
      <h2
        :style="[
          groupedProps.phone
            ? { 'font-size': '50px', color: textColor }
            : { 'font-size': '70px', color: textColor }
        ]"
      >
        {{ groupedProps.title }}
      </h2>
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
  },
  data() {
    return {
      textColor: "#fff"
    };
  },
  mounted() {
    this.textColor =
      this.groupedProps.backgroundPhoto.backgroundImage ===
      "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/4198525-1-scaled.jpg)"
        ? "#999"
        : this.groupedProps.backgroundPhoto.backgroundImage ===
          "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back2.jpg)"
        ? "#353740"
        : "#fff";
  }
};
</script>
<style lang="scss" src="./Title.style.scss"></style>
