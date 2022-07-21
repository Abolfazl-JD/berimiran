<script lang="ts" setup>
import uniteds from '@/stores/uniteds'
import defaultData from '@/stores/data'

import { Navigation, Pagination, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
</script>

<template>
    <section class="text-center bg-light-900 mt-87px pt-100px pb-135px block">
        <div class="container px-120px mx-auto">
            <div class="w-full text-center mb-57px">
                <h2 class="text-green-800">
                    {{ defaultData.sections.popular.title }}
                </h2>
            </div>
            <swiper
                class="intro-swiper"
                dir="ltr"
                :modules="[Navigation, Pagination, A11y, Autoplay]"
                :slides-per-view="3"
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
                <svg xmlns="http://www.w3.org/2000/svg" class="chevron-icon text-black -right-1 sm:right-0 left-auto sb-intro-next" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="chevron-icon text-black -left-1 sm:left-0 right-auto sb-intro-prev" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </swiper>
        </div>
    </section>
</template>