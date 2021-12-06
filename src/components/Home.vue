<template>
    <div id="home" class="bg-blueGray h-screen" ref='home'>
        <div class="absolute w-full h-screen">
            
                <div ref="stripes" class="relative w-full h-screen overflow-hidden">
                    <div class="top-1/2 mt-12 z-0 absolute -right-1/3 transform -rotate-30">
                    <transition name="fade" appear mode="in-out">
                        <div class="bg-antiqueWhite w-long white-stripe"></div>
                    </transition>
                        <div class="bg-orangeRed w-long red-stripe"></div>
                        <div class="bg-graphiteBlack w-long black-stripe"></div>
                    </div>
                </div>
            
            <div class="w-full top-0 h-screen absolute">
                <div class="h-screen left absolute left-15 flex flex-col justify-center z-10">
                    <div class="flex helloExlc relative">
                        <h1 class="uppercase leading-none margin-left-15vw text-orangeRed font-black hello">hello</h1>
                        <h1 class="uppercase leading-none text-antiqueWhite font-black hello absolute -ml-2">hello</h1>
                        <svg class="h-full right-0 excl-padding absolute" id="Group_173" data-name="Group 173" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 154">
                            <path id="Path_74" data-name="Path 74" d="M0,0H59L49.018,94H10Z" fill="#EF5A38"/>
                            <rect id="Rectangle_121" data-name="Rectangle 121" width="51" height="39" transform="translate(4 115)" fill="#EF5A38"/>
                        </svg>
                        <svg class="h-full padding-right-15vw right-0 excl-padding absolute" id="Group_173" data-name="Group 173" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 154">
                            <path id="Path_74" data-name="Path 74" d="M0,0H59L49.018,94H10Z" fill="#fae6cc"/>
                            <rect id="Rectangle_121" data-name="Rectangle 121" width="51" height="39" transform="translate(4 115)" fill="#fae6cc"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-2-3vw leading-none mt-8 font-light">My name's Evgeny,</p>
                        <p class="text-1-5vw leading-none mt-8 font-bold">Web Developer,</p>
                        <p class="text-1-5vw leading-none font-bold">Designer</p>
                    </div>
                </div>

                <div class="z-10 h-screen transform relative overflow-hidden flex items-center flex-col justify-end right bottom-0" ref="me">
                    <div ref="topHead" class="z-10">
                        <TopHead :class="{'top-head' : scrX < 1000}" class="top-head -mb-2"/>
                    </div>                        
                    <div ref="iconsWrapper" class="flex items-start">
                        <div ref="icons" class="z-0 -mt-20 opacity-90">
                            <div class="flex mt-2">
                                <div>
                                    <Tailwind class="ml-10 mr-10 x-axis"/>
                                </div>                                
                                <div>
                                    <JS class="mr-14 mt-4 animateIcon2"/>
                                </div>
                                <div>
                                    <FireBase class="mr-4 animateIcon3"/>
                                </div>
                                <div>
                                    <Laravel class="mr-6 mt-10 animateIcon4"/>
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
                   
                    <div ref="rest" class="z-10">
                        <Rest2 :class="{'rest' : scrX > 1280}" class="rest" />
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHead from './images/TopHead.vue'
import Rest from './images/Rest.vue'
import Rest2 from './images/Rest2.vue'
import Tailwind from './icons/Tailwind'
import CSS3 from './icons/CSS3'
import HTML5 from './icons/HTML5'
import FireBase from './icons/FireBase'
import JS from './icons/JS'
import Laravel from './icons/Laravel'
import Vue from './icons/Vue'
import XD from './icons/XD'

import {ref, onMounted, onUnmounted} from 'vue'

export default {
    components: {TopHead, Rest, Tailwind, CSS3, HTML5, FireBase, JS, Laravel, Vue, XD, Rest2},
    setup() {
        const width = ref('0')
        const home = ref(null)
        const me = ref(null)
        const documentHeight = ref(document.documentElement)
        const about = ref(null)
        const rest = ref(null)
        const topHead = ref(null)
        const icons = ref(null)
        const iconsWrapper = ref(null)
        const scrX = ref(0)
        const stripes = ref(null)
        //incons-wrapper

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
                        duration: ((Math.random() * (4 - 1) + 1)  *  1000),
                        iterations: Infinity,
                        easing: 'ease-in-out'
                    })
                    icon.childNodes[0].animate([
                        {transform: `translateX(0px)`},
                        {transform: `translateX(${(Math.random() * (maxX - minX) + minX)}px)`}
                    ],
                    {
                        direction: 'alternate',
                        duration: ((Math.random() * (4 - 1) + 1)  *  1000),
                        iterations: Infinity,
                        easing: 'ease-in-out'
                    })
                })
            })}

        const increaseIconsRect = (e) => {
            const homeRect = home.value.getBoundingClientRect()
            if (documentHeight.value.scrollTop >= homeRect.height) {
                me.value.style.position = 'absolute'
                me.value.style.top = homeRect.height + 'px'
            }
            else {
                me.value.style.position = 'fixed'
                me.value.style.top = '0'
                rest.value.style.transform = `translateY(${window.scrollY / 15}px)`
                topHead.value.style.transform = `translateY(-${window.scrollY / 15}px)`
            }
        }

        onMounted(() => {
            // consolevalue.childNodes);
            animateIcons()
            scrX.value = innerWidth
            icons.value.style.height = '0'
            me.value.style.position = 'fixed'
            window.addEventListener('scroll', e => {
                stripes.value.style.opacity = `${1 - scrollY / 1000}`
                increaseIconsRect(e)
            })
            window.addEventListener('resize', () => {
                scrX.value = innerWidth
            })
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', increaseIconsRect)
        })

        return {width, home, me, rest, topHead, icons, iconsWrapper, scrX, stripes}
    }
}
</script>
<style>
.white-stripe {
    height: 12vw;
}
.red-stripe {
    height: 8vw;
}
.black-stripe {
    height: 5vw;
}
.rest {
    width: 760px;
    height: auto;
    margin-bottom: -14vw;
    /* max-width: 21vw; */
    /* width: 37vw; */
}
.top-head {
    width: 760px;
    height: auto;
    /* width: 37vw;     */
    /* min-width: 21vw; */
}
.excl-padding {
    padding: 1.7vw 0;
}
.margin-left-15vw {
    margin-left: 1.5vw;
}
.padding-right-15vw {
    padding-right: 1.5vw;
}
.hello {
    /* font-size: 216px; */
    padding-right: 3.2vw;
    font-size: 11.2vw;
}
.helloExlc{
    margin: -1vw 0;
}
.text-2-3vw {
    font-size: 2.3vw;
}
.text-1-5vw {
    font-size: 1.5vw;
}
.-my-1vw {
    margin: -1vw 0 -1vw 0;
}
.w-long {
    width: 2500px;
}
.left-15 {
    left: 15%;
}
.right {
    right: 5%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>