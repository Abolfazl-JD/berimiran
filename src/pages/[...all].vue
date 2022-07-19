<script setup lang="ts">

const head = reactive({
    title: "صفحه مورد نظر یافت نشد",
    meta: [
        {
            name: "description",
            content : "صفحه ارور"
        }
    ]
})

useHead(head)
</script>

<template>
    <div>
        <h1 class="text-2xl dark:text-gray-200">
            این صفحه ای که دنبالش هستی متاسفانه یافت نشد
        </h1>
    </div>
</template>

<route>
    {
        "meta" : {
            "layout" : "404"
        }
    }
</route>