<template>
	<view>
		<view class="item">
			<view class="t1"><text>存入定期存款</text></view>
			<view class="t2" @click="navigator('myDeposit')"><text>我的定期存款</text></view>
		</view>
		
		<view class="title">
			<text class="ti1">产品名称</text>
			<text class="ti2">产品利率</text>
		</view>
		
		<div class="line"></div>
		
		
		<view v-for="(item,index) in products" key="index">
			<view class="index">
				<text>{{item.name}}</text>
				<view class="rate">
					<view class="r1">{{item.rate}}%</view>
					<view class="r2">以实际利率为准</view>
				</view>
				
				<image class="image" src="../../static/person/9.png" @click="navigator('page1', index)"></image>
			</view>
			<div class="line"></div>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{name: "精心存1号(三个月)", rate: 1.269, account: "6228234567345667890", code: "ABCD", term: "3"},
					{name: "精心存2号(三个月)", rate: 1.369, account: "6228234567345667891", code: "FVCJ", term: "3"},
					{name: "精心存3号(三个月)", rate: 1.469, account: "6228234567345667892", code: "GUNV", term: "3"},
					{name: "精心存4号(三个月)", rate: 1.669, account: "6228234567345667893", code: "sdgk", term: "3"},
					{name: "精心存5号(三个月)", rate: 1.669, account: "6228234567345667894", code: "dhkb", term: "3"},
				]
			};
		},
		methods: {
			navigator(page, index){
				uni.setStorageSync('product', JSON.stringify(this.products[index]))
				uni.navigateTo({
					url:page
				})
			},
			back() {
					uni.navigateTo({
						url: '../index/timeDeposit'
					})
				}
		},
		onBackPress() {
			this.back();
			return true;
		},
	}
</script>

<style lang="scss">
	.line{
		width:800px;
		height:1px;
		margin:0px auto;
		padding:0px;
		background-color:#D5D5D5;
		overflow:hidden;
	}
	.rate{
		margin-left: 200rpx;
		.r2{
			font-size: 30rpx;
			color: #8da5aa;
		}
	}
	image{
		width: 50rpx;
		height: 50rpx;
		margin-right: 0rpx;
	}
	.index{
		height: 80rpx;
		display: flex;
		align-items: center;
	}
	.title{
		margin-top: 50rpx;
		background-color: #8da5aa;
		.ti1{
			margin-left: 50rpx;
		}
		.ti2{
			margin-left: 400rpx;
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
		}
		.t2{
			height: 60rpx;
			background-color: white;
			width: 350rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
