<script setup lang="ts">

useHead({
    title : "کاربر"
})
</script>

<template>
    <div  class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <h1 class="dark:text-white text-2xl">
            "به صفحه کاربر خوش آمدی"
        </h1>
        <router-link 
            to="/" 
            class="underline text-blue-500" 
            title="'homepage'"
        >
                بازگشت به صفحه اصلی
            </router-link>
    </div>
</template>

<route>
    {
        "meta" : {
            "layout": "users"
        }
    }
</route>