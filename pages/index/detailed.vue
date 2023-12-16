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
			<view class="body">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	}
</style>