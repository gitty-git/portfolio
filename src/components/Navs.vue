<template>
    <a href="#home" class="fixed bottom-0 z-50">
        <Logo class="fixed top-14 left-14" active width="42"/>
    </a>    
    <a href="#works" class="fixed top-14 right-14 z-50">
        <WorksIcon/>
    </a>
    <a href="#about" class="fixed left-14 bottom-14 z-50">
        <AboutIcon/>
    </a>
    <a href="#contact" class="fixed bottom-14 right-14 z-50">
        <ContactIcon/>
    </a>
</template>

<script>
import AboutIcon from './icons/AboutIcon'
import ContactIcon from './icons/ContactIcon.vue'
import Logo from './icons/Logo.vue'
import WorksIcon from './icons/WorksIcon.vue'
export default {
    components: {Logo, AboutIcon,WorksIcon, ContactIcon}
}
</script>
<style>
    .text-18 {
        font-size: 18px;
    }
</style>