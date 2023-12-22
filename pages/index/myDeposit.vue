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
		
		<view v-for="(item,index) in products" key="index">
			<view class="index">
				<text>{{item.name}}</text>
				<view class="rate">
					<view class="r1">{{item.rate}}%</view>
					<view class="r2">以实际利率为准</view>
				</view>
				
				<image class="image" src="../../static/person/9.png" @click="Navigator('mydetails', index)"></image>
			</view>
			<div class="line"></div>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: null,
				user: null,
			};
		},
		methods: {
			navigator(page){
				uni.navigateTo({
					url:page
				})
			},
			Navigator(page, index){
				uni.setStorageSync('deposit', JSON.stringify(this.products[index]))
				console.log(uni.getStorageSync('deposit'));
				uni.navigateTo({
					url:page
				})
			},
			load(){
				this.user = JSON.parse(uni.getStorageSync('user'));
				uni.request({
					url:'http://localhost:8081/deposit/getByUserId',
					method: 'POST',
					data:{
						userId: this.user.userId
					},
					success: (res) => {
						console.log(res.data.data);
						this.products = res.data.data;
					}
				})
			}
		},
		mounted() {
			this.load();
		}
	}
</script>

<style lang="scss">
	image{
		width: 50rpx;
		height: 50rpx;
		margin-right: 0rpx;
	}
	.index{
		height: 80rpx;
		display: flex;
		align-items: center;
		.rate{
			margin-left: 200rpx;
			.r2{
				font-size: 30rpx;
				color: #8da5aa;
			}
		}
	}
	.line{
		width:800px;
		height:1px;
		margin:0px auto;
		padding:0px;
		background-color:#D5D5D5;
		overflow:hidden;
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
