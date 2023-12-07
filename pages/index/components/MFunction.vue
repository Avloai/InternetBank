<template>
	<view class="container">
		<view class="function">
			<view>
				<image src="../../../static/index/我的账户.png"></image>
			</view>
			<view>
				<p>我的账户</p>
			</view>
		</view>
		<view class="function">
			<view>
				<image src="../../../static/index/转账.png"></image>
			</view>
			<view>
				<p>转账</p>
			</view>
		</view>
		<view class="function">
			<view>
				<image src="../../../static/index/收支.png"></image>
			</view>
			<view>
				<p>收支</p>
			</view>
		</view>
		<view class="function">
			<view>
				<image src="../../../static/index/扫一扫.png"></image>
			</view>
			<view>
				<p>扫一扫</p>
			</view>
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
		display: flex;
		width: 90%;
		margin: 0 auto;
		border: 1rpx none;
		border-radius: 20rpx;
		box-shadow: 3rpx 5rpx 20rpx rgb(207, 207, 207);

		.function {
			margin: 20rpx 36rpx;

			image {
				width: 100rpx;
				height: 70rpx;
			}

			p {
				text-align: center;
				font-size: 20rpx;
				font-family: "萝莉体 第二版";
			}
		}
	}
</style>