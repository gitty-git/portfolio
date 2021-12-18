<template>
<!--    <div ref="whiteBg"-->
<!--         class="sm:hidden h-76vw -mt-14 w-long sm:mt-0 -left-1/2 absolute transform -rotate-30 bg-antiqueWhite"-->
<!--    >-->
<!--    </div>-->

    <div
            ref="worksWrapper" id="works"
            class="z-20 w-full -mt-16 -mb-8 sm:m-0 transform flex sm:transform-none -rotate-30 sm:shadow-md sm:bg-antiqueWhite
                sm:overflow-hidden sm:relative"
    >
        <div class="w-full sm:visible invisible opacity-30 h-2 bg-gradient-to-b from-graphiteBlack z-20"></div>

        <div class="bg-font-size opacity-5 font-black absolute -mt-24 2xl:-mt-12 left-1/3 top-2/3 transform sm:-rotate-30">
            <transition
                    enter-active-class="transition delay-500 transform duration-700 ease-out"
                    enter-from-class="translate-x-full opacity-0"
                    leave-active-class="transition transform duration-800 ease-in"
                    leave-to-class="-translate-x-full opacity-0"
            >
                <div class="absolute invisible opacity-50 lg:visible" v-if="showWorks">WORKS</div>
            </transition>
        </div>

        <div class="xl:ml-24 sm:-top-1/4 sm:mt-32 md:mt-48 lg:mt-32 2xl:mt-12 left-1/4 sm:left-0 -ml-6 absolute w-full transform sm:-rotate-30">
            <h1 class="sm:hidden block text-xl opacity-90 uppercase font-black">My recent works</h1>

            <div class="xl:text-6xl text-4xl sm:block hidden -mx-4 xl:-mx-10 font-black uppercase opacity-90 max-w-max transform sm:rotate-90">
                <transition
                        enter-active-class="transition delay-500 transform duration-700"
                        enter-from-class="-translate-x-96 opacity-0 -rotate-15"
                        leave-active-class="transition transform duration-300 ease-in"
                        leave-to-class="-translate-x-96 opacity-0 -rotate-15"
                >
                    <div v-show="showWorks">
                        <h1 class="text-right">My </h1>
                        <h1 class="text-right">recent </h1>
                        <h1 class="text-right">works</h1>
                    </div>
                </transition>
            </div>


            <transition
                    enter-active-class="transition transform delay-300 duration-800 ease-out"
                    enter-from-class="translate-x-full skew-x-30 opacity-0"
                    leave-active-class="transition transform delay-100 duration-1000 ease-in"
                    leave-to-class="translate-x-full -skew-x-30 opacity-0"
            >
                <div v-show="showWorks" ref="slides" class="xl:mt-24 mt-4 sm:mt-12 left-0 w-full absolute duration-500">
                    <div class="sm:w-2/3 lg:w-1/2 left-0 w-10/12 h-full absolute" v-for="(work, id) in works"
                         :key="work">
                        <div class="relative">
                            <button @click="handleLeftBtn(work)" v-show="work.active && work.id !== 0"
                                    class="sm:-left-16 -left-9 -ml-2 p-2 z-10 cursor-pointer top-1/2 absolute transform -translate-y-1/2 rotate-180">
                                <ArrowR/>
                            </button>
                            <h1 class="rotateH1">{{ id + 1 }}. {{ work.title }}</h1>
                            <div class="sm:pr-20 pr-14">
                                <router-link :to="work.link">
                                    <img class="shadow-md" :src="require(`@/assets/${work.img}`)" alt="">
                                </router-link>
                            </div>

                            <p class="absolute text-right w-full sm:pr-20 pr-14 text-xs mt-2">{{ work.tags }}</p>
                            <button @click="handleRightBtn(work)" v-show="work.active && work.id !== works.length - 1"
                                    class="sm:right-10 right-6 p-2 z-10 cursor-pointer transform -translate-y-1/2 top-1/2 absolute">
                                <ArrowR/>
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>
<script>
import ArrowR from './icons/ArrowR.vue'
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

