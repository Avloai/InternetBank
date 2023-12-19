<template>
	<view class="container">
		<view class="head">
			{{card.cardId.substr(0,4)}}****{{card.cardId.substr(15,4)}}
		</view>
		<view class="date">
			<view class="button">
				<view :class="[this.date == 7 ? 'font2' : 'font1']" @click="check(7)">
					近一周
				</view>
			</view>
			<view class="button">
				<view :class="[this.date == 30 ? 'font2' : 'font1']" @click="check(30)">
					近一月
				</view>
			</view>
			<view class="button">
				<view :class="[this.date == 90 ? 'font2' : 'font1']" @click="check(90)">
					近三月
				</view>
			</view>
			<view class="button">
				<view :class="[this.date == -1 ? 'font2' : 'font1']" @click="check(-1)">
					全部
				</view>
			</view>
		</view>
		<view class="body">
			<view v-for="(detailed,index) in detaileds" class="b1">
				<view class="b11">
					<view class="b111">
						{{detailed.abstract}}
					</view>
					<view class="b112">
						{{detailed.tradeDate|formatDate()}}
					</view>
				</view>
				<view class="b11" style="text-align: right;">
					<view class="b111">
						{{detailed.tradeAmount}}
					</view>
					<view class="b112">
						余额：{{detailed.balance.toFixed(2)}}
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
				detaileds: [{
						abstract: "美团支付",
						tradeDate: new Date(),
						target: "xzk",
						tradeAccount: "1234567891234567890",
						tradeAmount: 17.90,
						balance: 574.18
					},
					{
						abstract: "转账",
						tradeDate: new Date(),
						target: "xzk",
						tradeAccount: "1234567891234567890",
						tradeAmount: 17.90,
						balance: 550
					}
				],
				card: {
					cardId: ''
				},
				date: 7,
			}
		},
		methods: {
			check(date) {
				this.date = date;
			}
		},
		onLoad: function(option) {
			this.card.cardId = option.cardId
		},
		filters: {
			formatDate: function(value, args) {
				var dt = new Date(value);
				let year = dt.getFullYear();
				let month = (dt.getMonth() + 1).toString().padStart(2, '0');
				let date = dt.getDate().toString().padStart(2, '0');
				let hour = dt.getHours().toString().padStart(2, '0');
				let minute = dt.getMinutes().toString().padStart(2, '0');
				let second = dt.getSeconds().toString().padStart(2, '0');
				return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
			}

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.head {
			font-size: 40rpx;
		}

		.date {
			background-color: #e7e7e7;
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.button {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				.font1 {
					background-color: #fff;
					border-radius: 30rpx;
					width: 70%;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
				}

				.font2 {
					background-color: #ffcd37;
					border-radius: 30rpx;
					width: 70%;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			width: 90%;

			.b1 {
				border-bottom: 1px solid silver;
				display: flex;

				.b11 {
					flex: 1;

					.b111 {
						margin: 10rpx 0;
					}

					.b112 {
						margin-bottom: 10rpx;
						color: #767676;
					}
				}
			}

		}
	}
</style>