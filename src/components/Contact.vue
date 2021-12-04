<template>
    <div id="contact" class="h-screen bg-blueGray flex justify-center items-center flex-col">
        <h1 ref="title" class="font-black opacity-90 text-8xl">LET'S TALK</h1>
        <div ref="wrapper" class="flex justify-center items-center flex-col">
            <div @click="$refs.nameRef.focus()" class="w-full mt-16 relative">
                <div for="name" 
                    :class="{'-top-6 text-sm': active === 'name' || name.length > 0}" 
                    class="text-left top-0 w-full absolute z-10 duration-200 tracking-widest"
                >
                    Name:
                </div>
            </div>
            <input ref="nameRef" type="text"
                v-model="name"
                @focusout="active = false"
                @focus="active = 'name'"
                class="pb-2 w-full outline-none text-2xl bg-blueGray border-b border-graphiteBlack">

            <div @click="$refs.emailRef.focus()" class="w-full mt-12 relative">
                <div for="email" 
                    :class="{'-top-6 text-sm': active === 'email' || email.length > 0}"
                    class="text-left top-0 w-full absolute duration-200 z-10 tracking-widest"
                >
                    Email:
                </div>
            </div>
            <input 
                ref="emailRef"
                v-model="email"
                @focusout="active = false" 
                @focus="active = 'email'"
                class="pb-2 w-full outline-none text-2xl bg-blueGray border-b border-graphiteBlack">

            <div @click="$refs.textAreaRef.focus()" class="w-full mt-12 relative">
                <div for="message" 
                    :class="{'-top-6 text-sm': active === 'message' || message.length > 0}"
                    class="text-left top-0 w-full absolute duration-200 z-10 tracking-widest"
                >
                    Message:
                </div>
            </div>
            <!-- <label for="message" @click="$refs.textAreaRef.focus()"
                class="text-left w-full mt-12 tracking-widest">Message</label> -->
            <textarea name="message"
                @focusout="active = false" 
                @focus="active = 'message'"
                v-model="message"
                ref="textAreaRef"
                rows="5"
                class="pb-2 duration-200 w-full outline-none text-xl bg-blueGray border-b border-graphiteBlack">
            </textarea>      

            <div 
                @mouseover="$refs.backOrangeRect.style.transform = 'translateY(16px)'" 
                @mouseleave="$refs.backOrangeRect.style.transform = 'translateY(0px)'"
                class="bg-antiqueWhite mt-16 w-64 h-16 relative overflow-hidden cursor-pointer shadow-md">
                <div class="transform -rotate-30">
                    <div ref="backOrangeRect" class=" duration-200 top-12 absolute h-72 w-72 bg-orangeRed"></div>
                </div>
                
                <h1 class="font-bold opacity-80 uppercase leading-none left-0 z-10 absolute text-5xl h-full w-full flex justify-center items-center">
                    submit
                </h1>
            </div>
            
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from 'vue'
export default {
    setup() {
        const active = ref(false)
        const title = ref(null)
        const wrapper = ref(null)
        const name = ref('')
        const email = ref('')
        const message = ref('')

        onMounted(() => {
            wrapper.value.style.width = title.value.offsetWidth + 'px'
        })

        return {title, wrapper, active, name, email, message}
    }
    
}
</script>