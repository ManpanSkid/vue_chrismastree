<template>
    <section class="bg-white dark:bg-[#173305]">
        <div class="container px-6 py-12 mx-auto ">
            <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-[#052809]">
                    <span class="inline-block p-3 text-[#40ac0a] rounded-lg bg-blue-100/80 dark:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-[#052809] dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Hilfe bei fragen oä.</p>
                    <p class="mt-2 text-sm text-[#40ac0a] dark:text-[#40ac0a]">info@deinweihnachtsbaum.de</p>
                </div>

                <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-[#052809]">
                    <span class="inline-block p-3 text-[#40ac0a] rounded-lg bg-blue-100/80 dark:bg-gray-700">
                        <img class="w-5 h-5" src="/icons/delivery.svg" alt="delivery icon"/>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-[#052809] dark:text-white">Bestelle jetzt dein Baum</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Wir sind hier zu helfen.</p>
                    <RouterLink to="/order" class="mt-2 text-sm text-[#40ac0a] dark:text-[#40ac0a]">Jetzt Bestellen</RouterLink>
                </div>

                <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-[#052809]">
                    <span class="inline-block p-3 text-[#40ac0a] rounded-lg bg-blue-100/80 dark:bg-gray-700">
                        <img src="/icons/status.svg" class="fill-[#40ac0a] w-5 h-5" alt="status icon">
                    </span>

                    <h2 class="mt-4 text-base font-medium text-[#052809] dark:text-white">Status</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Einfach und bequem bestellung verfolgen</p>
                    <RouterLink to="/status" class="mt-2 text-sm text-[#40ac0a] dark:text-[#40ac0a]">Live Status</RouterLink>
                </div>

                <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-[#052809]">
                    <span class="inline-block p-3 text-[#40ac0a] rounded-lg bg-blue-100/80 dark:bg-gray-700">
                        <img src="/icons/phone.svg" class="fill-[#40ac0a] w-5 h-5" alt="telefon icon">
                    </span>

                    <h2 class="mt-4 text-base font-medium text-[#052809] dark:text-white">Einfach Anrufen</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Montag-Freitag 8Uhr bis 20Uhr</p>
                    <a href="tel:+4915129545560"  class="mt-2 text-sm text-[#40ac0a] dark:text-[#40ac0a]">Jetzt Anrufen</a>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
