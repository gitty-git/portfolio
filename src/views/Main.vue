<template>
  <!-- <div class="bg-blueGray">asdf</div> -->
  <div class="font-sans">
    <Home/>
    <About />
    <Works/>
    <Contact/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'
import {ref, onMounted} from 'vue'

export default {
  name: 'Main',
  components: {
    About, Home, Works, Contact
  },
}
</script>
