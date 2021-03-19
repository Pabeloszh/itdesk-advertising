<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>NIE ZNALAZŁEŚ USŁUGI<br />KTÓREJ POTRZEBUJESZ?</h2>
      <h4>Napisz do nas postaramy się pomóc</h4>
      <form action="submit">
        <input type="text" name="" id="" placeholder="Imię i nazwisko" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="15"
          rows="8"
          placeholder="Wiadomość"
        ></textarea>
        <input type="button" value="WYŚLIJ WIADOMOŚĆ" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs"
};
</script>
<style scoped lang="scss" src="./ContactUs.style.scss"></style>
