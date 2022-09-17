<template>

	<div id="layout-config" :class="containerClass">
		<a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
			<i class="pi pi-phone"></i>
		</a>
		<Button class="p-button-danger layout-config-close p-button-rounded p-button-text" icon="pi pi-times"
			@click="hideConfigurator" :style="{'z-index': 1}"></Button>
		<div class="layout-config-content">
			<h5 class="mb-5">Contact</h5>

			<div class="config-scale">
				<a href="https://www.gmail.com/">
					<i class="pi pi-at "></i>
					adventuretouruz@gmail.com
				</a>
			</div>
			<div class="config-scale">
				<a href="https://www.instagram.com/adventuretour.uz/">
					<i class="pi pi-instagram icon"></i>
					adventuretour.uz
				</a>

			</div>
			<div class="config-scale">
				<a href="">
					<i class="pi pi-whatsapp icon"></i>
					+998 97 513 19 99
				</a>
			</div>
			<div class="config-scale">
				<a href="https://www.facebook.com/Adventuretour/">
					<i class="pi pi-facebook"></i>
					adventuretour uz
				</a>
			</div>
			<div class="config-scale">
				<a href="@adventuretour_uz">
					<i class="pi pi-telegram icon"></i>
					@adventuretour_uz
				</a>
			</div>
			<div class="config-scale">
				<a href="https://twitter.com/">
					<i class="pi pi-twitter icon"></i>
					adventuretouruz
				</a>
			</div>
			<div class="config-scale">
				<a href="tel:998975131999">
					<i class="pi pi-phone"></i>
					+998 97 513 19 99
				</a>
			</div>
		</div>

	</div>
</template>

<script>
import EventBus from './AppEventBus';

export default {
	props: {
		layoutMode: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			active: false,
			d_layoutMode: this.layoutMode,
			scale: 14,
			scales: [12, 13, 14, 15, 16],
			
		}
	},
	outsideClickListener: null,
	themeChangeListener: null,
	watch: {
		$route() {
			if (this.active) {
				this.active = false;
				this.unbindOutsideClickListener();
			}
		},
		layoutMode(newValue) {
			this.d_layoutMode = newValue;
		}
	},
	beforeUnmount() {
		EventBus.off('theme-change', this.themeChangeListener);
	},
	mounted() {
		this.themeChangeListener = () => {
			this.applyScale();
		};

		EventBus.on('theme-change', this.themeChangeListener);
	},
	methods: {
		toggleConfigurator(event) {
			this.active = !this.active;
			event.preventDefault();

			if (this.active)
				this.bindOutsideClickListener();
			else
				this.unbindOutsideClickListener();
		},
		hideConfigurator(event) {
			this.active = false;
			this.unbindOutsideClickListener();
			event.preventDefault();
		},
		changeInputStyle(value) {
			this.$primevue.config.inputStyle = value;
		},
		changeRipple(value) {
			this.$primevue.config.ripple = value;
		},
		changeLayout(event, layoutMode) {
			this.$emit('layout-change', layoutMode);
			event.preventDefault();
		},
		bindOutsideClickListener() {
			if (!this.outsideClickListener) {
				this.outsideClickListener = (event) => {
					if (this.active && this.isOutsideClicked(event)) {
						this.active = false;
					}
				};
				document.addEventListener('click', this.outsideClickListener);
			}
		},
		unbindOutsideClickListener() {
			if (this.outsideClickListener) {
				document.removeEventListener('click', this.outsideClickListener);
				this.outsideClickListener = null;
			}
		},
		isOutsideClicked(event) {
			return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
		},
		decrementScale() {
			this.scale--;
			this.applyScale();
		},
		incrementScale() {
			this.scale++;
			this.applyScale();
		},
		applyScale() {
			document.documentElement.style.fontSize = this.scale + 'px';
		},
		changeTheme(event, theme, dark) {
			EventBus.emit('theme-change', { theme: theme, dark: dark });
			event.preventDefault();
		}
	},
	computed: {
		containerClass() {
			return ['layout-config', { 'layout-config-active': this.active }];
		},
		rippleActive() {
			return this.$primevue.config.ripple;
		},
		inputStyle() {
			return this.$appState.inputStyle;
		}
	}
}
</script>

<style>

</style>