<template>
    <div id="home" class="bg-blueGray h-screen" ref='home'>
        <div class="absolute w-full h-screen">
            <div class="relative w-full h-screen overflow-hidden">
                <div class="top-1/2 z-0 absolute -right-1/3 transform -rotate-30">
                    <div class="bg-antiqueWhite w-long h-72"></div>
                    <div class="bg-orangeRed w-long h-48"></div>
                    <div class="bg-graphiteBlack w-long h-24"></div>
                </div>
            </div>
            <div class="w-full top-0 h-screen absolute">
                    <div class="h-screen left absolute left-15 flex flex-col justify-center z-10">
                        <div class="flex">
                            <h1 class="uppercase leading-none ml-7 text-orangeRed font-black hello -my-1vw">hello</h1>
                            <h1 class="uppercase leading-none text-antiqueWhite font-black hello absolute -ml-2 -my-1vw">hello</h1>
                        </div>
                        <div>
                            <p class="text-2-3vw leading-none mt-8 font-light">My name's Evgeny,</p>
                            <p class="text-1-5vw leading-none mt-8 font-bold">Web Developer,</p>
                            <p class="text-1-5vw leading-none font-bold">Designer</p>
                        </div>
                    </div>

                    <div class="z-10 h-screen transform 2xl:scale-100 scale-50 relative overflow-hidden flex items-center flex-col justify-end right bottom-0" ref="me">
                        <TopHead class="z-10 -mb-2"/>
                        <div ref="iconsWrapper" class="flex items-start">
                        <div ref="icons" class="z-0 opacity-90">
                            <div class="flex">
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
                            <Rest/>
                        </div>                        
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHead from './images/TopHead.vue'
import Rest from './images/Rest.vue'
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
    components: {TopHead, Rest, Tailwind, CSS3, HTML5, FireBase, JS, Laravel, Vue, XD},
    setup() {
        const width = ref('0')
        const home = ref(null)
        const me = ref(null)
        const documentHeight = ref(document.documentElement)
        const about = ref(null)
        const rest = ref(null)
        const icons = ref(null)
        const iconsWrapper = ref(null)
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

        const onScroll = () => {
            const homeRect = home.value.getBoundingClientRect()            
            if (documentHeight.value.scrollTop >= homeRect.height) {
                me.value.style.position = 'absolute'
                me.value.style.top = homeRect.height + 'px'      
            }
            else {
                me.value.style.position = 'fixed'
                me.value.style.top = '0'
                iconsWrapper.value.style.height = documentHeight.value.scrollTop / 10 * 1.4 + 'px'
                icons.value.style.marginTop = (32 - (documentHeight.value.scrollTop / 32)) * -1 + 'px'
                rest.value.style.marginBottom = documentHeight.value.scrollTop * -1 / 20 * 1.4 + 'px'
            }
        }

        onMounted(() => {
            // consolevalue.childNodes);
            animateIcons()
            icons.value.style.height = '0'
            me.value.style.position = 'fixed'
            window.addEventListener('scroll', onScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll)
        })

        return {width, home, me, rest, icons, iconsWrapper}
    }
}
</script>
<style>
.hello {
    /* font-size: 216px; */
    font-size: 12vw;
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
</style>