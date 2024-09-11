<template>
	<div class="menuServiceView_overview">
		<span class="menuServiceView_overview_section">
			<NuxtLink class="menuServiceView_overview_section_container" to="/">
				<p>Home</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/contact">
				<p>Kontakt</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/about">
				<p>Über mich</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/impressum">
				<p>Impressum</p>
			</NuxtLink>
		</span>
		<span class="menuServiceView_overview_section">
			<NuxtLink class="menuServiceView_overview_section_container" to="/tuevcalculator">
				<p>Plaketten Rechner</p>
			</NuxtLink>
			<div class="menuServiceView_overview_section_container menuServiceView_overview_container_openhours">
				<CountdownTimer />
			</div>
		</span>
	</div>
</template>