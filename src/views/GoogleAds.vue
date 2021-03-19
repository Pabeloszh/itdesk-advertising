<template>
    <Title :groupedProps="marketing"/>
    <GoogleAdsDesc/>
    <MarketingBox/>
    <ContactForm/>
</template>
<script>
import Title from "@/components/Title/Title.vue"
import GoogleAdsDesc from "@/components/GoogleAdsDesc/GoogleAdsDesc.vue"
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue"
import ContactForm from "@/components/ContactForm/ContactForm.vue"
export default {
    name: "GoogleAds",
    components:{
        Title,
        GoogleAdsDesc,
        MarketingBox,
        ContactForm
    },
    data(){
        return{
            marketing: {
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)" },
                desc: 'Efektywne',
                title: 'GOOGLE ADS',
            }
        }
    }
}
</script>