<script setup lang="ts">
import defaultData from '@/stores/data'
</script>

<template>
    <footer class="block pt-5 md:pt-20  bg-light-600 w-full">
        <div class="container mx-auto px-15px">
            <div class="md:(grid grid-cols-4) xl:px-50">
                <div 
                    class="text-center mt-10 md:(text-right mt-0)"
                    v-for="footerSection in defaultData.footer.sections"
                    :key="footerSection.id"
                >
                    <h2 class="mb-1rem md:mb-2rem">
                        {{ footerSection.title }}
                    </h2>
                    <router-link
                        v-for="sectionLink in footerSection.links"
                        :key="sectionLink.id"
                        :to="sectionLink.address"
                        class="dark:(text-[#ffffff80]  hover:text-[#14d6c3]) text-dark-500 block mb-18px transition-all duration-300 ease-in  hover:text-green-700"
                    >
                        {{ sectionLink.text }}
                    </router-link>
                </div>

                <div>
                    <h2 class="mb-1rem mt-10 md:(mt-0 mb-3rem) text-white text-center">
                        {{ defaultData.footer.contact.title }}
                    </h2>
                    <div 
                        class="justify-center mb-2 flex items-center gap-2 pl-18px md:justify-start" 
                        dir="ltr"
                        v-for="boxInfo in defaultData.footer.contact.social.addresses"
                        :key="boxInfo.id"
                    >
                        <svg 
                            class="w-6 h-6 text-green-700 dark:text-[#1cc3b2]" 
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
                        <span class="dark:text-[#afb4bf] text-dark-200"> {{boxInfo.text}} </span>
                    </div>

                    <div 
                        class="mt-6 justify-center mb-10 footer-icons flex items-center gap-8 pl-18px md:(justify-start mb-0)" 
                        dir="ltr"
                    >
                        <svg
                            v-for="footerIcon in defaultData.footer.contact.social.icons" 
                            :key="footerIcon"
                            class="w-8 h-8 cursor-pointer dark:( text-white hover:text-[#1cc3b2]) text-dark-100 hover:text-green-700 transition-all duration-300 ease fill-current"
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
            <div class="copywrite text-center py-15px border-t border-t-solid border-t-gray-400 dark:border-t-gray-700">
                <p class="my-0 leading-29px text-dark-200 dark:text-[#afb4bf]"> {{ defaultData.footer.copyright }} </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.dark footer {
    background-color : #0e2737
}

footer h2 {
    color: rgb(33, 37, 45);
    font-size: 18px;
    font-weight: 600;
}

.dark footer h2{
    color : white
}
</style>