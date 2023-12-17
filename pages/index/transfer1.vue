<template>
	<view class="container">
		<hr />
		<view class="head">
			<view class="h1">
				<p>收款人</p>
			</view>
			<view class="h2">
				<view class="h21">
					收款户名
				</view>
				<view class="h21">
					<input type="text" placeholder="请输入名称" />
				</view>
			</view>
			<view class="h2">
				<view class="h21">
					收款账号
				</view>
				<view class="h21">
					<input type="text" placeholder="请输入账号" />
				</view>
			</view>
		</view>
		<hr />
		<view class="body">
			<view class="b1">
				<p>付款卡</p>
			</view>
			<view class="b2">
				<view class="b21">
					<image src="../../static/index/借记卡.png"></image>
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

		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;

		hr {
			width: 100%;
			height: 20rpx;
			background-color: #dedede;
			border: none;
		}

		hr {}

		.head {
			display: flex;
			flex-direction: column;
			padding: 30rpx;

			.h1 {
				font-size: 40rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			.h2 {
				display: flex;

				.h21 {
					flex: 1;
					height: 60rpx;
					margin: 10rpx 0;
					border-bottom: 1rpx solid silver;

					p {
						font-size: 30rpx;
						font-weight: 600;
					}

					input {
						text-align: right;
					}
				}
			}
		}

		.body {
			padding: 30rpx;
			display: flex;
			flex-direction: column;

			.b1 {
				font-size: 40rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			.b2 {
				display: flex;

				.b21 {
					width: 100rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>