<template>
	<view class="container">
		<view class="search">
			<uni-icons type="search"></uni-icons>
		</view>
		<view class="icon">
			<uni-icons type="headphones" size=25 color=#7a7a7a></uni-icons>
		</view>
		<view class="icon">
			<uni-icons type="email" size=25 color=#7a7a7a></uni-icons>
		</view>
		<view class="icon">
			<uni-icons type="settings" size=25 color=#7a7a7a></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 90%;
		margin: 10rpx auto;
		display: flex;

		.search {
			flex: 5;
			width: 50%;
			float: left;
			margin: auto 20rpx;
			border: 2rpx silver solid;
			border-radius: 40rpx;
			box-shadow: inset 1rpx 1rpx 2rpx 3rpx rgb(207, 207, 207);
		}

		.icon {
			flex: 1;
			margin: auto 20rpx;
		}
	}
</style>