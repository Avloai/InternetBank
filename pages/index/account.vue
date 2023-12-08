<template>
	<view class="container">
		<!-- 借记卡 -->
		<view class="cards">
			<h3>借记卡</h3>
			<view v-if="debitCards.length > 0">
				<view class="card" v-for="(card, index) in debitCards">
					<view class="msg">

					</view>
					<view class="operate">

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
						<view class="font">
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

					</view>
					<view class="operate">

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
						<view class="font">
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
				debitCards: [{
					cardId: '6228123412342879',
					balance: 1000.54
				}],
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

			.card {
				margin: 20rpx 0 0 0;
				height: 350rpx;
				border-radius: 20rpx;
				box-shadow: 0rpx 10rpx 20rpx rgb(207, 207, 207);

				.msg {
					height: 250rpx;
					border-bottom: 1rpx silver solid;

					.font {
						text-align: center;
						font-size: 40rpx;
						font-weight: bold;
						line-height: 250rpx;
					}
				}

				.operate {

					.font {
						text-align: center;
						font-size: 35rpx;
						font-weight: 500;
						line-height: 100rpx;
					}
				}
			}
		}
	}
</style>