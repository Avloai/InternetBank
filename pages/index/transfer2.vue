<template>
	<view class="container">
		<hr />
		<view class="head">
			<view class="h2">
				<view class="h21">
					收款手机号
				</view>
				<view class="h21">
					<input type="text" placeholder="请输入手机号" />
				</view>
			</view>
			<view class="h2">
				<view class="h21">
					收款人
				</view>
				<view class="h21">
					<input type="text" placeholder="请输入真实姓名" />
				</view>
			</view>
		</view>

		<view class="foot">
			<view class="f5">
				<p>温馨提示</p>
				<p>1.请您从通讯录选择正确手机号。</p>
				<p>2.请务必确认收款人姓名、手机号真实有效。</p>
				<p>3.如未在收款行设置手机号收款，则无法使用本功能对其转账、</p>
			</view>
			<view class="f4">
				<button>下一步</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cards: [{
					cardId: "6228480059892502879",
					balance: 642.09
				}, {
					cardId: "1234567890123456789",
					balance: 1000.50
				}],
				index: 0,
				tag: 0,
				money: 0,
				txt: ''
			}
		},
		methods: {
			selectCard() {
				this.tag = 1;
			},
			changeCard(i) {
				this.index = i;
				this.tag = 0;
			},
			getMoney() {
				if (this.txt == '') this.money = 0;
				else this.money = parseFloat(this.txt)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;

		hr {
			width: 100%;
			height: 20rpx;
			background-color: #dedede;
			border: none;
		}

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
				justify-content: space-between;
				margin: 20rpx 0;

				.b21 {
					flex: 1;

					image {
						width: 80rpx;
						height: 80rpx;
					}
				}

				.b22 {
					flex: 15;
					margin: 0 20rpx;
					display: flex;
					flex-direction: column;

					.b221 {
						margin-bottom: 10rpx;
						font-weight: bold;
					}

					.b222 {
						color: #acacac;
					}
				}

				.b23 {
					flex: 1;

				}
			}

		}

		.foot {
			padding: 30rpx;
			display: flex;
			flex-direction: column;

			.f1 {
				font-size: 40rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			.f2 {
				display: flex;
				margin-top: 50rpx;
				height: 130rpx;
				border-bottom: 1px solid silver;

				.f21 {

					image {
						width: 100rpx;
						height: 100rpx;
					}
				}

				.f22 {

					input {
						height: 100rpx;
						font-size: 60rpx;
					}
				}
			}

			.f3 {
				color: #ff030f;
			}

			.f4 {
				margin: 50rpx 0;

				button {
					background-color: #ffdeb4;
					color: #ffffff;
					font-weight: bolder;
				}
			}
			.f5 {
				font-size: 24rpx;
				line-height: 36rpx;
				color: #8b8b8b;
			}
		}
	}
</style>