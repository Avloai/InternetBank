<template>
	<view class="container">
		<view class="header box">
			<image src="../../static/person/image.png" mode=""></image>
			欢迎使用，点击登录
		</view>
		<view class="body box">
			<view class="card">
				<view class="image">
					<image src="../../static/person/1.png" mode=""></image>
				</view>
				<view class="font">
					我的账户
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/2.png" mode=""></image>
				</view>
				<view class="font">
					我的理财
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/3.png" mode=""></image>
				</view>
				<view class="font">
					我的储蓄
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/4.png" mode=""></image>
				</view>
				<view class="font">
					贷款
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/5.png" mode=""></image>
				</view>
				<view class="font">
					我的信息
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/6.png" mode=""></image>
				</view>
				<view class="font">
					信用卡
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/7.png" mode=""></image>
				</view>
				<view class="font">
					安全设置
				</view>
			</view>
			<view class="card">
				<view class="image">
					<image src="../../static/person/8.png" mode=""></image>
				</view>
				<view class="font">
					我的票劵
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

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.container {
		margin: 0 40rpx;
	}

	.header {
		height: 200rpx;
		padding: 0 30rpx;
		background-color: floralwhite;
		display: flex;
		align-items: center;

		image {
			width: 135rpx;
			height: 135rpx;
			border-radius: 50%;
			margin-right: 30rpx;
		}

		font-size: 35rpx;
		box-shadow: 3px 2px 2px #ececec;
	}

	.box {
		border-radius: 20rpx;
	}

	.body {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: 340rpx;
		background-color: ghostwhite;
		margin: 20rpx 0;
		box-shadow: 3px 2px 2px #ececec;

		.card {
			margin: 15rpx 5rpx;
			width: 150rpx;
			height: 150rpx;
			text-align: center;

			.image {
				margin: 10rpx;
				display: inline-block;
				height: 70rpx;
				width: 70rpx;

				image {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.font {
				width: 100%;
				font-size: 26rpx;
			}
		}
	}
</style>