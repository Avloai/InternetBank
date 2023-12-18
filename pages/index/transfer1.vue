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
			<view v-if="this.tag === 0" class="b2">
				<view class="b21">
					<image src="../../static/index/借记卡.png"></image>
				</view>
				<view class="b22">
					<view class="b221">
						借记卡 ({{cards[index].cardId.substr(15,4)}})
					</view>
					<view class="b222">
						可用余额 {{cards[index].balance}}
					</view>
				</view>
				<view class="b23" @click="selectCard">
					<uni-icons type="bars" size="30"></uni-icons>
				</view>
			</view>
			<view v-else>
				<view v-for="(card,i) in cards" v-bind:key="card.cardId" class="b2">
					<view class="b21">
						<image src="../../static/index/借记卡.png"></image>
					</view>
					<view class="b22">
						<view class="b221">
							借记卡 ({{card.cardId.substr(15,4)}})
						</view>
						<view class="b222">
							可用余额 {{card.balance}}
						</view>
					</view>
					<view class="b23" @click="changeCard(i)">
						<uni-icons type="checkbox" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<hr />
		<view v-if="this.tag == 0" class="foot">
			<view class="f1">
				<p>转账金额</p>
			</view>
			<view class="f2">
				<view class="f21">
					<image src="../../static/index/人民币.png"></image>
				</view>
				<view class="f22">
					<input type="text" v-model="txt" @keyup="getMoney()" placeholder="0">
				</view>
			</view>
			<view class="f3" v-if="this.money > cards[index].balance">
				<p>余额不足</p>
			</view>
			<view class="f4">
				<button>下一步</button>
			</view>
			<view class="f5">
				<p>风险提示：</p>
				<p>1.请勿轻易向陌生收款人转账，谨防电信网络诈骗。做到“陌生电话勿轻信，对方身份要核清，家中隐私勿泄露，涉及钱财需小心，遇到事情勿惊慌，及时拨打110”。</p>
				<p>2.为了您的资金安全，请务必妥善保管银行卡号、密码等个人重要信息。</p>
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
		}
	}
</style>