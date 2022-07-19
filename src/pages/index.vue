<script setup lang="ts">
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
    <div class="home mt-20">
        <h2 class="text-3xl dark:text-white">
            صفحه اصلی
        </h2>
        <RouterLink to="/user" class="underline text-blue-500">
            صفحه کاربر
        </RouterLink>
    </div>
</template>