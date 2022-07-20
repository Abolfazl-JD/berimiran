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
        <div class="bg-no-repeat bg-cover pb-180px relative w-full h-657px" id="img1">
            <div class="absolute top-0 right-0 left-0 bottom-0 overlay"></div>
            <div class="pt-235px">
                <div class="container px-10 mx-auto">
                    <div class="w-full text-center">
                        <h1 class="text-white text-shadow-sm text-size-2.5rem mb-0.5rem font-medium leading-5 mt-0">با بریم ایران سفرتان را به یاد ماندنی کنید</h1>
                        <button class="mt-33px border-none rounded-md text-white text-size-17px py-13px px-28px transition-all duration-300 ease">
                            <router-link to="/destination-choose">مکان های دیدنی استان ها</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

#img1 button{
    background: #005c32;
}

</style>