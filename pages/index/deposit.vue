<template>
	<view>
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">定期存款</view>
			<image class="image" src="../../static/person/9.png" @click="navigator('timeDeposit')"></image>
		</view>
		
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">大额存款</view>
			<image class="image" src="../../static/person/9.png"></image>
		</view>
		
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">通知存款</view>
			<image class="image" src="../../static/person/9.png"></image>
		</view>
		
		<view style="height: 30rpx; background-color: #F4F5F6;"> </view>
		
		<view class="item">
			<view class="index">更多内容</view>
			<image class="image" src="../../static/person/9.png"></image>
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
				uni.switchTab({
					url: '../index/index'
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
		height: 100rpx;
		display: flex;
		align-items: center;
		.index{
			margin-left: 20rpx;
		}
		.image{
			width: 40rpx;
			height: 40rpx;
			margin-left: 550rpx;
		}
	}
</style>
