<template>
	<view class="container">
		<view class="exit" @click="clear">
			<img src="/static/person/退出.png" alt="" />
		</view>
		<view class="header box">
			<image src="../../static/person/image.png" mode=""></image>
			{{ this.user.userName }}
		</view>
		<view class="body box">
			<view class="card" @click="newPage('account')">
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
		<view class="footer box" @click="newPage('revenAndExpenditure')">
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
					<image src="../../static/person/10.png" mode=""></image> {{ this.asset.toFixed(2) }}
				</view>
				<view>
					<image src="../../static/person/10.png" mode=""></image> 0.00
				</view>
			</view>
		</view>
		<view class="footer box" @click="newPage('revenAndExpenditure')">
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
					<image src="../../static/person/10.png" mode=""></image> {{this.income.toFixed(2)}}
				</view>
				<view>
					<image src="../../static/person/10.png" mode=""></image> {{this.outcome.toFixed(2)}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				asset: 0,
				income: 0,
				outcome: 0
			}
		},
		methods: {
			clear() {
				uni.removeStorageSync('user')
				uni.navigateTo({
					url: 'login/login'
				})
			},
			newPage(page) {
				uni.navigateTo({
					url: '../index/' + page
				})
			}
		},
		onLoad() {
			this.user = JSON.parse(uni.getStorageSync('user'))
			uni.request({
				url: 'http://localhost:8081/card/getAll',
				method: 'GET',
				data: {
					userId: this.user.userId
				},
				success: (res) => {
					this.asset = res.data.data
					uni.request({
						url: 'http://localhost:8081/card/byUserId',
						method: 'GET',
						data: {
							userId: this.user.userId
						},
						success: (res) => {
							let cards = res.data.data
							let list = []
							for (let i = 0; i < cards.length; i++) {
								list[i] = cards[i].cardId;
							}
							console.log(list)
							const queryString = list.join(',')
							
							
							console.log(queryString)
							uni.request({
								url: 'http://localhost:8081/trade/All',
								method: "POST",
								data: {
									cards: queryString
								},
								success: (res) => {
									this.List = res.data.data
									for (let i = 0; i < this.List.length; i ++) {
										if (this.List[i].tradeAmount >= 0) 
											this.income += this.List[i].tradeAmount
										else this.outcome -= this.List[i].tradeAmount
									}
								}
							})
						}
					})
				}
			})
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

	.exit {
		display: flex;
		justify-content: flex-end;

		img {
			width: 50rpx;
			height: 50rpx;
		}
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