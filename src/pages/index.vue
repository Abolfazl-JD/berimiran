<script setup lang="ts">
import defaultData from '@/stores/data'
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

useHead({
    title: "صفحه اصلی",
    meta: [
        {
            name: "description",
            content : "توضیحات درباره صفحه اصلی"
        }
    ]
})
</script>

<template>
    <div class="home">
        <swiper
            dir="ltr"
            :modules="[Navigation, Pagination, A11y, Autoplay]"
            :slides-per-view="1"
            :navigation="{ nextEl : '.sbnext', prevEl : '.sbprev' }"
            :autoplay="true"
            :pagination="{ clickable: true, }"
            :scrollbar="{ draggable: true }"
        >
            <swiper-slide
                v-for="welcomePic in defaultData.header.welcome"
                :key="welcomePic.id"
            >
                <div 
                    class="!bg-no-repeat !bg-cover pb-180px relative w-full h-657px" 
                    :id="welcomePic.imageLink"
                >
                    <div class="absolute top-0 right-0 left-0 bottom-0 overlay"></div>
                    <div class="pt-235px">
                        <div class="container px-10 mx-auto">
                            <div class="w-full text-center">
                                <h1 class="text-white text-shadow-sm text-size-2.5rem mb-0.5rem font-medium leading-5 mt-0">
                                    {{ welcomePic.text }}
                                </h1>
                                <button class="mt-33px border-none rounded-md text-white text-size-17px py-13px px-28px transition-all duration-300 ease">
                                    <router-link to="/destination-choose">
                                        {{ welcomePic.button }}
                                    </router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-8 w-8 absolute text-white top-1/3 z-10 right-2 left-auto sbnext" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-8 w-8 absolute text-white top-1/3 z-10 left-2 right-auto sbprev" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </swiper>
    </div>
</template>

<style>
.overlay {
    content: '';
    opacity: .55;
    background: #000000;
}

#img1 {
    background: url(../assets/images/welcome-pictures/img1.webp);
    background-attachment: fixed;
    background-position: center;
}

#img1 button,
#img3 button{
    background: #005c32;
}

#img2 {
    background: url(../assets/images/welcome-pictures/img2.jpg)
}

#img2 button {
    background-color: #006595;
}

#img3 {
    background: url(../assets/images/welcome-pictures/img3.jpg)
}

.swiper-pagination span {
    background : #fff
}
</style>