<template>
	<view>
		<view class="header">
			<view class="item">
				<image  class="logo" src="../../static/live/地图-地标.png"></image>
				<image class="search" src="../../static/live/搜索.png"></image>
				<input class="input"/>
				<view class="box">
					<image src="../../static/live/订单.png" class="order"></image>
					<view>订单</view>
				</view>	
			</view>
		</view>
		
		<view class="container">
			<view class="item1">
				<view class="card">
					<image src="../../static/live/手机充值.png" class="logo1"></image>
					<view>手机充值</view>
				</view>
				
				<view class="card">
					<image src="../../static/live/生活缴费.png" class="logo1"></image>
					<view>生活缴费</view>
				</view>
				
				<view class="card">
					<image src="../../static/live/政务便民.png" class="logo1"></image>
					<view>政务便民</view>
				</view>
				
				<view class="card">
					<image src="../../static/live/活动专区.png" class="logo1"></image>
					<view>活动专区</view>
				</view>
				
			</view>
		</view>
		
		<view class="footer">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

.card{
	text-align: center;
}
.logo1{
	width: 80rpx;
	height: 80rpx;
}
.header{
	// background: navajowhite;
	.logo{
		width: 50rpx;
		height: 50rpx;
	}
	.item{
		display: flex;
		.input{
			border: #a6d1a2 solid;
			border-radius: 30rpx;
			margin-left: 10rpx;
		}
		.search{
			width: 40rpx;
			height: 40rpx;
			margin-left: 50rpx;
			margin-top: 10rpx;
		}
		.box{
			margin-left: 50rpx;
			.order{
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
}
.container{
	height: 250rpx;
	background: Azure;
	border: Azure solid;
	border-radius: 30rpx;
	filter: drop-shadow(5rpx 5rpx 5rpx rgba(0,0,0,.5));
	margin-left: 40rpx;
	margin-right: 40rpx;
	.item1{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
}
.footer{
	height: 300rpx;
	// background: greenyellow
}
</style>

push {
	git add .
	git commit -m "注释"
	git push -u origin main
}