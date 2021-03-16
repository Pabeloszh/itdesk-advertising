<template>
    <div class="main-container">
            <Slide :groupedProps="first"/>
            <Slide :groupedProps="second" style='display:none'/>
            <Slide :groupedProps="third" style='display:none'/>

            <div class="prev-next">
                <i class="fas fa-chevron-left" @click="toggleLeft"></i>
                <i class="fas fa-chevron-right" @click="toggleRight"></i>
            </div>
            <div class="dots">
                <p style='opacity:1'>&bull;</p>
                <p>&bull;</p>
                <p>&bull;</p>
            </div>
    </div>
</template>
<script>
import Slide from "./Slide/Slide"
export default {
    name:"MainSlider",
    components:{
        Slide
    },
    data(){
        return{
            first:{
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back1.jpg)" },
                desc: 'Skuteczny',
                title1: 'MARKETING',
                title2: 'INTERNETOWY',
                paragraph: 'pozycjonowanie / social media / kreacja treści',
                buttonDesc: 'Zobacz jak zwiększymy Twoje dochody',
                isLight: false
            },
            second:{
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back2.jpg)" },
                desc: 'Efektowne i Efektywne',
                title1: 'STRONY I SKLEPY',
                title2: 'INTERNETOWE',
                paragraph: 'wordpress / prestashop / magento / sote',
                buttonDesc: 'Zobacz jak usprawnimy twój biznes',
                isLight: true,
            },
            third:{
                backgroundPhoto: { backgroundImage: "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back3.jpg)" },
                desc: 'Niezawodny',
                title1: 'HOSTING',
                title2: 'I DOMENY',
                paragraph: 'serwery dedykowane / niezawodna poczta / usługi na miarę',
                buttonDesc: 'Wybierz usługi dopasowane do twoich potrzeb',
                isLight: true
            },
            counter: 0,
        }
    },
    methods: {
        toggleLeft(){
            this.counter -= 1;
            if(this.counter === -1){
                this.counter = 2;
            }
        },
        toggleRight(){
            this.counter += 1;
            if(this.counter === document.querySelectorAll('.slide-container').length){
                this.counter = 0;
            }
        }
    },
    mounted(){
        setInterval(()=>{
            this.counter += 1;
            if(this.counter === document.querySelectorAll('.slide-container').length){
                this.counter = 0;
            }
        }, 4000);
    },
    watch: {
        counter: function(val){
            let slides = document.querySelectorAll('.slide-container');
            let arrows = document.querySelectorAll('.prev-next i');
            let bulls = document.querySelectorAll('.dots p');
            for(let i = 0; i < slides.length; i++){
                slides[i].style.display = 'none';
                bulls[i].style.opacity = '0.5';
            }
            if(val !== 0){
                for(let j = 0; j < arrows.length; j++){
                    arrows[j].style.color = '#353740'
                }
                for(let k = 0; k < bulls.length; k++){
                    bulls[k].style.color = '#353740'
                }
            } else {
                for(let j = 0; j < arrows.length; j++){
                    arrows[j].style.color = '#fff'
                }
                for(let k = 0; k < bulls.length; k++){
                    bulls[k].style.color = '#fff'
                }
            }
            
            slides[val].style.display = 'block';
            bulls[val].style.opacity = '1';
        }
    }

}
</script>
<style scoped lang="scss" src="./MainSlider.style.scss">
</style>