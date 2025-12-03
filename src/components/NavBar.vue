<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

// Explicitly type the ref values
const activeSection = ref<string>('hero')
const mobileMenuOpen = ref<boolean>(false)

// Function signature simplified to avoid TSX parsing errors on return type
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
    // Explicitly type the NodeList returned by querySelectorAll
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section')

    // Explicitly type the Intersection Observer Callback function, simplifying 
    // the arrow function syntax to prevent TSX errors.
    const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        // IntersectionObserverInit is the default type for the options object
        { threshold: 0.6 }
    )

    // Explicitly type the section element in the loop
    sections.forEach((section: HTMLElement) => observer.observe(section))
})
</script>

<template>
    <nav class="bg-[#173305] sticky top-0 z-50 border-b border-white/10">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="toggleMobileMenu" type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                        <span class="sr-only">Open main menu</span>

                        <!-- Hamburger Icon -->
                        <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor"
                            stroke-width="1.5">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        <!-- X Icon -->
                        <svg v-else viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor"
                            stroke-width="1.5">
                            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                    <RouterLink class="flex shrink-0 items-center" to="/">
                        <img src="/logo.png" alt="Dein Weihnachtsbaum" class="h-8 w-auto" />
                    </RouterLink>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="#hero" :class="[
                                'rounded-md px-3 py-2 text-sm font-medium transition',
                                activeSection === 'hero'
                                    ? 'bg-gray-950/50 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            ]">
                                Home
                            </a>
                            <a href="#about-us" :class="[
                                'rounded-md px-3 py-2 text-sm font-medium transition',
                                activeSection === 'about-us'
                                    ? 'bg-gray-950/50 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            ]">
                                Über Uns
                            </a>
                            <a href="#team" :class="[
                                'rounded-md px-3 py-2 text-sm font-medium transition',
                                activeSection === 'team'
                                    ? 'bg-gray-950/50 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            ]">
                                Unser Team
                            </a>
                            <a href="#service" :class="[
                                'rounded-md px-3 py-2 text-sm font-medium transition',
                                activeSection === 'service'
                                    ? 'bg-gray-950/50 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            ]">
                                Dienstleistungen
                            </a>

                            <RouterLink to="/order"
                                class="px-5 py-2 font-semibold rounded text-sm transition dark:bg-[#d41616] dark:text-gray-100">
                                Jetzt Bestellen
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="mobileMenuOpen" class="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-[#173305] border-t border-white/10">
            <a href="#hero"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                Home
            </a>
            <a href="#about-us"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                Über Uns
            </a>
            <a href="#team"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                Unser Team
            </a>
            <a href="#service"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                Dienstleistungen
            </a>

            <RouterLink to="/order"
                class="block text-center px-5 py-2 font-semibold rounded text-sm transition bg-[#d41616] text-gray-100">
                Jetzt Bestellen
            </RouterLink>
        </div>
    </nav>
</template>