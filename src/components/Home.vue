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
                            <div class="uppercase ml-7 text-orangeRed font-black hello -my-20">hello</div>
                            <div class="uppercase text-antiqueWhite font-black hello absolute -ml-2 -my-20">hello</div>
                        </div>
                        <div>
                            <div class="text-5xl mt-4 font-light">My name's Evgeny,</div>
                            <div class="text-3xl mt-4 font-bold">Web Developer,</div>
                            <div class="text-3xl font-bold">Designer</div>
                        </div>
                    </div>

                    <div class="z-10 h-screen relative overflow-hidden flex items-center flex-col justify-end right bottom-0" ref="me">
                        <TopHead class="z-10 -mb-2"/>
                        <div ref="icons" class="z-0">
                            <div class="flex">
                                <div>
                                    <Tailwind class="ml-10 mr-10 x-axis"/>
                                </div>                                
                                <div>
                                    <Tailwind class="mr-14 mt-4 animateIcon2"/>
                                </div>
                                <div>
                                    <Tailwind class="mr-4 animateIcon3"/>
                                </div>
                                <div>
                                    <Tailwind class="mr-6 mt-10 animateIcon4"/>
                                </div>
                            </div>
                            <div class="flex -mt-5">
                                <div>
                                    <Tailwind class="mr-10 mt-4"/>
                                </div>
                                <div>
                                    <Tailwind class="mr-16 mt-6"/>
                                </div>
                                <div>
                                    <Tailwind class="mr-10 mt-4"/>
                                </div>
                                <div>
                                    <Tailwind class="mr-10 mt-12"/>
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
import {ref, onMounted, onUnmounted} from 'vue'

export default {
    components: {TopHead, Rest, Tailwind},
    setup() {
        const width = ref('0')
        const home = ref(null)
        const me = ref(null)
        const documentHeight = ref(document.documentElement)
        const about = ref(null)
        const rest = ref(null)
        const icons = ref(null)

        const animateIcons = () => {
            icons.value.childNodes.forEach(iconLine => {
                iconLine.childNodes.forEach(icon => {
                    const max = 8, min = 4
                    icon.animate([
                        {transform: `translateY(0px)`},
                        {transform: `translateY(${(Math.random() * (max - min) + min)}px)`}
                    ], 
                    {
                        direction: 'alternate',
                        duration: ((Math.random() * (3 - 1) + 1)  *  1000),
                        iterations: Infinity,
                        easing: 'ease-in-out'
                    })
                    icon.childNodes[0].animate([
                        {transform: `translateX(0px)`},
                        {transform: `translateX(${(Math.random() * (max - min) + min)}px)`}
                    ],
                    {
                        direction: 'alternate',
                        duration: ((Math.random() * (3 - 1) + 1)  *  1000),
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
                icons.value.style.height = documentHeight.value.scrollTop / 10 * 1.4 + 'px'
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

        return {width, home, me, rest, icons}
    }
}
</script>
<style>
.hello {
    font-size: 216px;
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