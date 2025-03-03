<template>
    <div class="fixed bg-antiqueWhite h-screen w-screen"></div>

    <div class="relative overflow-hidden">
        <transition
                appear
                enter-active-class="transition transform duration-500 ease-out"
                enter-from-class="translate-x-full opacity-0"
        >
            <div class="h-full px-2 md:px-14 xl:px-24 2xl:px-48 relative w-full bg-antiqueWhite flex justify-between lg:flex-row flex-col">
                <div class="w-full md:w-full lg:w-1/2 xl:w-5/12 2xl:w-4/12 mt-12 sm:mt-36">
                    <div class="lg:fixed pr-0 md:pr-28 lg:pr-36 2xl:pr-48 w-full md:w-full lg:w-1/2 xl:w-5/12 2xl:w-4/12">
                        <div class="xl:mb-16 mb-8">
                            <h1 class="2xl:text-23vw leading-none text-3xl font-black mb-4">3. Single-page application using Laravel and Vue2.</h1>
                            <p><span class="bg-white xl:text-sm italic px-2 py-1">Design / Full Stack</span></p>
                        </div>

                        <div class="xl:mb-12 mb-6 xl:text-md text-sm xl:text-base">
                            <h2 class="font-bold text-lg mb-4">Client request:</h2>
                            <p class="mb-4">A news site based on Laravel with the ability to comment and like posts. Comments can also be liked and replied once (MySQL). </p>
                            <p class="mb-4">The administrator can delete / add / edit all posts, delete comments, delete users. The editor can add / delete / edit only his own posts. The user can only delete his own comments.</p>
                        </div>

                        <div class="xl:text-md text-sm xl:text-base">
                            <h2 class="font-bold text-lg mb-4">Used in this project:</h2>
                            <p class="mb-4">AdobeXD, Laravel 6, Vue 2, Tailwind CSS, MySQL</p>
                        </div>
                    </div>
                </div>

                <div ref="images" class="w-full lg:w-7/12 my-8 lg:my-36 relative">
                    <img class="relative rounded-lg shadow-lg w-full mb-8" :src="require('@/assets/news-site/news-site.png')"
                         alt="">
                    <img class="relative rounded-lg shadow-lg ml-24 w-1/2 mb-8"
                         :src="require('@/assets/news-site/tablet.png')"
                         alt="">
                    <img class="relative rounded-lg w-1/3 shadow-lg ml-12 md:ml-56 xl:ml-96 mb-8"
                         :src="require('@/assets/news-site/mobile.png')"
                         alt="">
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Logo from '../../components/icons/Logo.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    components: {Logo},
    setup() {
        const images = ref(null)
        const mb = 48

        const setMarginBottom = () => {
            if (images.value) {
                const imgChildren = [...images.value.children]
                if (images.value && innerWidth >= 1024 && imgChildren.length < 5) {
                    images.value.style.marginBottom = `${scrollY / 4}px`
                }
                if (imgChildren.length < 5) {
                    imgChildren.forEach((child) => {
                        if (innerWidth >= 1024) {
                            child.style.marginBottom = `${mb - scrollY / 5}px`
                        }
                        else {
                            child.style.marginBottom = mb + 'px'
                        }
                    })
                }
            }
        }
        onMounted(() => {
            window.scrollTo({top: 0})
            setMarginBottom()
            window.addEventListener('scroll', () => {
                setMarginBottom()
            })
        })
        onUnmounted(() => {
            window.removeEventListener('scroll', setMarginBottom)
        })

        return {images}
    }
}
</script>
<style>
</style>
