<script setup lang="ts">
import defaultData from '@/stores/data'
</script>

<template>
    <footer class="block pt-20 black-blue w-full">
        <div class="container mx-auto px-15px">
            <div class="flex justify-around px-20">
                <div 
                    class="text-right"
                    v-for="footerSection in defaultData.footer.sections"
                    :key="footerSection.id"
                >
                    <h2 class="text-white mb-2rem">
                        {{ footerSection.title }}
                    </h2>
                    <router-link
                        v-for="sectionLink in footerSection.links"
                        :key="sectionLink.id"
                        :to="sectionLink.address"
                        class="text-[#ffffff80] block mb-18px transition-all duration-300 ease-in hover:text-[#14d6c3]"
                    >
                        {{ sectionLink.text }}
                    </router-link>
                </div>

                <div>
                    <h2 class="mb-3rem text-white text-center">
                        {{ defaultData.footer.contact.title }}
                    </h2>
                    <div 
                        class="mb-2 flex items-center gap-4 pl-18px" 
                        dir="ltr"
                        v-for="boxInfo in defaultData.footer.contact.social.addresses"
                        :key="boxInfo.id"
                    >
                        <svg 
                            class="w-6 h-6 text-[#1cc3b2]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                :d="boxInfo.icon"
                            ></path>
                        </svg>
                        <span class=" text-[#afb4bf]"> {{boxInfo.text}} </span>
                    </div>

                    <div class="mt-6 footer-icons flex items-center gap-8 pl-18px" dir="ltr">
                        <svg
                            v-for="footerIcon in defaultData.footer.contact.social.icons" 
                            :key="footerIcon"
                            class="w-8 h-8 pointer text-white hover:text-[#1cc3b2] transition-all duration-300 ease fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                        >
                            <path
                                :d="footerIcon"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="copywrite text-center py-15px border-t border-t-solid border-t-gray-700">
                <p class="my-0 leading-29px text-[#afb4bf]"> {{ defaultData.footer.copyright }} </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

footer h2 {
    font-size: 18px;
    font-weight: 600;
}
</style>