<template>
  <div class="text-graphiteBlack font-sans">
    <Navs/>
    <Main/>
  </div>
</template>
<script>
import Main from '@/views/Main'
import Navs from '@/components/Navs'
export default {
  components: {Main, Navs}
}
</script>
<style>
  .width {
    width: 1640px;
  }
  html {
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar {
    padding: 20px;
    background-color:  #393835;
    width: 0.6em;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #5c5b59;
  }
  ::-moz-selection { 
    color:  #FAE6CC;
    background: #EF5A38;
  }

  ::selection {
    color: #FAE6CC;
    background:  #EF5A38;
  }
</style>