export default {
    components: {ArrowR},
    setup() {
        const works = ref([
            {
                id: 0,
                active: true,
                img: 'stone-electro/stone-electro.png',
                title: 'Stone Electro',
                tags: 'Design / Front End',
                link: 'stone-electro'
            },
            {
                id: 1,
                active: false,
                img: 'news-site/news-site.png',
                title: 'News Site',
                tags: 'Design / Full Stack',
                link: 'news-site'
            },
            {
                id: 2,
                active: false,
                img: 'portfolio/portfolio.png',
                title: 'Portfolio',
                tags: 'Design / Full Stack',
                link: 'portfolio'
            },
        ])
        const slides = ref(null)
        const slideWidth = ref(0)
        const worksWrapper = ref(null)
        const showWorks = ref(false)

        const handleRightBtn = (work) => {
            if (works.value[work.id + 1]) {
                works.value.map(work => work.active = false)
                works.value[work.id + 1].active = true
                slides.value.style.left = slides.value.offsetLeft - slideWidth.value + 'px'
            }
        }
        const handleLeftBtn = (work) => {
            if (works.value[work.id - 1]) {
                works.value.map(work => work.active = false)
                slides.value.style.left = slides.value.offsetLeft + slideWidth.value + 'px'
                works.value[work.id - 1].active = true
            }
        }
        const setSlideWidths = () => {
            if (slides.value) {
                slideWidth.value = slides.value.children[0].offsetWidth
                const slidesChildren = [...slides.value.children]

                slidesChildren.forEach((slide, index) => {
                    slide.style.left = slideWidth.value * index + 'px'
                })
            }
        }
        const setWidthIsBigger = () => {
            if (worksWrapper.value) {
                // console.log(innerWidth / innerHeight)
                if (innerHeight / innerWidth < 0.60) {
                    worksWrapper.value.style.height = '100vh'
                }
                else {
                    if (innerWidth < 1024) {
                        worksWrapper.value.style.height = `calc(${innerWidth * 0.8}px)`
                    }
                    else {
                        worksWrapper.value.style.height = `calc(${innerWidth * 0.6}px)`
                    }

                }
            }
        }
        const setActiveSlideDefault = () => {
            if (works.value && slides.value) {
                works.value.map(work => work.active = false)
                works.value[0].active = true
                slides.value.style.left = '0px'
            }
        }
        const setShowWorks = () => {
            if (!worksWrapper.value) return
            if (innerWidth > 1024) {
                const cond1 = scrollY > worksWrapper.value.offsetTop - worksWrapper.value.offsetHeight * 0.66
                const cond2 = scrollY < worksWrapper.value.offsetTop + worksWrapper.value.offsetHeight * 0.66
                showWorks.value = cond1 && cond2
            }
            else {
                showWorks.value = true
            }
        }

        onMounted(() => {
            setWidthIsBigger()
            window.addEventListener('resize', e => {
                setSlideWidths()
                setWidthIsBigger()
                setActiveSlideDefault()

            }, false)

            window.addEventListener('scroll', () => {
                setShowWorks()
                setSlideWidths()
            })
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', setShowWorks)
            window.removeEventListener('scroll', setSlideWidths)
            window.removeEventListener('resize', setSlideWidths)
            window.removeEventListener('resize', setWidthIsBigger)
        })

        return {works, slides, handleRightBtn, handleLeftBtn, worksWrapper, showWorks}
    }
}
</script>

<style scope>
.h-76vw {
    height: 76vw;
}
.bg-font-size {
    font-size: 35vh;
}
.rotateH1 {
    letter-spacing: 0.38vw;
    transform-origin: 0 50%;
    transform: rotate(90deg) translate(-50%, 50%);
    position: absolute;
    height: 20px;
    left: -4px;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: calc(8px + 0.7vw);;
}
</style>
