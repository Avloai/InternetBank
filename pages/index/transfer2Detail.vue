<template>
	<view class="container">
		<view class="item1 card">
			<view class="content">
				收款人
			</view>
			<view class="content gray">
				{{this.payee}} {{this.telephone}}
			</view>
		</view>
		<view class="item2">
			<view class="content" style="display: inline-block;">
				付款账号
			</view>
			<view class="content gray" style="display: inline-block; margin-left: 255rpx;">
				{{this.cards[index].cardId.substr(0,4)}}****{{this.cards[index].cardId.substr(15,4)}}
				<image src="../../static/index/选择账号.png" @click="checkCard"></image>
			</view>
			<hr />
			<view class="content1 gray">
				可用金额 {{this.cards[index].balance}}
			</view>
		</view>

		<view class="item3">
			<view class="content">
				转账金额
			</view>
			<hr />
			<view class="content2 gray">
				<image src="/static/index/人民币.png" mode=""></image>
				<input type="text" placeholder="请输入转账金额" />
			</view>
		</view>
		<view class="button">
			<button>下一步</button>
		</view>
		<view class="font">
			<p>温馨提示：</p>
			<p>1.请勿轻易向陌生收款人转账，谨防电信网络诈骗。做到“陌生电话勿轻信，对方身份要核清，家中隐私勿泄露，涉及钱财需小心，遇到事情勿惊慌，及时拨打110”。</p>
			<p>2.为了您的资金安全，请务必妥善保管银行卡号、密码等个人重要信息。</p>
			<p>3.我行提供多层级的安全认证方式供您使用，分别对应不同的转账限额，您可以通过安全中心进行查看和设置。</p>
		</view>

		<uni-popup ref="popup" type="bottom">
			<view class="">

			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payee: "",
				telephone: "",
				cards: [{
					cardId: "1234567899876543210",
					balance: 10.20
				}, {
					cardTd: "1234567890123456789",
					balance: 10.30
				}],
				index: 0,
				deposit: '27.97'
			}
		},
		onLoad: function(option) {
			this.payee = option.payee
			this.telephone = option.telephone
			console.log(this.payee)
		},
		methods: {
			checkCard() {

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
				margin-right: 54rpx;
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
	}
</style>