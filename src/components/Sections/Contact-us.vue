<script setup lang="ts">
import defaultData from '@/stores/data'
</script>

<template>
    <section class="block">
        <div class="contact-us-bg !bg-fixed !bg-no-repeat !bg-cover !bg-top !relative">
            <div class="absolute w-full content-open-quote opacity-75 bg-[#162e44] h-full"></div>
            <div class="container px-10 pt-86px pb-70px">
                <div class="w-full text-center">
                    <h4 class="font-bold text-white text-size-26px mb-1rem leading-40px">
                        {{ defaultData.sections.contactus.title }}
                    </h4>
                    <p class="!text-white mb-2rem">
                        {{ defaultData.sections.contactus.subtitle }}
                    </p>
                    <button class="bg-[#009b69] text-white rounded-md border-none py-11px px-59px mt-12px transition-all duration-300 ease hover:bg-[#00865c]">
                        {{ defaultData.sections.contactus.text }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-us-bg {
    background: url(@/assets/images/contact-section-img.jpg);
}
</style>