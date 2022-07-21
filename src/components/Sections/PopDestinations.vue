<script lang="ts" setup>
import uniteds from '@/stores/uniteds'
</script>

<template>
    <section class="text-center bg-light-900 mt-87px pt-100px pb-135px block">
        <div class="container px-5 mx-auto">
            <div class="w-full text-center mb-57px">
                <h2 class="text-green-800"></h2>
            </div>
            <div class="grid grid-cols-3 gap-8 px-120px">
                <United
                    v-for="singleUnited of uniteds.slice(0 , 6)"
                    :key="singleUnited.id"
                    :unitedInfo="singleUnited"
                />
            </div>
        </div>
    </section>
</template>