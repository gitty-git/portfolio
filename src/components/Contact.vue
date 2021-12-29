<template>
    <div ref="contact" id="contact"
         class="sm:h-screen sm:mt-0 mt-16 px-2 flex justify-center items-center flex-col">
        <h1 ref="title" class="font-black opacity-90 text-5xl sm:text-8xl">EMAIL ME</h1>
        <div ref="wrapper" class="flex px-0.5 sm:px-1.5 justify-center items-center flex-col">
            <div @click="$refs.nameRef.focus()" class="w-full mt-16 relative">
                <div for="name"
                     :class="{'-top-6 text-sm': active === 'name' || name.length > 0}"
                     class="text-left top-0 w-full absolute z-10 duration-200 tracking-widest"
                >
                    Name:
                </div>
            </div>
            <div class="relative w-full">
                <input ref="nameRef" type="text"
                       v-model="name"
                       @focusout="active = false"
                       @focus="active = 'name'"
                       class="pb-2 w-full outline-none text-2xl bg-blueGray border-b border-graphiteBlack">

                <!-- ERROR -->
                <transition
                        enter-active-class="transition transform duration-200 ease-out"
                        enter-from-class="opacity-0"
                        leave-active-class="transition transform duration-200 ease-in"
                        leave-to-class="opacity-0"
                >
                    <div class="absolute w-full text-right text-sm mt-1"
                         v-if="nameErr && isLoading && !messageSent">{{ nameErr }}
                    </div>
                </transition>
            </div>

            <div @click="$refs.emailRef.focus()" class="w-full mt-12 relative">
                <div for="email"
                     :class="{'-top-6 text-sm': active === 'email' || email.length > 0}"
                     class="text-left top-0 w-full absolute duration-200 z-10 tracking-widest"
                >
                    Email:
                </div>
            </div>
            <div class="relative w-full">
                <input
                        ref="emailRef"
                        v-model="email"
                        @focusout="active = false"
                        @focus="active = 'email'"
                        class="pb-2 w-full outline-none text-2xl bg-blueGray border-b border-graphiteBlack">

                <!-- ERROR -->
                <transition
                        enter-active-class="transition transform duration-200 ease-out"
                        enter-from-class="opacity-0"
                        leave-active-class="transition transform duration-200 ease-in"
                        leave-to-class="opacity-0"
                >
                    <div class="absolute w-full text-right text-sm mt-1"
                         v-if="emailErr && isLoading && !messageSent"
                    >
                        {{ emailErr }}
                    </div>
                </transition>
            </div>

            <div @click="$refs.textAreaRef.focus()" class="w-full mt-12 relative">
                <div for="message"
                     :class="{'-top-6 text-sm': active === 'message' || message.length > 0}"
                     class="text-left top-0 w-full absolute duration-200 z-10 tracking-widest"
                >
                    Message:
                </div>
            </div>
            <div class="relative w-full">
                <textarea name="message"
                          @focusout="active = false"
                          @focus="active = 'message'"
                          v-model="message"
                          ref="textAreaRef"
                          rows="5"
                          class="pb-2 duration-200 w-full outline-none text-xl bg-blueGray border-b border-graphiteBlack">
                </textarea>
                <!-- ERROR -->
                <transition
                        enter-active-class="transition transform duration-200 ease-out"
                        enter-from-class="opacity-0"
                        leave-active-class="transition transform duration-200 ease-in"
                        leave-to-class="opacity-0"
                >
                    <div class="absolute w-full text-right text-sm"
                         v-if="messageErr && isLoading && !messageSent">{{ messageErr }}
                    </div>
                </transition>
            </div>

            <transition
                    enter-active-class="transition delay-300 transform duration-700"
                    enter-from-class="translate-y-full opacity-0"
                    leave-active-class="transition transform duration-200 ease-in"
                    leave-to-class="translate-y-full opacity-0"
            >
                <div v-if="showBtn">
                    <transition
                            mode="out-in"
                            enter-active-class="transition transform duration-200 ease-out"
                            enter-from-class="scale-150 opacity-0"
                            leave-active-class="transition transform duration-200 ease-in"
                            leave-to-class="scale-150 opacity-0"
                    >
                        <div
                                @click.prevent="load"
                                v-if="!isLoading"
                                @mouseover="$refs.backOrangeRect.style.transform = 'translateY(16px)'"
                                @mouseleave="$refs.backOrangeRect.style.transform = 'translateY(0px)'"
                                class="bg-antiqueWhite transform sm:mt-12 mt-8 sm:mb-0 mb-16 w-64 h-16 relative overflow-hidden cursor-pointer shadow-md">
                            <div class="transform -rotate-30">
                                <div ref="backOrangeRect"
                                     class="duration-200 top-12 absolute h-72 w-72 bg-orangeRed"></div>
                            </div>

                            <h1 class="font-bold opacity-80 uppercase leading-none left-0 z-10 absolute text-5xl h-full w-full flex justify-center items-center">
                                Submit
                            </h1>
                        </div>

                        <div class="flex justify-center items-center transform sm:scale-100 scale-50 sm:mt-12 mt-8 sm:mb-0 mb-16 w-64 h-16 text-2xl"
                             v-else-if="messageSent">
                            Message sent!
                        </div>

                        <div class="flex font-semibold justify-center items-center transform sm:mt-12 mt-8 sm:mb-0 mb-16 w-64 h-16 text-sm uppercase"
                             v-else-if="nameErr || emailErr || messageErr">
                            There's a submission problem
                        </div>

                        <div class="flex h-72"
                             v-else-if="isLoading">
                            <svg class="w-8 animate-spin" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                 viewBox="0 0 76 76">
                                <g id="Group_286" data-name="Group 286" transform="translate(-847 -3011)">
                                    <path id="Subtraction_66" data-name="Subtraction 66"
                                          d="M-2069,76a37.765,37.765,0,0,1-14.792-2.986,37.875,37.875,0,0,1-12.079-8.144,37.874,37.874,0,0,1-8.144-12.079A37.763,37.763,0,0,1-2107,38a37.762,37.762,0,0,1,2.986-14.791,37.875,37.875,0,0,1,8.144-12.079,37.874,37.874,0,0,1,12.079-8.144A37.763,37.763,0,0,1-2069,0a37.762,37.762,0,0,1,14.792,2.986,37.875,37.875,0,0,1,12.079,8.144,37.875,37.875,0,0,1,8.144,12.079A37.762,37.762,0,0,1-2031,38a37.763,37.763,0,0,1-2.986,14.791,37.876,37.876,0,0,1-8.144,12.079,37.876,37.876,0,0,1-12.079,8.144A37.763,37.763,0,0,1-2069,76Zm0-67a29.033,29.033,0,0,0-29,29,29.033,29.033,0,0,0,29,29,29.033,29.033,0,0,0,29-29A29.033,29.033,0,0,0-2069,9Z"
                                          transform="translate(2954 3011)" fill="#393835" opacity="0.38"/>
                                    <path id="Subtraction_69" data-name="Subtraction 69"
                                          d="M-2080.13,80.61h0a37.765,37.765,0,0,1-8.346-12.57,37.862,37.862,0,0,1-2.783-14.3,37.891,37.891,0,0,1,2.782-14.3,37.767,37.767,0,0,1,8.348-12.57,37.782,37.782,0,0,1,12.571-8.348,37.882,37.882,0,0,1,14.3-2.782v9.013h0a28.8,28.8,0,0,0-20.5,8.48,29.034,29.034,0,0,0,0,41.012l-6.363,6.363Z"
                                          transform="translate(2938.26 2995.26)" fill="#393835"/>
                                </g>
                            </svg>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase/config";

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
        const isLoading = ref(false)
        const messageSent = ref(false)
        const nameErr = ref(null)
        const emailErr = ref(null)
        const messageErr = ref(null)

        const setWrapperWidth = () => {
            if (wrapper.value && innerWidth > 450) {
                wrapper.value.style.width = title.value.offsetWidth + 'px'
            }
            else {
                wrapper.value.style.width = '100%'
                wrapper.value.classList.add('px-2')
            }
        }
        const setShowBtn = () => {
            const multiplier = innerWidth < 1024 ? 1.2 : 0.66
            showBtn.value = scrollY > contact.value.offsetTop - contact.value.offsetHeight * multiplier
        }

        const load = async () => {
            isLoading.value = true
            if (nameErr.value || emailErr.value || messageErr.value) return
            try {
                const docRef = await addDoc(collection(db, "messages"), {
                    name: name.value,
                    email: email.value,
                    message: message.value,
                    date: Timestamp.fromDate(new Date(Date.now())),
                })
                if (docRef) {
                    messageSent.value = true
                    name.value = ''
                    email.value = ''
                    message.value = ''
                    setTimeout(() => {
                        messageSent.value = false
                        isLoading.value = false
                    }, 5000)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const validateEmail = (email) => {
            return email
                    .toLowerCase()
                    .match(
                            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
                    );
        };

        watchEffect(() => {
            // name validation
            if (isLoading) {
                if (!name.value.length) {
                    nameErr.value = "Name field mustn't be empty"
                }
                else nameErr.value = ''

                // email validation
                if (!email.value.length) {
                    emailErr.value = "Email field mustn't be empty"
                }
                else if (!validateEmail(email.value)) {
                    emailErr.value = "Email must be valid"
                }
                else emailErr.value = ''

                // email validation
                if (!message.value.length) {
                    messageErr.value = "Message field mustn't be empty"
                }
                else messageErr.value = ''
            }

            // isLoading
            if (!nameErr.value && !emailErr.value && !messageErr.value) {
                isLoading.value = false
            }
        })

        onMounted(() => {
            setWrapperWidth()
            setShowBtn()

            window.addEventListener('resize', () => {
                setWrapperWidth()
            })
            window.addEventListener('scroll', setShowBtn)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', setWrapperWidth)
            window.removeEventListener('scroll', setShowBtn)
        })

        return {
            title, wrapper, active, name, email, message,
            setShowBtn, showBtn, contact, load, isLoading, messageSent,
            nameErr, emailErr, messageErr
        }
    }

}
</script>
