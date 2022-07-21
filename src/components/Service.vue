<script setup lang="ts">
import { InfoItem } from '@/types'

const props = defineProps<{
    singleService : InfoItem
}>()
</script>

<template>
    <div class="text-center group mt-5 py-28px px-44px transition-all duration-300 ease border border-solid border-white hover:border-[#162e44] dark:(border-black hover:border-green-600)">
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            class="h-10 w-10 inline-block text-[#008163] mb-5 group-hover:text-[#162e44] dark:group-hover:text-[#008163]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-width="2"
        >
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                :d="singleService.icon" 
            />
        </svg>
        <h2 class="text-size-20px font-semibold leading-30px dark:text-gray-200">
            {{ singleService.title }}
        </h2>
        <p class="mt-36px">
            {{ singleService.text }}
        </p>
    </div>
</template>