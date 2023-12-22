<template>
	<view>
		<view class="ok">
			<img src="../../static/index/成功.png" class="success"></image>
		</view>
		<view class="body">
			<view class="box">
				<view class="item">产品名称:</view>
				<view class="item1">{{product.name}}</view>
			</view>
			<view class="box">
				<view class="item">转入账户:</view>
				<view class="item1">{{product.account}}</view>
			</view>
			<view class="box">
				<view class="item">转入地区:</view>
				<view class="item1">湖北</view>
			</view>
			<view class="box">
				<view class="item">转出账户:</view>
				<view class="item1">{{cardId}}</view>
			</view>
			<view class="box">
				<view class="item">转出地区:</view>
				<view class="item1">湖北</view>
			</view>
			<view class="box">
				<view class="item">所选币种:</view>
				<view class="item1">人民币</view>
			</view>
			<view class="box">
				<view class="item">转账金额:</view>
				<view class="item1">{{deposit}}元</view>
			</view>
			<view class="box">
				<view class="item">约转存期:</view>
				<view class="item1">不约转</view>
			</view>
			<view class="box">
				<view class="item">所选利率:</view>
				<view class="item1">{{product.rate}}%</view>
			</view>
		</view>
		
		<view>
			<view style="height: 60rpx; background-color: #eeefef;"></view>
			<button type="warn" @click="back">返回</button>
		</view>
	</view>
</template>

<script>
import moment from 'moment';
	export default {
		data() {
			return {
				user: null,
				deposit: 0,
				product: {},
				cardId: null,
				balance: 0,
			};
		},
		methods:{
			load(){
				this.user = JSON.parse(uni.getStorageSync('user'));
				this.product = JSON.parse(uni.getStorageSync('product'));
				this.deposit = parseFloat(uni.getStorageSync('deposit')).toFixed(2);
				this.cardId = uni.getStorageSync('cardId');
				this.balance = uni.getStorageSync('balance');
			},
			back(){
				uni.navigateTo({
					url:'/pages/index/startDeposit'
				})
			}
		},
		mounted() {
			this.load();
		}
	}
</script>

<style lang="scss">
	.body{
		margin-top: 70rpx;
	}
	.ok{
		display: flex;
		text-align: center;
		margin-top: 50rpx;
		.success{
			width: 200rpx;
			height: 200rpx;
			text-align: center;
			margin-left: 250rpx;
		}
	}

	.box{
		display: flex;
		.item{
			margin-left: 150rpx;
			color: #beccc9;
		}
		.item1{
			margin-left: 50rpx;
		}
	}
</style>
