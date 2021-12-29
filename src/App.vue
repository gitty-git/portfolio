<template>
    <div class="text-graphiteBlack font-sans bg-blueGray">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
<!--        <router-view></router-view>-->
        <Navs/>
        <!-- <Main/> -->
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
textarea {
    resize: none !important;
}
textarea::-webkit-scrollbar {
    background-color: #677d81;
    width: 0.3em;
    cursor: pointer;
}
textarea::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #404140;
}
body::-webkit-scrollbar {
    padding: 20px;
    background-color: #393835;
    width: 0.6em;
}

body::-webkit-scrollbar-thumb {
    background-color: #5c5b59;
}

::-moz-selection {
    color: #FAE6CC;
    background: #EF5A38;
}

::selection {
    color: #FAE6CC;
    background: #EF5A38;
}
</style>
