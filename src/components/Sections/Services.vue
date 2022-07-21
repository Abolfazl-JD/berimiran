<script setup lang="ts">
import defaultData from '@/stores/data'
</script>

<template>
    <section class="services pt-20 mb-10">
        <div class="container xl:px-150px px-5 mx-auto">
            <div class="w-full text-center">
                <h2 class="text-size-2rem text-green-800 dark:text-green-400">
                    {{ defaultData.sections.services.title }}
                </h2>
            </div>
            <div class="mt-16 md:(grid grid-cols-3)">
                <Service 
                    v-for="singleService of defaultData.sections.services.info" 
                    :key="singleService.id"
                    :single-service="singleService"
                />
            </div>
        </div>
    </section>
</template>