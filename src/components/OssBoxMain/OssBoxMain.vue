<template>
  <div class="off-box">
    <div class="box">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-strony1-p.svg"
        alt="icon"
      />
      <div @click="$router.push('/systemy-zarzadzania-trescia-cms')">
        <h5>SYSTEMY ZARZĄDZANIA TREŚCIĄ CMS</h5>
        <p>
          Pozwalają na prostą, intuicyjną edycję, aktualizację i rozbudowę stron
          internetowych. Nasi fachowcy pomogą Ci w wyborze odpowiedniego Systemu
          dla Ciebie.
        </p>
      </div>
    </div>
    <div class="box" @click="$router.push('/strony-internetowe')">
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-strony2-p.svg"
        alt="icon"
      />
      <div>
        <h5>STRONY INTERNETOWE</h5>
        <p>
          Oferujemy tanie strony internetowe w oparciu o gotowe lub indywidualne
          projekty graficzne.
        </p>
      </div>
    </div>
    <div class="box" @click="$router.push('/opieka-nad-strona-www')"> 
      <img
        src="https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/10/ikona-strony3-p.svg"
        alt="icon"
      />
      <div>
        <h5>OPIEKA NAD STRONĄ WWW</h5>
        <p>
          Świadczymy usługę opieka techniczna nad stroną internetową WWW.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OssBoxMain"
};
</script>

<style scoped lang="scss" src="./OssBoxMain.style.scss"></style>
