<template>
  <div id="about" class="h-screen bg-blueGray flex flex-col justify-center overflow-hidden relative">
    <div class="text-600 absolute transform -rotate-30 font-black opacity-5 -bottom-56 uppercase">
      About
    </div>
    <div class="absolute left-15">
      <div class="font-black font-size-line-height uppercase">
        <h1>Responsible and</h1>
        <h1>well-organized</h1> 
        <h1>worker with</h1>
        <h1>a high level</h1>
        <h1>of attention </h1>
        <h1>to detail</h1>
      </div>
      <div class="left-15 text-22 my-8">
        <p>I have been creating in <span class="italic">HTML</span>, <span class="italic">CSS</span>,</p>
        <p> <span class="italic">Javascript</span> websites for over 4</p>
        <p>years. At the moment, I enjoy</p>
        <p>working with <span class="font-semibold">Vue 3</span></p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="133.226" height="73.603" viewBox="0 0 133.226 73.603">
        <path id="Path_73" data-name="Path 73" d="M0-106.868,73.6,26.358H0Z" transform="translate(26.358) rotate(90)" fill="#393835" opacity="0.33"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-size-line-height {
  font-size: 88px;
  line-height: 67px;
}
.text-22 {
  font-size: 22px;
}
.text-600 {
  font-size: 600px;
}
</style>
