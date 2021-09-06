<script setup>
import { ref } from 'vue'

defineProps({
	nav: Boolean
})

</script>

<template>
	<div class="navbar-wrapper" v-if="nav">
		<!-- START NAV -->
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img src="/tall-hat.png" alt="Logo" />
					</a>
					<span class="navbar-burger burger" data-target="navbarMenu">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenu" class="navbar-menu">
					<div class="navbar-end">
						<a href="/" class="navbar-item is-active">Accueil</a>
						<a class="navbar-item">A propos</a>
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">Compte</a>
							<div class="navbar-dropdown">
								<a class="navbar-item">Dashboard</a>
								<a class="navbar-item">Profile</a>
								<a class="navbar-item">Settings</a>
								<hr class="navbar-divider" />
								<div class="navbar-item">Logout</div>
							</div>
						</div>
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">FR</a>
							<div class="navbar-dropdown">
								<a class="navbar-item">Spanish</a>
								<a class="navbar-item">English</a>
								<a class="navbar-item">German</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<!-- END NAV -->
	</div>
</template>

<style scoped>
.navbar-wrapper {
	margin: 1rem auto;
	max-width: 92%;
}
a {
	color: #42b983;
}
</style>
