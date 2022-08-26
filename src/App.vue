<template>
	<div :class="containerClass" @click="onWrapperClick">
        <AppTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                <router-view />
            </div>
            <AppFooter />
        </div>

		<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" />
        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppMenu from './AppMenu.vue';
import AppConfig from './AppConfig.vue';
import AppFooter from './AppFooter.vue';

export default {
    emits: ['change-theme'],
    data() {
        return {
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            menu : [
                {
                    label: 'Home',
                    items: [{
                        label: 'Travel places', icon: 'pi pi-fw pi-home', to: '/',
                        // items: [
                        //         {label: 'About place', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Place maps', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: "Cars table", icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Place photos', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Call us', icon: 'pi pi-fw pi-bookmark',},
                        //     ]
                    }]
                },
				{
					label: 'Services', icon: 'pi pi-fw pi-sitemap',
					items: [
						{label: 'Cars', icon: 'pi pi-fw pi-car', to: '/formlayout',
                        // items: [
                        //         {label: 'Travel table', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Cars photos', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Call us', icon: 'pi pi-fw pi-bookmark',},
                        //     ]
                        },
						{label: 'Gits', icon: 'pi pi-fw pi-user', to: '/input',
                        // items: [
                        //         {label: 'Travel table', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Call us', icon: 'pi pi-fw pi-bookmark',},
                        //     ]
                        },
                        {label: "Galleria", icon: "pi pi-fw pi-image", to: "/floatlabel",
                        // items: [
                        //         {label: 'About place', icon: 'pi pi-fw pi-bookmark',},
                        //         {label: 'Place maps', icon: 'pi pi-fw pi-bookmark',},
                        //     ]
                        },
                        {label: "About us", icon: "pi pi-fw pi-exclamation-circle", to: "/invalidstate",                        },
						
					]
				},
            ]
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
					if(this.mobileMenuActive === true) {
						this.overlayMenuActive = true;
					}

                    this.overlayMenuActive = !this.overlayMenuActive;
					this.mobileMenuActive = false;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
		},
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth >= 992;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }

            return true;
        }
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
				'p-input-filled': this.$primevue.config.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        logo() {
            return (this.$appState.darkTheme) ? "images/logo-white.svg" : "images/logo.svg";
        }
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppMenu': AppMenu,
        'AppConfig': AppConfig,
        'AppFooter': AppFooter,
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
