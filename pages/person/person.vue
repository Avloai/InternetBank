<template>
	<view class="container">
		<view class="header box">
			<image src="../../static/person/image.png" mode=""></image>
			{{ 77777777 }}
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
		<view class="footer box">
			<view class="top">
				<view class="Tleft">资产负债</view>
				<image src="../../static/person/9.png" mode=""></image>
			</view>
			<view class="explanation">
				<view class="font">
					我的资产
				</view>
				<view class="font">
					我的负债
				</view>
			</view>
			<view class="down">
				<view>
					<image src="../../static/person/10.png" mode=""></image> {{0.01}}
				</view>
				<view>
					<image src="../../static/person/10.png" mode=""></image> {{0.01}}
				</view>
			</view>
		</view>
		<view class="footer box">
			<view class="top">
				<view class="Tleft">本月收支</view>
				<image src="../../static/person/9.png" mode=""></image>
			</view>
			<view class="explanation">
				<view class="font">
					支出
				</view>
				<view class="font">
					收入
				</view>
			</view>
			<view class="down">
				<view>
					<image src="../../static/person/10.png" mode=""></image> {{10000}}
				</view>
				<view>
					<image src="../../static/person/10.png" mode=""></image> {{10000}}
				</view>
			</view>
		</view>
		<navigator url="login/login"><button type="default">LOGIN</button></navigator>
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
		margin: 15rpx 0;
		text-align: center;
	}

	.body {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: 340rpx;
		background-color: ghostwhite;
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

	.footer {
		background-color: ghostwhite;
		height: 280rpx;
		box-shadow: 3px 2px 2px #ececec;

		.top {
			padding: 28rpx 24rpx 36rpx 36rpx;
			display: flex;
			justify-content: space-between;
			height: 48rpx;
			background-color: floralwhite;
			font-weight: $uni-bg-color-grey;
			font-size: 40rpx;

			.Tleft {
				width: 160rpx;
				display: inline-block;
			}

			image {
				width: 40rpx;
				height: 40rpx;
				display: inline-block;
				margin-top: 10rpx;
			}
		}

		.explanation {
			padding: 30rpx 36rpx 0 36rpx;
			display: flex;
			justify-content: space-between;

			.font {
				display: inline-block;
				font-size: 24rpx;
			}
		}

		.down {
			padding: 24rpx;
			display: flex;
			justify-content: space-between;

			image {
				height: 40rpx;
				width: 40rpx;
			}

			font-size: 48rpx;
			line-height: 40rpx;
		}
	}
</style>