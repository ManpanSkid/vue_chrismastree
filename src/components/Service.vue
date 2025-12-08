<template>
    <section class="bg-white dark:bg-[#173305]" id="service">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Unsere Dienstleistungen
            </h1>

            <div class="mt-2">
                <span class="inline-block w-40 h-1 bg-[#d41616] rounded-full"></span>
                <span class="inline-block w-3 h-1 ml-1 bg-[#d41616] rounded-full"></span>
                <span class="inline-block w-1 h-1 ml-1 bg-[#d41616] rounded-full"></span>
            </div>

            <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">

                    <!-- Lieferung -->
                    <div class="space-y-3">
                        <span class="inline-block p-3 bg-blue-100 rounded-xl dark:text-white dark:bg-[#d41616]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                            Lieferung direkt in Ihr Wohnzimmer
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Wir liefern Ihren Wunsch Weihnachtsbaum zuverlässig und Pünktlich zu Ihrem Wunschtermin
                            direkt nach Hause - ganz ohne Stress.
                        </p>
                    </div>

                    <!-- Aufstellen -->
                    <div class="space-y-3">
                        <span class="inline-block p-3 bg-blue-100 rounded-xl dark:text-white dark:bg-[#d41616]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v18m9-9H3" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                            Baum-Aufstellservice
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Auf Ihren Wunsch hin, stellen wir den
                            Weihnachtsbaum direkt an Ihrem Wunschort auf -
                            professionell ausgerichtet und standfest.
                        </p>
                    </div>

                    <!-- Abholen & Entsorgen -->
                    <div class="space-y-3">
                        <span class="inline-block p-3 bg-blue-100 rounded-xl dark:text-white dark:bg-[#d41616]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                            Abholen & Entsorgen
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Nach den Feiertagen holen wir Ihren Weihnachtsbaum wieder ab und entsorgen ihn
                            umweltgerecht.
                        </p>
                    </div>

                    <!-- Baumständer & Anschnitt -->
                    <div class="space-y-3">
                        <span class="inline-block p-3 bg-blue-100 rounded-xl dark:text-white dark:bg-[#d41616]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0l3-3m-3 3l-3-3m9 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                            Baumständer & Frisch-Anschnitt
                        </h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Optional bekommen Sie einen stabilen Baumständer dazu - inklusive fachgerechtem Anschnitt für maximale Frische.
                        </p>
                    </div>

                </div>

                <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                    <img class="w-md h-112 shrink-0 object-cover xl:w-136 xl:h-136 rounded-full" src="/nordmann.jpg"
                        alt="Frischer Nordmann-Tanne">
                </div>
            </div>
        </div>
    </section>
</template>
