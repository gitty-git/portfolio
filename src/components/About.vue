<template>
    <div ref="about" id="about"
         class="sm:h-screen h-2vh lg:z-0 px-2 lg:mb-0 mb-4 lg:mt-0 bg-blueGray bg-red-100 flex flex-col justify-center overflow-hidden relative">
        <div class="text-600 absolute transform -rotate-30 font-black opacity-5 bottom-32 uppercase">
            <transition
                    enter-active-class="transition transform delay-300 duration-1000 ease-out"
                    enter-from-class="translate-x-full opacity-0"
                    leave-active-class="transition transform duration-700 ease-in"
                    leave-to-class="-translate-x-full opacity-0"
            >
                <div class="absolute opacity-50" v-show="showAbout">About</div>
            </transition>
        </div>

        <transition
                enter-active-class="transition transform duration-700 ease-out"
                enter-from-class="translate-y-full opacity-0  rotate-15"
                leave-active-class="transition transform duration-500 ease-in"
                leave-to-class="-translate-y-full opacity-0  -rotate-15"
        >
            <div v-show="showAbout" class="-mt-24 sm:mt-0 lg:absolute px-2 lg:left-7p xl:left-12p">
                <ResponsibleTXT class="2xl:w-44vw z-30 -mx-0.5 lg:w-44vw w-full py-8 sm:w-full"/>

                <div class="xl:text-xl text-md mb-8 lg:mb-8">
                    <p>I have been creating in <span class="italic">HTML</span>, <span class="italic">CSS</span>,</p>
                    <p><span class="italic">Javascript</span> websites for over 4</p>
                    <p>years. At the moment, I enjoy</p>
                    <p>working with <span class="font-semibold">Vue 3</span></p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="133.226" height="73.603" viewBox="0 0 133.226 73.603">
                    <path id="Path_73" data-name="Path 73" d="M0-106.868,73.6,26.358H0Z"
                          transform="translate(26.358) rotate(90)" fill="#393835" opacity="0.33"/>
                </svg>
            </div>
        </transition>
    </div>
</template>

<script>
import ResponsibleTXT from './images/ResponsibleTXT.vue'
import { onMounted, onUnmounted, ref } from "vue";
import logo from "./icons/Logo";

export default {
    name: 'About',
    components: {ResponsibleTXT},
    setup() {
        const showAbout = ref(false)
        const about = ref(null)

        const setShowAbout = () => {
            const cond1 = scrollY > about.value.offsetTop - about.value.offsetHeight * 0.66
            const cond2 = scrollY < about.value.offsetTop + about.value.offsetHeight * 0.66

            showAbout.value = cond1 && cond2 || innerWidth < 640
        }

        onMounted(() => {
            window.addEventListener('scroll', setShowAbout)
        })
        onUnmounted(() => {
            window.removeEventListener('scroll', setShowAbout)
        })

        return {showAbout, about}
    }
}
</script>

<style scoped>
.text-600 {
    font-size: 600px;
}
</style>
