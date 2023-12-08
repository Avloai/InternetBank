<template>
	<view class="container">
		<!-- 借记卡 -->
		<view class="cards">
			<h3>借记卡</h3>
			<view v-if="debitCards.length > 0">
				<view class="card" v-for="(card, index) in debitCards">
					<view class="msg">
						<view class="cardId">
							{{card.cardId}}
						</view>
						<view class="balance">
							<view class="font">
								人民币可用余额 >
							</view>
							<view class="num">
								{{card.balance}}
							</view>
						</view>
					</view>
					<view class="operate">
						<view class="half">
							查询明细
						</view>
						|
						<view class="half">
							我要转账
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<view class="card">
					<view class="msg">
						<view class="font">
							一键办卡
						</view>
					</view>
					<view class="operate">
						<view class="full">
							立即申请
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 信用卡 -->
		<view class="cards">
			<h3>信用卡</h3>
			<view v-if="creditCards.length > 0">
				<view class="card" v-for="(card, index) in creditCards">
					<view class="msg">
						<view class="cardId">
							{{card.cardId}}
						</view>
						<view class="balance">
							<view class="font">
								人民币可用余额 >
							</view>
							<view class="num">
								{{card.balance}}
							</view>
						</view>
					</view>
					<view class="operate">
						<view class="half">
							查询明细
						</view>
						|
						<view class="half">
							我要转账
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<view class="card">
					<view class="msg">
						<view class="font">
							一键办卡
						</view>
					</view>
					<view class="operate">
						<view class="full">
							立即申请
						</view>
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
				debitCards: [],
				creditCards: []
			};
		}
	}
</script>

<style lang="scss">
	.container {

		.cards {
			width: 90%;
			margin: 50rpx auto;

			h3 {
				font-size: 40rpx;
				font-weight: bold;
			}

			.card {
				margin: 20rpx 0 0 0;
				height: 350rpx;
				border-radius: 20rpx;
				box-shadow: 0rpx 10rpx 20rpx rgb(207, 207, 207);

				.msg {
					height: 250rpx;
					border-bottom: 1rpx silver solid;

					.cardId {
						margin-left: 20rpx;
						height: 100rpx;
						line-height: 100rpx;
						font-size: 40rpx;
					}

					.balance {
						width: 90%;
						margin: 0 auto;

						.font {
							float: left;
							font-size: 30rpx;
							line-height: 150rpx;
							font-weight: 400;
						}

						.num {
							float: right;
							line-height: 150rpx;
							font-size: 50rpx;
							font-weight: bolder;
						}
					}

					.font {
						text-align: center;
						font-size: 40rpx;
						font-weight: bold;
						line-height: 250rpx;
					}
				}

				.operate {
					text-align: center;
					font-size: 35rpx;
					font-weight: 500;
					line-height: 100rpx;
					display: flex;

					.half {
						width: 50%;
					}

					.full {
						width: 100%;
					}
				}
			}
		}
	}
</style>