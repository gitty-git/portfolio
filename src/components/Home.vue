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
                    <div class="z-0 absolute top-1/2 xl:mt-24 -mt-24 2xl:top-1/2 -right-3/4 transform -rotate-30">
                        <transition
                                enter-active-class="transition delay-500 transform duration-1000 ease-in"
                                enter-from-class="translate-x-full opacity-0"
                                appear
                        >
                            <div class="bg-antiqueWhite w-long white-stripe"></div>
                        </transition>

                        <transition
                                enter-active-class="transition delay-500 transform duration-1000 ease-in"
                                enter-from-class="-translate-x-full opacity-0"
                                appear
                        >
                            <div class="bg-orangeRed w-long red-stripe"></div>
                        </transition>

                        <transition
                                enter-active-class="transition delay-500 transform duration-1000 ease-in"
                                enter-from-class="translate-x-full opacity-0"
                                appear
                        >
                            <div class="bg-graphiteBlack w-long black-stripe"></div>
                        </transition>
                    </div>
                </div>
            </transition>

            <div class="w-full top-0 lg:absolute">
                <div class="lg:h-screen px-2 lg:absolute sca left-24 2xl:left-12p flex flex-col lg:justify-center z-10">
                    <transition
                            enter-active-class="transition transform duration-800 ease-out"
                            enter-from-class="rotate-15 translate-x-full translate-y-1/4 opacity-0"
                            enter-to-class="scale-100"
                            appear
                    >
                        <div>
                            <!-- HELLO -->
                            <transition
                                    enter-active-class="transition delay-500 duration-1000 transform ease-in"
                                    enter-from-class="opacity-10"
                                    appear
                            >
                                <div ref="hello" class="z-20 -ml-vw w-full font-black">
                                    <Hello class="lg:w-44vw flex justify-start"/>
                                </div>
                            </transition>

                            <!-- MY NAME -->
                            <div class="z-50 ml-1 md:ml-2 lg:ml-0">
                                <p class="xl:text-5xl sm:text-4xl sm:ml-0 -ml-0.5 text-2xl lg:mb-5 xl:mb-8 sm:mb-8 mb-2 font-light">My name's Evgeny,</p>
                                <p class="xl:text-3xl sm:text-2xl text-xl sm:-mb-1 -mb-2 font-bold">Web Developer,</p>
                                <p class="xl:text-3xl sm:text-2xl text-xl font-bold">Designer</p>
                            </div>
                        </div>
                    </transition>
                </div>

                <!-- HEAD -->
                <transition
                        enter-active-class="transition transform duration-700 ease-out"
                        enter-from-class="rotate-30 translate-x-full translate-y-1/3 opacity-0"
                        appear
                >
                    <div class="z-10 lg:h-screen transform lg:fixed block overflow-hidden flex items-center flex-col
                justify-end 2xl:right-16 xl:-right-4 -right-10 bottom-0"
                         ref="me"
                    >
                        <div ref="topHead" class="z-10 h-1/3 flex flex items-end">
                            <TopHead
                                    class="top-head 2xl:w-2xl-head xl:w-xl-head md:w-md-head sm:mt-0 mt-4 w-sm-head -mb-2"/>
                        </div>

                        <!-- ICONS -->
                        <div ref="iconsWrapper"
                             class="lg:flex transform 2xl:scale-100 xl:scale-90 scale-75 hidden items-start">
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
                                        <Laravel class="mr-6 mt-10"/>
                                    </div>
                                </div>
                                <div class="flex -mt-5">
                                    <div>
                                        <XD class="mr-10 mt-4"/>
                                    </div>
                                    <div>
                                        <HTML5 class="mr-16 mt-6"/>
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

                        <div ref="rest" class="z-10 xl:mb-0 lg:-mb-36 -mb-64 lg:h-2/3 flex items-start">
                            <Rest class="rest sm:mb-0 mb-24 2xl:w-2xl-head xl:w-xl-head md:w-md-head w-sm-head"/>
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
import Navs from '@/components/Navs'
import { ref, onMounted, onUnmounted, inject } from 'vue'

export default {
    components: {Navs, Hello, TopHead, Rest, Tailwind, CSS3, HTML5, FireBase, JS, Laravel, Vue, XD},
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
            if (home.value) {
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

        onMounted(() => {
            animateIcons()
            icons.value.style.height = '0'

            window.addEventListener('resize', () => {
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
            })

            window.addEventListener('scroll', e => {
                if (stripes.value) {
                    stripes.value.style.opacity = `${1 - scrollY / 1000}`
                }

                if (innerWidth >= 1024) {
                    translateMeTopAndRest()
                }
            })
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', translateMeTopAndRest)
        })

        return {width, home, me, rest, topHead, icons, iconsWrapper, stripes, hello}
    }
}
</script>

<style>
.-ml-vw {
    margin-left: -.3vw;
}

.white-stripe {
    height: 24vh;
}

.red-stripe {
    height: 16vh;
}

.black-stripe {
    height: 10vh;
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
