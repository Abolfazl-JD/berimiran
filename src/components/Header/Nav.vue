<script setup lang="ts">
import defaultData from "@/stores/data"

const showResponsiveMenu = ref(false)
</script>

<template>
    <header>
        <nav class="relative flex flex-wrap w-full items-center bg-light-600">
            <div class="w-full flex justify-between items-center border-b border-solid border-gray-500 py-4 px-5">
                <div class="flex gap-22">
                    <h1 class="text-2xl sm:text-4xl font-semibold dark:text-light-300">
                        {{ defaultData.header.title }}
                    </h1>
                    <ul class="hidden pt-2 font-medium md:(flex gap-12 items-center)">
                        <li v-for="link in defaultData.header.links" :key="link.id">
                            <router-link 
                                :to="link.link" 
                                class="header-link" 
                                :title="link.name"
                            >
                               {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-4 pt-1">
                    <HeaderThemeChanger />
                    <button class="md:hidden">
                        <transition 
                            name="list-icon"  
                            mode="out-in"
                        >
                            <svg 
                                @click="showResponsiveMenu = true"
                                v-if="!showResponsiveMenu"
                                xmlns="http://www.w3.org/2000/svg" 
                                class="sm:(h-8 w-8) w-7 h-7 dark:text-light-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                v-else
                                @click="showResponsiveMenu = false"
                                xmlns="http://www.w3.org/2000/svg" 
                                class="sm:(h-8 w-8) w-7 h-7 dark:text-light-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </transition>
                    </button>
                </div>
            </div>
            <div 
                class="text-gray-700 px-5 border-b border-solid transition-all overflow-hidden ease-out duration-300 w-full md:(h-0 border-0) dark:border-light-500 border-dark-500"
                :class="showResponsiveMenu ? 'h-192px' : 'h-0 border-none'"
            >
                <ul class="divide-y-1 divide-gray-300 dark:divide-gray-700">
                    <li 
                        class="resposive-menu-item"
                        v-for="link in defaultData.header.links"
                        :key="link.id"
                    >
                        <router-link :to="link.link"  :title="link.name">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>

.dark nav {
    background-color: #0e2737;
}

.dark .header-link {
    color : rgb(226, 226, 226);
}
.header-link {
    padding-bottom: 3px;
    cursor: pointer;
    font-size: 16px;
}

.header-link:before, .header-link:after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
}
.header-link:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  background: #0e2737;
  transform: scaleX(0);
}

.dark .header-link:before {
  background: rgb(222, 222, 222);
}
.header-link:hover:before {
  transform: scaleX(1);
}

.dark .resposive-menu-item {
    color: rgb(219, 216, 216);
}
.resposive-menu-item {
    padding: 12px 8px 12px 0;
    cursor: pointer;
}

.router-link-active:before {
    transform: scaleX(1);
}

.dark .router-link-active:before {
    transform: scaleX(1);
    background: #03ff96
}

.dark .router-link-active {
    color: #03ff96
}

.router-link-active {
    color: rgb(4, 120, 87);
}

.router-link-active:before {
    transform: scaleX(1);
    background: rgb(4, 120, 87)
}

</style>