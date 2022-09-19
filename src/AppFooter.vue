<template>
	<div class="layout-footer">
		<img alt="Logo" :src="footerImage()" height="80" />
		
		
    <div class="layout-config-content">
			<div class="config-scale">
				<a href="https://www.gmail.com/">
					<i class="pi pi-at "></i>
				</a>
				<a href="https://www.instagram.com/adventuretour.uz/">
					<i class="pi pi-instagram icon"></i>
				</a>
				<a href="tel:998975131999">
					<i class="pi pi-whatsapp icon"></i>
				</a>
				<a href="https://www.facebook.com/profile.php?id=100085463902770">
					<i class="pi pi-facebook"></i>
				</a>
				<a href="@adventuretour_uz">
					<i class="pi pi-telegram icon"></i>
				</a>
				<a href="https://twitter.com/">
					<i class="pi pi-twitter icon"></i>
				</a>
				<a href="tel:998975131999">
					<i class="pi pi-phone"></i>
				</a>
				<a href="">
					<img src="images/visa.png" alt="images/visa.png" height="40rem" width="50rem">
				</a>
			</div>
			
		</div>
		<!-- Footer -->
  </div>
</template>

<script>
	export default {
		name: "AppFooter",
		methods: {
			footerImage() {
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
