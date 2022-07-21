<script setup lang="ts">
import defaultData from '@/stores/data'
</script>

<template>
    <section class="about md:mt-150px mt-50px">
        <div class="w-full px-10px">
            <div class="xl:(pr-32) md:(flex justify-around items-start) pl-0">
                <div class="md:w-1/2 w-full">
                    <img 
                        src="@/assets/images/about.jpg" 
                        :alt="defaultData.about.subtitle"
                        class="rounded-md h-full w-full"
                    />
                </div>
                <div class=" xl:(pr-55px pl-93px ) md:(w-1/2 mt-0 text-right pr-5) text-center mt-10 w-full ">
                    <span class="text-[#215600] dark:text-green-400">
                        {{ defaultData.about.subtitle }}
                    </span>
                    <h2 class="mt-10px dark:text-white md:(text-size-2rem) !leading-50px text-size-1.5rem mb-3.5rem font-medium">
                        {{ defaultData.about.title }}
                    </h2>
                    <p 
                        v-for="paragraph in defaultData.about.paragraphs"
                        :key="paragraph"
                        class="first:mt-5"
                    >
                        {{ paragraph }}
                    </p>
                    <button class="md:(float-left ml-20px) hover:(bg-transparent text-green-700) dark:hover:text-green-500 about-button">
                        {{ defaultData.about.button }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-button {
    margin-top: 12px;
    border: 2px solid #006644;
    color: #fff;
    background: #006644;
    padding: 10px 31px;
    font-size: 17px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

</style>