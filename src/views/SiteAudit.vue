<template>
    <Title :groupedProps="marketing"/>
    <SiteAuditDesc/>
    <MarketingBox/>
    <ContactForm/>
</template>
<script>
import Title from "@/components/Title/Title.vue"
import SiteAuditDesc from "@/components/SiteAuditDesc/SiteAuditDesc.vue"
import MarketingBox from "@/components/MarketingBox/MarketingBox.vue"
import ContactForm from "@/components/ContactForm/ContactForm.vue"
export default {
    name: "SiteAudit",
    components:{
        Title,
        SiteAuditDesc,
        MarketingBox,
        ContactForm
    },
    data(){
        return{
            marketing: {
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)" },
                desc: 'Szczegółowy',
                title: 'AUDYT STRONY',
            }
        }
    }
}
</script>