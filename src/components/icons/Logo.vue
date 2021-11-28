<template>
<svg
    :class="{'text-antiqueWhite': active}" 
    class="fill-current text-graphiteBlack hover:text-antiqueWhite duration-200"
    xmlns="http://www.w3.org/2000/svg" :width="width" height="43" viewBox="0 0 42 43">
  <path id="Subtraction_42" data-name="Subtraction 42" d="M7.958,43H0V36.531l12.042-6.953,4.791,8.3L7.958,43ZM42,43H15.958L42,27.965V43ZM20.3,35.876h0l-4.79-8.3L42,12.282V23.346L20.3,35.875ZM0,31.912V20.848l5.252-3.032,4.791,8.3L0,31.911Zm13.506-7.8v0h0l-4.791-8.3L36.111,0H42V7.664ZM0,16.23V0H28.111L4.238,13.783l-.986.57L0,16.229Z"/>
</svg>
</template>
<script>
export default {
    props: {
        width: {
            type: [Number, String],
            default: 18
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>