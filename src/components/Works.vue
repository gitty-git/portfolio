<template>
    <div id="works" class="h-screen block bg-antiqueWhite overflow-hidden relative">
        <div class="left-15 mt-24 absolute w-full">
            <div class="text-6xl -mx-12 font-black uppercase opacity-90 max-w-max transform rotate-90">
                <h1 class="text-right">My </h1>
                <h1 class="text-right">recent </h1>
                <h1 class="text-right">works</h1>
            </div>

            <div ref="slider" class="relative height-600 w-1/3">
                <button @click.prevent="handleLeftBtn" class="z-20 absolute top-1/2 transform translate-x-1/2 cursor-pointer -left-12">
                    <ArrowR class="transform rotate-180"/>
                </button>
                <div ref="track" class="relative h-full">
                    <div class="active slide absolute top-0 bottom-0 w-full">
                        <div class="bg-red-200 w-full h-full">slide content1</div>
                    </div>
                    <div class="slide absolute top-0 bottom-0 w-full">
                        <div class="bg-blue-200 w-full h-full">slide content2</div>
                    </div>
                    <div class="slide absolute top-0 bottom-0 w-full">
                        <div class="bg-green-200 w-full h-full">slide content3</div>
                    </div>
                </div>
                <button @click.prevent="handleRightBtn" class="z-20 absolute top-1/2 transform translate-x-1/2 cursor-pointer -right-12">
                    <ArrowR/>
                </button>
            </div>
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
import {onMounted, ref} from 'vue'

export default {
    components: {ArrowR},
    setup() {
        const slider = ref(null)
        const track = ref(null)        
        const slides = ref(null)
        const slideWidth = ref(null)

        const arrangeSlides = (slide, index) => {
            slide.style.left = slideWidth.value * index + 'px'
        }

        const translateToSlide = (track, currentSlide, targetSlide) => {
            track.value.style.transform = `translateX(-${targetSlide.style.left})`
            currentSlide.classList.remove('active')
            targetSlide.classList.add('active')
        }

        const handleRightBtn = () => {
            const currentSlide = track.value.querySelector('.active')
            const nextSlide = currentSlide.nextElementSibling
            translateToSlide(track, currentSlide, nextSlide)
        }

        const handleLeftBtn = () => {
            const currentSlide = track.value.querySelector('.active')
            const nextSlide = currentSlide.previousElementSibling
            translateToSlide(track, currentSlide, nextSlide)
        }

        onMounted(() => {
            slides.value = [...track.value.children]
            slideWidth.value = slides.value[0].getBoundingClientRect().width
            slides.value.forEach(arrangeSlides)
            console.log(slideWidth.value);
        })        

        return {slider, track,  slides, handleRightBtn, handleLeftBtn}
    }
}
</script>

<style scope>
.rotateH1 {
    letter-spacing: 5px;
    transform-origin:0 50%;
    transform: rotate(90deg) translate(-50%, 50%);
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    font-size: 1.3em;
}
.height-600 {
    height: 600px;
}
</style>