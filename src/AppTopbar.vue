<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" :src="topbarImage()" />
			<span style="text-align: center;">Transport cars for tourists in Khiva</span>
		</router-link>

		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<h5 style="margin: 0.75rem">Select language</h5>
			</li>
			<li>
				<Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="ENG" />
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-sun"></i>
					<span>Today's weather</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-youtube"></i>
					<span>Watch our tours</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			dropdownValues: [
					{name: 'UZ', code: 'UZ'},
					{name: 'RU', code: 'RU'},
					{name: 'ENG', code: 'ENG'},
					{name: 'FRA', code: 'FRA'},
					{name: 'GER', code: 'GER'}
				],
				dropdownValue: null,
		}
	},
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	}
}
</script>