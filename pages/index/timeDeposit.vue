<template>
	<view>
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">存入定期存款</view>
			<image class="image" src="../../static/person/9.png" @click="navigator('startDeposit')"></image>
		</view>
		
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">我的定期存款</view>
			<image class="image" src="../../static/person/9.png" @click="navigator('myDeposit')"></image>
		</view>
		
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			navigator(page) {
				uni.navigateTo({
					url: page
				})
			},
			back() {
				uni.navigateTo({
					url: '../index/deposit'
					})
				},
		},
		onBackPress() {
			this.back();
			return true;
		},
	}
</script>

<style lang="scss">
	.item{
		width: 1000rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		.index{
			margin-left: 20rpx;
		}
		.image{
			width: 40rpx;
			height: 40rpx;
			margin-left: 480rpx;
		}
	}
</style>
