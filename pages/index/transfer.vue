<template>
	<view class="container">
		<view class="head">
			<view class="main">
				<view class="button" @click="newPage('transfer1')">
					<view>
						<image src="../../static/index/账户转账.png" mode=""></image>
					</view>
					<view>
						<p>账号转账</p>
					</view>
				</view>
				<view class="button" @click="newPage('transfer2')">
					<view>
						<image src="../../static/index/手机号转账.png" mode=""></image>
					</view>
					<view>
						<p>手机号转账</p>
					</view>
				</view>
			</view>
			<view class="other">
				<view class="icon">
					<view>
						<image src="../../static/index/转账记录.png" mode=""></image>
					</view>
					<view>
						<p>转账记录</p>
					</view>
				</view>
				<view class="icon">
					<view>
						<image src="../../static/index/信用卡还款.png" mode=""></image>
					</view>
					<view>
						<p>信用卡还款</p>
					</view>
				</view>
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
			newPage(page) {
				uni.navigateTo({
					url: page
				}
			newPage(page) {
				uni.navigateTo({
					url: page
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		image {
			width: 100rpx;
			height: 100rpx;
		}

		p {
			text-align: center;
			font-size: 30rpx;
			font-weight: 500;
			font-family: "黑体";
		}

		.head {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 500rpx;
			background: linear-gradient(to bottom, #00ffbf 0%, #1ee7ae 40%, #fff 40%, #fff 100%);

			.main {
				display: flex;
				width: 90%;

				.button {
					background-color: #fefefe;
					flex: 1;
					height: 150rpx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					box-shadow: 0rpx 10rpx 20rpx rgb(207, 207, 207);
					border-radius: 10rpx;
					border: 1rpx solid #dedede;
					margin: 20rpx;
					margin-top: 100rpx;
				}
			}

			.other {
				display: flex;
				width: 90%;
				margin-top: 30rpx;

				.icon {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}



		}
	}
</style>