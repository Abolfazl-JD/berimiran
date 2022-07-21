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
    <div class="home">
        <HeaderWelcome />
        <SectionsAbout />
        <SectionsPopDestinations />
        <SectionsContactUs />
        <SectionsRecommededDets />
        <SectionsServices />
    </div>
</template>
