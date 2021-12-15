<template>
    <transition
            appear
            enter-active-class="transition transform duration-800 ease-in"
            enter-from-class="-translate-x-full scale-150 -translate-y-full opacity-0"
    >
        <router-link to="/#home" class="fixed invisible lg:visible top-6 left-2 lg:top-14 lg:left-14 z-50">
            <Logo class="sm:w-12 w-6"/>
        </router-link>
    </transition>

    <transition
            appear
            enter-active-class="transition transform duration-800 ease-in"
            enter-from-class="translate-x-full scale-150 -translate-y-full opacity-0"
    >
        <router-link to="/#about" class="fixed invisible lg:visible lg:top-14 lg:right-14 z-50">
            <AboutIcon/>
        </router-link>
    </transition>

    <transition
            appear
            enter-active-class="transition transform duration-800 ease-in"
            enter-from-class="-translate-x-full scale-150 translate-y-full opacity-0"
    >
        <router-link to="/#works" class="fixed invisible lg:visible left-14 bottom-14 z-50">
            <WorksIcon/>
        </router-link>
    </transition>

    <transition
            appear
            enter-active-class="transition transform duration-800 ease-in"
            enter-from-class="translate-x-full scale-150 translate-y-full opacity-0"
    >

        <router-link to="/#contact" class="fixed invisible lg:visible bottom-14 right-14 z-50">
            <ContactIcon/>
        </router-link>
    </transition>

    <div class="w-full h-10 fixed right-0 bottom-0 blur-4px lg:invisible visible"></div>

    <div class="z-50 uppercase text-sm font-black lg:invisible visible fixed bottom-0 right-0 h-10 w-full flex items-center justify-between px-2">
        <router-link to="/#home">
            <Logo class="w-4"/>
        </router-link>

        <router-link to="/#about">
            About
        </router-link>

        <router-link to="/#works">
            Works
        </router-link>

        <router-link to="/#contact">
            Contact
        </router-link>
    </div>
</template>

<script>
import AboutIcon from './icons/AboutIcon'
import ContactIcon from './icons/ContactIcon.vue'
import Logo from './icons/Logo.vue'
import WorksIcon from './icons/WorksIcon.vue'
import Burger from "./icons/Burger";
import { ref, provide } from "vue";

export default {
    components: {Logo, AboutIcon, WorksIcon, ContactIcon, Burger},
    setup() {
        const showModal = ref(false)

        return {showModal}
    }
}
</script>
<style>
.blur-4px {
    background: rgba(120, 152, 159, 0.6);
    backdrop-filter: blur(3px);
}

.text-18 {
    font-size: 18px;
}
</style>
