<template>
    <div ref="contact" id="contact" class="sm:h-screen px-2 flex sm:mt-0 mt-20 justify-center items-center flex-col">
        <h1 ref="title" class="font-black opacity-90 text-5xl sm:text-8xl">EMAIL ME</h1>
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
            <textarea name="message"
                      @focusout="active = false"
                      @focus="active = 'message'"
                      v-model="message"
                      ref="textAreaRef"
                      rows="5"
                      class="pb-2 duration-200 w-full outline-none text-xl bg-blueGray border-b border-graphiteBlack">
            </textarea>

            <transition
                    enter-active-class="transition delay-500 transform duration-1000 ease-out"
                    enter-from-class="translate-y-full opacity-0"
                    leave-active-class="transition transform duration-800 ease-in"
                    leave-to-class="translate-y-full opacity-0"
            >
                <div v-if="showBtn" class="absolute bottom-40">
                    <div
                            @mouseover="$refs.backOrangeRect.style.transform = 'translateY(16px)'"
                            @mouseleave="$refs.backOrangeRect.style.transform = 'translateY(0px)'"
                            class="bg-antiqueWhite transform sm:scale-100 scale-75 sm:mt-12 mt-8 sm:mb-0 mb-16 w-64 h-16 relative overflow-hidden cursor-pointer shadow-md">
                        <div class="transform -rotate-30">
                            <div ref="backOrangeRect" class=" duration-200 top-12 absolute h-72 w-72 bg-orangeRed"></div>
                        </div>

                        <h1 class="font-bold opacity-80 uppercase leading-none left-0 z-10 absolute text-5xl h-full w-full flex justify-center items-center">
                            Submit
                        </h1>
                    </div>
                </div>

            </transition>

        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
    setup() {
        const active = ref(false)
        const title = ref(null)
        const wrapper = ref(null)
        const name = ref('')
        const email = ref('')
        const message = ref('')
        const showBtn = ref(false)
        const contact = ref(null)

        const setWrapperWidth = () => {
            wrapper.value.style.width = title.value.offsetWidth + 'px'
        }

        const setShowBtn = () => {
            showBtn.value = scrollY > contact.value.offsetTop - contact.value.offsetHeight * 0.33;
        }

        onMounted(() => {
            setWrapperWidth()

            window.addEventListener('resize', () => {
                setWrapperWidth()
            })
            window.addEventListener('scroll', setShowBtn)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', setWrapperWidth)
            window.removeEventListener('scroll', setShowBtn)
        })

        return {title, wrapper, active, name, email, message, setShowBtn, showBtn, contact}
    }

}
</script>
