<template>
    <div class="error-layout w-full mt-20 text-center">
        <RouterView />
        <h1 class="text-3xl mt-10 dark:text-gray-200">
            به یک صفحه دیگه برو
        </h1>
        <span class="text-red-500 block">
            این لی اوت ارور است
        </span>
        <router-link 
            to="/" 
            class="underline text-blue-500" 
            title="'homepage'"
        >
            بازگشت به صفحه اصلی
        </router-link>
    </div>
</template>