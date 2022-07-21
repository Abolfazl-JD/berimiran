<script setup lang="ts">
import { singleUnited } from "@/types"

const props = defineProps<{
    unitedInfo : singleUnited
}>()

const getImageUrl = (name: string) => {
    return new URL(`../assets/images/uniteds/${name}/united.jpg`, import.meta.url).href
}

</script>

<template>
    <a class="max-w-350px mx-auto">
        <div class="mt-5 transition-all ease duration-300">
            <img 
                :src="getImageUrl(unitedInfo.name)" 
                alt=""
                class="h-250px w-350px transition-all ease duration-300 p-0.25rem bg-light-500 border border-solid border-gray-400 max-w-full"
            />
            <div class="text-center rounded-md rounded-t-none bg-white py-3 my-0 mx-auto border-t-0 border border-dotted border-gray-500">
                <h3 class="text-black text-size-25px font-medium mb-0.5rem leading-5">
                     استان {{ unitedInfo.title }}
                </h3>
                <span class="text-size-14px text-gray-800">
                    لقب استان : {{ unitedInfo.nickedName }}
                </span>
                <div class="mt-9px">
                    <svg 
                        v-for="star in unitedInfo.stars" 
                        :key="star" 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5 inline-block text-yellow-500" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg 
                        v-for="star in 5-unitedInfo.stars" 
                        :key="star" 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5 inline-block text-yellow-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </div>
            </div>
        </div>
    </a>
</template>