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

                    <!-- image -->
                    <div class="z-10 h-screen flex flex-col justify-end right bottom-0" ref="me">
                        <TopHead class="-mb-2"/>
                        <Rest class=""/>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHead from './images/TopHead.vue'
import Rest from './images/Rest.vue'
import {ref, onMounted, onUnmounted} from 'vue'

export default {
    components: {TopHead, Rest},
    props: ['about'],
    setup(props) {
        const width = ref('0')
        const home = ref(null)
        const me = ref(null)
        const documentHeight = ref(document.documentElement)
        const about = ref(null)

        const onScroll = () => {
            const homeRect = home.value.getBoundingClientRect()
            
            if (documentHeight.value.scrollTop >= homeRect.height) {
                me.value.style.position = 'absolute'
                me.value.style.top = homeRect.height + 'px'
            }
            else {
                me.value.style.position = 'fixed'
                me.value.style.top = '0'
            }
        }

        onMounted(() => {
            me.value.style.position = 'fixed'
            about.value = document.getSelection('#about')
            window.addEventListener('scroll', onScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll)
        })

        return {width, home, me}
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