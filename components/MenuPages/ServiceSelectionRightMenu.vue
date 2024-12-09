<template>
	<div class="menuServiceView_overview">
		<span class="menuServiceView_overview_section">
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/tuev">
				<p>Hauptuntersuchung und Abgasuntersuchung</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/ac">
				<p>Klimaanlagenservice</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/tires">
				<p>Reifen und Räder</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/repair">
				<p>Unfallreparaturen</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/glasservice">
				<p>Glasschäden</p>
			</NuxtLink>
			<NuxtLink class="menuServiceView_overview_section_container" to="/service/oilchange">
				<p>Ölwechsel</p>
			</NuxtLink>
		</span>
	</div>
</template>

<style lang="scss">
.menuServiceView {
	&_overview {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: calc(100% - $header_hight);
		gap: $gap;
		z-index: 99;

		&_section {
			display: flex;
			flex-direction: column;

			&_container {
				cursor: pointer;
				display: flex;
				flex-direction: column;
				height: 75px;
				width: 100%;
				border-bottom: 1px solid $icon_base_grey;

				&_openhours {
					margin-top: auto;
				}

				& p {
					margin: auto;
					position: relative;
					font-weight: 500;
					line-break: auto;
				}
			}

			a {
				text-decoration: none;
				color: $light-font-color;
			}
		}
	}
}
</style>