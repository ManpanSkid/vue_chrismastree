<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<footer class="px-4 py-8 bg-[#173305] text-gray-300">
		<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
			<div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
				<div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-[#d41616]">
					
					<img src="/logo_white.svg" alt="logo" class="w-7 h-7 rounded-full text-gray-50">
				</div>
				<ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
					<li>
						<RouterLink to="impressum">Impressum</RouterLink>
					</li>
					<li>
						<RouterLink to="datenschutz">Datenschutz</RouterLink>
					</li>
				</ul>
			</div>
			<ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
				<li>
					<RouterLink to="/">©deinweihnachstbaum.de</RouterLink>
				</li>
			</ul>
		</div>
	</footer>
</template>
