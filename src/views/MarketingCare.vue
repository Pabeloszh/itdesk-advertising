<template>
    <Title :groupedProps="marketing"/>
    <MCareDesc/>
    <MarketingBox/>
    <ContactForm/>
</template>
<script>
import Title from "@/components/Title/Title.vue"
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue"
import MCareDesc from "@/components/MCareDesc/MCareDesc.vue"
import ContactForm from "@/components/ContactForm/ContactForm.vue"
export default {
    name: "Marketing",
    components:{
        Title,
        MCareDesc,
        MarketingBox,
        ContactForm
    },
    data(){
        return{
            marketing: {
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)" },
                desc: 'Wygodna',
                title: 'OPIEKA MARKETINGOWA',
            }
        }
    }
}
</script>
