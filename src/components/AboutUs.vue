<template>
    <section class="py-24 relative bg-[#173305]" id="about-us">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">

                <!-- Images -->
                <div
                    class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img class="rounded-xl object-cover" src="/tree_packed.jfif"
                            alt="Weihnachtsbaum Lieferung verpackt" />
                    </div>
                    <img class="sm:ml-0 ml-auto rounded-xl object-cover aspect-2/3" src="/tree_unpacked.jfif"
                        alt="Frischer Weihnachtsbaum ausgepackt" />
                </div>

                <!-- Text -->
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Frische Bäume, wachsende Tradition
                            </h2>
                            <p class="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                Als junge Unternehmer legen wir großen Wert auf Qualität. Unsere Bäume wählen wir aus
                                verlässlichen Bezugsquellen. Wir suchen jeden Baum sorgfältig aus, prüfen seine Qualität
                                und liefern ihn bequem in ihr Wohnzimmer.
                            </p>
                        </div>

                        <!-- Stats -->
                        <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div class="flex-col justify-start items-start inline-flex">
                                <h3 class="text-white text-4xl font-bold font-manrope leading-normal">1</h3>
                                <h6 class="text-gray-400 text-base font-normal leading-relaxed">Lieferant</h6>
                            </div>
                            <div class="flex-col justify-start items-start inline-flex">
                                <h4 class="text-white text-4xl font-bold font-manrope leading-normal">100%</h4>
                                <h6 class="text-gray-400 text-base font-normal leading-relaxed">Engament</h6>
                            </div>
                            <div class="flex-col justify-start items-start inline-flex">
                                <h4 class="text-white text-4xl font-bold font-manrope leading-normal">24/7</h4>
                                <h6 class="text-gray-400 text-base font-normal leading-relaxed">Online bestellen</h6>
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <RouterLink to="/order"
                        class="sm:w-fit w-full px-3.5 py-2 bg-[#d41616] hover:bg-[#fb4242] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white text-sm font-medium leading-6">Jetzt bestellen</span>
                    </RouterLink>
                </div>

            </div>
        </div>
    </section>
</template>
