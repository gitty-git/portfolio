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
</style>