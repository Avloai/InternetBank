<template>
	<view>
		<view class="item">
			<view class="t1" @click="navigator('startDeposit')"><text>存入定期存款</text></view>
			<view class="t2"><text>我的定期存款</text></view>
		</view>
		
		<view class="title">
			<text class="ti1">产品名称</text>
			<text class="ti2">产品利率</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			navigator(page){
				uni.navigateTo({
					url:page
				})
			}
		}
	}
</script>

<style lang="scss">
	.title{
		margin-top: 50rpx;
		background-color: #8da5aa;
		.ti1{
			
		}
		.ti2{
			
		}
	}
	.item{
		margin-left: 20rpx;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		border-radius: 15rpx;
		border: #8da5aa 3rpx solid;
		height: 60rpx;
		width: 700rpx;
		background-color: #8da5aa;
		.t1{
			height: 60rpx;
			width: 350rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: white;
		}
		.t2{
			height: 60rpx;
			width: 350rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
