<template>
    <div id="home" class="bg-blueGray lg:pt-0 pt-6 lg:h-screen" ref='home'>
        <div class="lg:absolute w-full lg:h-screen">
            <!-- STRIPES -->
            <transition
                    enter-active-class="transition transform duration-700 ease-in"
                    enter-from-class="rotate-30 translate-x-1/2 translate-y-full opacity-0"
                    appear
            >
                <div ref="stripes" class="absolute w-full h-screen">
                    <div class="z-0 invisible sm:visible absolute top-1/2 xl:mt-36 -mt-12 2xl:top-1/2 -right-3/4 transform -rotate-30">
                        <div>
                            <transition
                                    enter-active-class="transition delay-300 transform duration-1000 ease-in"
                                    enter-from-class="translate-x-full opacity-0"
                                    appear
                            >
                                <div class="bg-antiqueWhite w-long white-stripe"></div>
                            </transition>
                        </div>

                        <div>
                        <transition
                                enter-active-class="transition delay-300 transform duration-1000 ease-in"
                                enter-from-class="-translate-x-full opacity-0"
                                appear
                        >
                            <div class="bg-orangeRed w-long red-stripe"></div>
                        </transition>
                        </div>



<!--                        <div class="opacity-50">-->
<!--                            <transition-->
<!--                                    enter-active-class="transition delay-300 transform duration-1000 ease-in"-->
<!--                                    enter-from-class="translate-x-full opacity-0"-->
<!--                                    appear-->
<!--                            >-->
<!--                                <div class="bg-antiqueWhite w-long white-stripe h-16"></div>-->
<!--                            </transition>-->
<!--                        </div>-->
                    </div>
                </div>
            </transition>

            <div class="w-full top-0 lg:absolute">
                <div class="lg:h-screen px-4 lg:left-7p xl:left-12p lg:absolute flex flex-col lg:justify-center z-10">
                    <transition
                            enter-active-class="transition delay-200 transform duration-800"
                            enter-from-class="rotate-15 translate-x-full  opacity-0"
                            enter-to-class="scale-100"
                            appear
                    >
                        <div>
                            <!-- HELLO -->
                            <transition
                                    enter-active-class="transition delay-500 duration-1000 transform ease-in"
                                    enter-from-class="opacity-20"
                                    appear
                            >
                                <div ref="hello" class="z-20 -ml-vw w-full font-black">
                                    <Hello class="lg:w-44vw lg:ml-0 -mx-1.5 flex justify-start"/>
                                </div>
                            </transition>

                            <!-- MY NAME -->
                            <div class="z-50">
                                <p class="xl:text-5xl sm:text-4xl sm:ml-0 -ml-0.5 text-2xl lg:mb-5 xl:mb-8 sm:mb-8 mb-2 font-light">My name's Evgeny,</p>
                                <p class="xl:text-3xl sm:text-2xl text-xl sm:-mb-1 -mb-2 font-bold">Web Developer,</p>
                                <p class="xl:text-3xl sm:text-2xl text-xl font-bold">Designer</p>
                            </div>
                        </div>
                    </transition>
                </div>

                <!-- HEAD -->
                <transition
                        enter-active-class="transition transform duration-800"
                        enter-from-class="rotate-30 translate-x-full translate-y-1/3 opacity-0"
                        appear
                >
                    <div
                            class="z-10 lg:h-screen transform lg:mb-0 mt-8 sm:mt-0 -mb-20 sm:-mb-36 ml-8
                                lg:fixed block overflow-hidden flex items-center flex-col
                                justify-end sm:-right-0 xl:right-0 2xl:right-5p bottom-0"
                            :class="{'sm:-right-20' : !isWidthBigger}"
                            ref="me"
                    >
                        <div ref="topHead" class="z-10 h-1/3 flex flex items-end">
                            <TopHead class="top-head -mb-2 sm:mt-0 mt-4 2xl:w-2xl-head 2xl:min-w-xl-head sm:w-xl-head w-sm-head"/>
                        </div>

                        <!-- ICONS -->
                        <div ref="iconsWrapper"
                             class="lg:flex transform 2xl:scale-95 scale-85 hidden items-start">
                            <div ref="icons" class="z-0 -mt-20 opacity-90">
                                <div class="flex mt-2">
                                    <div>
                                        <Tailwind class="ml-10 mr-10"/>
                                    </div>
                                    <div>
                                        <JS class="mr-14 mt-4"/>
                                    </div>
                                    <div>
                                        <FireBase class="mr-4"/>
                                    </div>
                                    <div>
                                        <Figma class="mr-6 mt-10"/>
                                    </div>
                                </div>
                                <div class="flex -mt-5">
                                    <div>
                                        <Laravel class="mr-10 mt-4"/>
                                    </div>
                                    <div>
                                        <XD class="mr-16 mt-6"/>
                                    </div>
                                    <div>
                                        <Vue class="mr-10 mt-4"/>
                                    </div>
                                    <div>
                                        <CSS3 class="mr-10 mt-12"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div ref="rest" class="lg:mb-0 -mb-64 lg:h-2/3 flex items-start">
                            <Rest class="rest sm:mb-0 mb-24 2xl:w-2xl-head 2xl:min-w-xl-head sm:w-xl-head w-sm-head"/>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import TopHead from './images/TopHead.vue'
