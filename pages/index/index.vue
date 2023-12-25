<template>
	<view class="container">
		<view class="head">
			<Navbar />
			<IBSwiper></IBSwiper>
		</view>
		<view>
			<MFunction @newPage="newPage"></MFunction>
		</view>
		<image src="../../static/index/1703515398784.jpg" style="margin-left: 40rpx;height: 500rpx;width: 670rpx;margin-top: 20rpx;"></image>
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

<style lang="scss" scoped>
</style>