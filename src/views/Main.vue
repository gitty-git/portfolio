<template>
    <!-- <div class="bg-blueGray">asdf</div> -->
    <div class="font-sans overflow-hidden relative">
        <Home/>
        <About/>
        <Works/>
        <Contact/>
    </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'
import { ref, onMounted } from 'vue'

export default {
    name: 'Main',
    components: {
        About, Home, Works, Contact
    },
}
</script>

<style>
.shadow-mds {
    box-shadow: 4px 15px 23px 5px rgba(34, 60, 80, 1);
}

</style>
