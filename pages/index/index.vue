<template>
	<view class="container">
		<view class="head">
			<Navbar />
			<IBSwiper></IBSwiper>
		</view>
		<view>
			<MFunction @newPage="newPage"></MFunction>
		</view>
	</view>
</template>

<script>
	import Navbar from "./components/Navbar.vue"
	import MFunction from "./components/MFunction.vue"

	export default {
		components: {
			Navbar: Navbar,
			MFunction: MFunction
		},
		methods: {
			newPage(page) {
				console.log(page)
				uni.navigateTo({
					url: page
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {


		.head {}
	}
</style>