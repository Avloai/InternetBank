<template>
	<view class="container">
		<view class="item1 card">
			<view class="content">
				收款人
			</view>
			<view class="content gray">
				{{this.name}} {{this.telephone}}
			</view>
		</view>
		<view class="item2">
			<view class="content" style="display: inline-block;">
				付款账号
			</view>
			<uni-data-select v-model="value" :localdata="range" title="999" @change="change" class="deleteborder gray"
				style="display: inline-block; width: 260rpx; margin-left: 280rpx;" :clear="false">
				<image src="../../static/index/选择账号.png" @click="checkCard"></image>
			</uni-data-select>
			<hr />
			<view class="content1 gray">
				可用金额 {{ this.deposit }}
			</view>
		</view>

		<view class="item3">
			<view class="content">
				转账金额
			</view>
			<hr />
			<view class="content2 gray">
				<image src="/static/index/人民币.png" mode=""></image>
				<input type="number" v-model="money" placeholder="请输入转账金额" />
			</view>
		</view>
		<view class="button">
			<button @click="$refs.popup.open('bottom')">下一步</button>
		</view>
		<view class="font">
			<p>温馨提示：</p>
			<p>1.请勿轻易向陌生收款人转账，谨防电信网络诈骗。做到“陌生电话勿轻信，对方身份要核清，家中隐私勿泄露，涉及钱财需小心，遇到事情勿惊慌，及时拨打110”。</p>
			<p>2.为了您的资金安全，请务必妥善保管银行卡号、密码等个人重要信息。</p>
			<p>3.我行提供多层级的安全认证方式供您使用，分别对应不同的转账限额，您可以通过安全中心进行查看和设置。</p>
		</view>

		<uni-popup ref="popup" type="bottom">
			<view class="content">
				<view class="c1">确认信息</view>
				<view class="c2">
					<view class="c21">
						{{this.money}}
					</view>
					<view class="c22">
						转账金额(元)
					</view>
				</view>
				<view class="c3">
					<view class="c31">
						收款人
					</view>
					<view>
						{{this.name}}
					</view>
				</view>
				<view class="c3">
					<view class="c31">
						收款账号
					</view>
					<view>
						{{this.account}}
					</view>
				</view>
				<view class="c4">
					<button class="c41" @click="newPage('transfer3')">确认</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				telephone: "",
				cards: [],
				deposit: 0,
				value: 0,
				range: [],
				money: '',
				account: '',
			}
		},
		onLoad: function(option) {
			uni.request({
				url: 'http://localhost:8081/card/byUserId',
				method: 'GET',
				data: {
					userId: option.userId
				},
				success: (res) => {
					this.cards = res.data.data
					this.name = option.name
					this.deposit = this.cards[0].balance
					this.account = this.cards[0].cardId
					for (let i = 0; i < this.cards.length; i ++) {
						let s = this.cards[i].cardId;
						let hide = s.slice(0, 4) + '****' + s.slice(15)
						console.log(hide)
						this.range.push({ value: i, text: hide})
					}
				}
			})
			
			
		},
		methods: {
			checkCard() {

			},
			change() {
				this.deposit = this.cards[this.value].balance
				this.account = this.cards[this.value].cardId
			},
			newPage() {
				
				uni.navigateTo({
					url:'/pages/index/transfer3'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f4f4f4;
		padding: 10rpx 0;

		.card {
			margin: 20rpx 0;
			display: flex;
			background-color: #fff;
			justify-content: space-between;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
		}

		.item1 {
			height: 60rpx;

			.content {

				margin: 0 30rpx;
				font-size: 32rpx;
				line-height: 60rpx;
				margin-right: 36rpx;
			}
		}

		hr {
			border: none;
			height: 1px;
			border-top: 1px solid #d3d3d3;
		}

		.gray {
			color: #8b8b8b;
		}

		.item2 {
			height: 150rpx;
			margin: 20rpx 0;

			background-color: #fff;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

			image {
				margin-left: 15rpx;
				width: 30rpx;
				height: 30rpx;
			}

			.content {
				flex: 1;
				margin: 0 30rpx;
				font-size: 32rpx;
				line-height: 65rpx;
			}

			.content1 {
				margin-right: 40rpx;
				float: right;
				font-size: 28rpx;
				line-height: 80rpx;
			}

		}

		.item3 {
			// height: 500rpx;
			height: 200rpx;
			margin: 20rpx 0;
			background-color: #fff;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

			image {
				width: 60rpx;
				height: 60rpx;
			}

			.content {
				flex: 1;
				margin: 0 30rpx;
				font-size: 32rpx;
				line-height: 65rpx;
			}

			.content2 {
				margin: 30rpx;
				font-size: 32rpx;
				line-height: 120rpx;
				display: flex;
				align-items: center;

				input {
					margin-left: 30rpx;
				}
			}
		}

		.button {
			margin: 50rpx 36rpx;

			button {
				background-color: #ffdeb4;
				color: #ffffff;
				font-weight: bolder;
			}
		}

		.font {
			margin: 50rpx 36rpx;
			font-size: 28rpx;
			color: #8b8b8b;
		}

		.content {
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.c1 {
				flex: 1;
				border-bottom: 1rpx solid silver;
				width: 100%;
				font-size: 40rpx;
				font-weight: 600;
				line-height: 100rpx;
				text-align: center;
			}

			.c2 {
				text-align: center;
				margin: 40rpx;

				.c21 {
					font-size: 70rpx;
				}

				.c22 {
					color: #a3a3a3;
				}

			}

			.c3 {
				width: 90%;
				border-bottom: 1rpx solid silver;
				line-height: 80rpx;
				display: flex;

				.c31 {
					flex: 1;
				}
			}

			.c4 {
				margin: 50rpx 0;
				width: 90%;

				button {
					background-color: #ffbf00;
					color: #ffffff;
					font-weight: bolder;
				}
			}
		}
	}
</style>