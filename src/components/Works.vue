<template>
    <div id="works" class="h-screen block bg-antiqueWhite overflow-hidden relative">
        <div class="bottom-1/3 bg-font-size opacity-5 font-black absolute left-1/2 transform -rotate-30">WORKS</div>
        <div class="left-10m -top-64 absolute w-full transform -rotate-30">
            
            <div class="text-6xl -mx-12 font-black uppercase opacity-90 max-w-max transform rotate-90">
                <h1 class="text-right">My </h1>
                <h1 class="text-right">recent </h1>
                <h1 class="text-right">works</h1>
            </div>
            <div ref="slides" class="mt-24 w-full absolute left-0 duration-500">
                <div class="w-1/2 absolute" v-for="work, id in works" :key="work">         
                    <div class="relative">                 
                        <button @click="handleLeftBtn(work)" v-show="work.active && work.id !== 0" 
                            class="-left-16 -ml-2 p-2 z-10 cursor-pointer top-1/2 absolute transform rotate-180">
                            <ArrowR />
                        </button>       
                        <h1 class="rotateH1">{{id + 1}}. {{work.title}}</h1>
                        <img class="pr-20" :src="require(`@/assets/${work.img}`)" alt="">
                        <p class="absolute text-right w-full pr-20 text-xs mt-2">{{work.tags}}</p>
                        <button @click="handleRightBtn(work)" v-show="work.active && work.id !== works.length - 1" 
                            class="right-10 p-2 z-10 cursor-pointer top-1/2 absolute">
                            <ArrowR />
                        </button>          
                    </div>
                </div>                
            </div>


            <!-- <div ref="slider" class="relative w-1/2 mt-24">
                <button @click.prevent="handleLeftBtn" class="z-20 absolute top-1/2 transform translate-x-1/2 cursor-pointer -ml-2 -left-16">
                    <ArrowR class="transform rotate-180"/>
                </button>
                <div ref="track" class="relative h-auto duration-200 w-full">
                    <div class="active slide top-0 h-auto bottom-0 w-full">
                        <div class="pr-10vw w-full h-auto">
                            <h1 class="rotateH1">1. Stone Electro</h1>
                            <img class="shadow-md w-full h-auto" src="../assets/stone-electro/stone-electro.png" alt="">
                        </div>
                    </div>
                    <div class="slide absolute top-0 bottom-0 w-full">
                        <div class="pr-10vw w-full">
                            <h1 class="rotateH1">2. News Site</h1>
                            <img class="shadow-md w-full" src="../assets/news-site/news-site.png" alt="">
                        </div>
                    </div>
                    <div class="slide absolute top-0 bottom-0 w-full">
                        <div class="pr-10vw w-full">
                            <h1 class="rotateH1">1. Portfolio</h1>
                            <img class="shadow-md w-full" src="../assets/portfolio/portfolio.png" alt="">
                        </div>
                    </div>
                </div>
                <button @click.prevent="handleRightBtn" class="z-20 absolute top-1/2 transform translate-x-1/2 cursor-pointer right-0">
                    <ArrowR/>
                </button>
            </div> -->
            <!-- <div class="relative w-full" ref="worksWrapper">
            <div class="flex absolute" ref="works">
                <div class="relative mt-24 w-64 mr-12" ref="workItem">
                    <div class="block absolute -ml-2 top-0 left-0 bottom-0 whitespace-nowrap">
                        <h1 class="rotateH1">1. Stone Electro</h1>
                    </div>
                    <div class="flex h-full items-center ">
                        <div>
                            <img class="shadow-md" src="../assets/stone-electro/stone-electro.png" alt="">
                        </div>
                        <div class="h-full flex items-center px-5 hover:bg-red-50 cursor-pointer" @click="handleClick">
                            <ArrowR />
                        </div>
                    </div>
                </div>
                <div class="relative mt-24 w-64 mr-12" ref="workItem">
                    <div class="block absolute -ml-2 top-0 left-0 bottom-0 whitespace-nowrap">
                        <h1 class="rotateH1">1. Stone Electro</h1>
                    </div>
                    <div class="flex h-full items-center ">
                        <div>
                            <img class="shadow-md" src="../assets/stone-electro/stone-electro.png" alt="">
                        </div>
                        <div class="h-full flex items-center px-5 hover:bg-red-50 cursor-pointer" @click="handleClick">
                            <ArrowR />
                        </div>
                    </div>
                </div>
            </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import ArrowR from './icons/ArrowR.vue'
import {computed, onMounted, onUnmounted, ref, watchEffect} from 'vue'

export default {
    components: {ArrowR},
    setup() {
        const works = ref([
            {id: 0, active: true, img: 'stone-electro/stone-electro.png', title: 'Stone Electro', tags: 'Design / Front End'},
            {id: 1, active: false, img: 'news-site/news-site.png', title: 'News Site', tags: 'Design / Full Stack'},
            {id: 2, active: false, img: 'portfolio/portfolio.png', title: 'Portfolio', tags: 'Design / Full Stack'},
        ])
        const slides = ref(null)
        const slideWidth = ref(0)

        const handleRightBtn = (work) => {
            // console.log(work.id)
            if  (works.value[work.id + 1]) {
                works.value.map(work => work.active = false)
                works.value[work.id + 1].active = true
                slides.value.style.left = slides.value.offsetLeft - slideWidth.value + 'px'
                // slides.value.style.transform = `translateX(-${slideWidth.value}px)`
            }

            // slides.value.style.transform = `translateX(-${slideWidth.value}px)`
        }

        const handleLeftBtn = (work) => {            
            if (works.value[work.id - 1]) {
                works.value.map(work => work.active = false)
                slides.value.style.left = slides.value.offsetLeft + slideWidth.value + 'px'                
                works.value[work.id - 1].active = true
            }
        }

        onMounted(() => {
            slideWidth.value = slides.value.children[0].offsetWidth
            const slidesChildren = [...slides.value.children]

            slidesChildren.forEach((slide, index) => {
                slide.style.left = slideWidth.value * index + 'px'
            })
            // setSlidesWidth()
            // window.addEventListener('resize', e => {
            //     setSlidesWidth()
            //     translateToSlide(track, track.value.children[0], track.value.children[0])
            // })
        })

        onUnmounted(() => {

        })

        return {works, slides, handleRightBtn, handleLeftBtn}
    }
}
</script>

<style scope>
.bg-font-size{
    font-size: 18vw;
}
.left-10m {
    left: 10%;
}
.rotateH1 {
    letter-spacing: 5px;
    transform-origin:0 50%;
    transform: rotate(90deg) translate(-50%, 50%);
    position:absolute;
    left: -4px;
    top:0;
    bottom:0;
    margin:auto;
    font-size: 1.3em;
}
.h-600 {
    height: 600px;
}
.-right-6vw {
    right: 0px;
}
</style>