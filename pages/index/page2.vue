<template>
	<view>
		<view>
			<view style="height: 60rpx; background-color: #eeefef;"> 
				请确认如下信息
			</view>
			<view class="box">
				<view class="item">产品名称:</view>
				<view class="item1">{{product.name}}</view>
			</view>
			<view class="box">
				<view class="item">转入账户:</view>
				<view class="item1"></view>
			</view>
			<view class="box">
				<view class="item">转入地区:</view>
				<view class="item1">湖北</view>
			</view>
			<view class="box">
				<view class="item">转出账户:</view>
				<view class="item1"></view>
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
				<view class="item">到期后是否自动转入活期账户:</view>
				<view class="item1">自动转入</view>
			</view>
		</view>
		
		<view>
			<view style="height: 60rpx; background-color: #eeefef;"></view>
			<button type="warn">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deposit: null,
				product: {}
			};
		},
		methods:{
			load(){
				this.product = JSON.parse(uni.getStorageSync('product'));
				this.deposit = parseFloat(uni.getStorageSync('deposit')).toFixed(2);
			}
		},
		mounted() {
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
