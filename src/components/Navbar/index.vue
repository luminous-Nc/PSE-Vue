<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/TAMU-Logo.svg" class="h-8" alt=""/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ASI Tutor</span>
            </a>
            <div class="block w-auto" id="navbar-default">
                <ul class="font-medium flex p-0 border-gray-100 rounded-lg  flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/"
                              class="block py-2 px-3 rounded bg-transparent text-blue-700 p-0 dark:text-blue-500">Home</a>
                    </li>
                    <li>
                        <a href="/about"
                              class="block py-2 px-3 text-gray-900 rounded hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:hover:text-blue-500 dark:hover:bg-transparent">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>

</style>