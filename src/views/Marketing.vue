<template>
    <router-view></router-view>
    <MarketingBox />
    <ContactForm />
</template>
<script>
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
export default {
    name:"Marketing",
    components:{
        MarketingBox,
        ContactForm
    }
}
</script>
<style>

</style>