import Hello from './images/Hello.vue'
import Rest from './images/Rest.vue'
import Tailwind from './icons/Tailwind'
import CSS3 from './icons/CSS3'
import HTML5 from './icons/HTML5'
import FireBase from './icons/FireBase'
import JS from './icons/JS'
import Laravel from './icons/Laravel'
import Vue from './icons/Vue'
import XD from './icons/XD'
import Figma from './icons/Figma'
import Navs from '@/components/Navs'
import { ref, onMounted, onUnmounted, inject, onActivated } from 'vue'

export default {
    components: {Navs, Hello, TopHead, Rest, Tailwind, CSS3, HTML5, FireBase, JS, Laravel, Vue, XD, Figma},
    setup() {
        const width = ref('0')
        const home = ref(null)
        const me = ref(null)
        const rest = ref(null)
        const topHead = ref(null)
        const icons = ref(null)
        const iconsWrapper = ref(null)
        const stripes = ref(null)
        const hello = ref(null)
        const isWidthBigger = ref(true)

        const documentHeight = ref(document.documentElement)

        const animateIcons = () => {
            icons.value.childNodes.forEach(iconLine => {
                iconLine.childNodes.forEach(icon => {
                    const maxY = 8, minY = 4
                    const maxX = 4, minX = 8
                    icon.animate([
                                {transform: `translateY(0px)`},
                                {transform: `translateY(${(Math.random() * (maxY - minY) + minY)}px)`}
                            ],
                            {
                                direction: 'alternate',
                                duration: ((Math.random() * (4 - 1) + 1) * 1000),
                                iterations: Infinity,
                                easing: 'ease-in-out'
                            })
                    icon.childNodes[0].animate([
                                {transform: `translateX(0px)`},
                                {transform: `translateX(${(Math.random() * (maxX - minX) + minX)}px)`}
                            ],
                            {
                                direction: 'alternate',
                                duration: ((Math.random() * (4 - 1) + 1) * 1000),
                                iterations: Infinity,
                                easing: 'ease-in-out'
                            })
                })
            })
        }
        const translateMeTopAndRest = () => {
            if (home.value && innerWidth >= 1024) {
                const homeRect = home.value.getBoundingClientRect()
                if (documentHeight.value.scrollTop >= homeRect.height) {
                    me.value.style.position = 'absolute'
                    me.value.style.top = homeRect.height + 'px'
                }
                else {
                    me.value.style.position = 'fixed'
                    me.value.style.top = '0'
                    topHead.value.style.transform = `translateY(-${window.scrollY / 15}px)`
                    rest.value.style.transform = `translateY(${window.scrollY / 15}px)`
                }
            }
        }
        const setHeadSize = () => {
            if (me.value) {
                if (innerWidth < 1024) {
                    topHead.value.style.transform = `translateY(0px)`
                    rest.value.style.transform = `translateY(0px)`
                    me.value.style.position = 'static'
                }
                else {
                    topHead.value.style.transform = `translateY(-${window.scrollY / 15}px)`
                    rest.value.style.transform = `translateY(${window.scrollY / 15}px)`
                    me.value.style.position = 'fixed'
                }
            }
        }

        const setStripesOpacity = () => {
            if (stripes.value) {
                stripes.value.style.opacity = `${1 - scrollY / 1000}`
            }
        }

        const identifyOrientation = () => {
            innerWidth > innerHeight ? isWidthBigger.value = true : isWidthBigger.value = false
        }

        onActivated(() => {
            animateIcons()
            translateMeTopAndRest()
            identifyOrientation()
            icons.value.style.height = '0'

            window.addEventListener('resize', () => {
                setHeadSize()
                identifyOrientation()
            })

            window.addEventListener('scroll', e => {
                setStripesOpacity()
                translateMeTopAndRest()
            })
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', translateMeTopAndRest)
            window.removeEventListener('scroll', setStripesOpacity)
            window.removeEventListener('resize', setHeadSize)
            window.removeEventListener('resize', identifyOrientation)
        })

        return {width, home, me, rest, topHead, icons, iconsWrapper, stripes, hello, isWidthBigger}
    }
}
</script>

<style>
.-ml-vw {
    margin-left: -.3vw;
}

.white-stripe {
    height: 42vh;
}

.red-stripe {
    height: 30vh;
}

.black-stripe {
    height: 6vh;
}

.rest {
    height: auto;
}

.top-head {
    height: auto;
}

.w-long {
    width: 200vw;
}
</style>
