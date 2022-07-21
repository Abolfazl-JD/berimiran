<script lang="ts" setup>
import uniteds from '@/stores/uniteds'
import defaultData from '@/stores/data'

import { Navigation, Pagination, A11y, Autoplay  } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const swiperOptions = reactive({
    breakpoints: {       
    280: {       
            slidesPerView: 1,
            spaceBetween: 50     
        },          
    770: {       
            slidesPerView: 2,       
            spaceBetween: 30     
        },   

    1000: {       
            slidesPerView: 3,       
            spaceBetween: 30     
        } 
    }   
})
</script>

<template>
    <section class="text-center bg-light-700 dark:bg-dark-900 md:(pt-100px pb-135px mt-87px) py-10 mt-10 block">
        <div class="container md:px-10 px-2 mx-auto">
            <div class="w-full text-center mb-57px">
                <h2 class="text-green-800 dark:text-green-500 text-size-2rem">
                    {{ defaultData.sections.popular.title }}
                </h2>
            </div>
            <swiper
                class="intro-swiper px-30px"
                dir="ltr"
                :modules="[Navigation, Pagination, A11y, Autoplay]"
                :slides-per-view="3"
                :space-between="10"
                :breakpoints="swiperOptions.breakpoints"
                :navigation="{ nextEl : '.sb-intro-next', prevEl : '.sb-intro-prev' }"
                :autoplay="true"
                :pagination="{ clickable: true, }"
                :scrollbar="{ draggable: true }"
            >
                <swiper-slide
                    v-for="singleUnited of uniteds.slice(0 , 6)"
                    :key="singleUnited.id"
                >
                    <United
                        :unitedInfo="singleUnited"
                    />
                </swiper-slide>
                <svg xmlns="http://www.w3.org/2000/svg" class="chevron-icon text-black dark:text-white -right-1 left-auto sb-intro-next" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="chevron-icon text-black dark:text-white -left-1 right-auto sb-intro-prev" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </swiper>
        </div>
    </section>
</template>