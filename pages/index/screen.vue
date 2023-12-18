<template>
	<view>
		<view>
			<view>金额</view>
			<view class="input">
				<input class="in1" placeholder="最小金额" />
				<text>—</text>
				<input class="in2" placeholder="最大金额" />
			</view>
		</view>
		
		<view></view>
		<view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.input{
		display: flex;
		margin-top: 20rpx;
		.in1{
			border: black 1rpx solid;
			border-radius: 8rpx;
			width: 300rpx;
		}
		.in2{
			border: black 1rpx solid;
			border-radius: 8rpx;
			width: 300rpx;
		}
	}
</style>
