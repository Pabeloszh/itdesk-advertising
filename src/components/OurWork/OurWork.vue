<template>
    <div class="owork-container">
        <div class="owork-title">
            <h4>Zobacz</h4>
            <h2>NASZE PRACE</h2>
        </div>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="slide in slides" :key="slide">
                    <div class="carousel__item" :style="slide"></div>
                </Slide>
                <template #addons>
                    <navigation>
                        <template #prev>
                            <span><i class="fas fa-chevron-left"></i></span>
                        </template>
                        <template #next>
                            <span><i class="fas fa-chevron-right"></i></span>
                        </template>
                    </navigation>
                </template>
            </Carousel>
        <button>ZOBACZ WIĘCEJ</button>
    </div>
</template>

<script>
// import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
export default {
    name:"OurWork",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data(){
        return{
            slides: [
                {
                    backgroundImage:"url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/portfolio-callback.jpg)"
                }, 
                {
                    backgroundImage:"url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/portfolio-timetax.jpg)"
                }, 
                {
                   backgroundImage:"url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/portfolio-novafakta.jpg"
                }, 
                {
                    backgroundImage:"url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/portfolio-proracing2.jpg"
                }, 
                {
                    backgroundImage:"url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/portfolio-gtv.jpg"
                }
            ],
            settings: {
                itemsToShow: 3.5,
                wrapAround: true,
                snapAlign: 'center',
            },
            breakpoints: {
                0: {
                    itemsToShow: 1,
                    wrapAround: true,
                    snapAlign: 'center',
                },
                500: {
                    itemsToShow: 1.5,
                    wrapAround: true,
                    snapAlign: 'center',
                },
                // 700px and up
                768: {
                    itemsToShow: 2.5,
                    wrapAround: true,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3.5,
                    wrapAround: true,
                    snapAlign: 'center',
                },
                1440: {
                    itemsToShow: 4.5,
                    wrapAround: true,
                    snapAlign: 'center',
                },
            }
        }
    },
    mounted(){
        window.addEventListener("scroll", this.animateOnScroll);
        document.querySelector('.carousel__prev').style = "background-color:#00000080; outline:none; left:30px; border-radius:0; color:#fff;"
        document.querySelector('.carousel__next').style = "background-color:#00000080; outline:none; right:30px; border-radius:0; color:#fff;"

    },
    unmounted(){
        window.removeEventListener("scroll", this.animateOnScroll);
    },
    methods:{
        inView(){
        var element = document.querySelector('.owork-container');
        var elementHeight = element.clientHeight;
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        
        var scrollPosition = scrollY + windowHeight;
        var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
        
        if (scrollPosition > elementPosition * 0.8) {
            return true;
        }
            return false;
        },
        animateOnScroll(){
            if (this.inView()) {
                document.querySelector('.owork-container').classList.add('animate');
            }
        }
    }
}
</script>

<style scoped lang="scss" src="./OurWork.style.scss">

</style>