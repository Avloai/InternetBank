<template>
	<view>
		<view>
			<view class="box">
				<view class="item">产品名称:</view>
				<view class="item1">{{deposit.name}}</view>
			</view>
			<view class="box">
				<view class="item">存款人名:</view>
				<view class="item1">{{deposit.userName}}</view>
			</view>
			<view class="box">
				<view class="item">目标账户:</view>
				<view class="item1">{{deposit.account}}</view>
			</view>
			<view class="box">
				<view class="item">所选币种:</view>
				<view class="item1">人民币</view>
			</view>
			<view class="box">
				<view class="item">转账金额:</view>
				<view class="item1">{{deposit.balance}}元</view>
			</view>
			<view class="box">
				<view class="item">活动利率:</view>
				<view class="item1">{{deposit.rate}}%</view>
			</view>
			<view class="box">
				<view class="item">存款周期:</view>
				<view class="item1">{{deposit.term}}个月</view>
			</view>
			<view class="box">
				<view class="item">约转存期:</view>
				<view class="item1">不约转</view>
			</view>
			<view class="box">
				<view class="item">开始时间:</view>
				<view class="item1">{{deposit.startDate}}</view>
			</view>
			<view class="box">
				<view class="item">到期时间:</view>
				<view class="item1">{{deposit.endDate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deposit:{},
			};
		},
		methods:{
			load(){
				this.deposit = JSON.parse(uni.getStorageSync('deposit'));
				console.log(this.deposit);
			}
		},
		created() {
			this.load();
		}
	}
</script>

<style lang="scss">
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
