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
</style>
