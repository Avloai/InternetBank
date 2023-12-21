<template>
	<view>
		<view style="height: 30rpx; background-color: #eeefef;"> </view>
		<view class="item">
			<view class="index">产品名称</view>
			<view>{{product.name}}</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">是否支持部分提前支取</view>
			<view class="index1">否</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">产品利率</view>
			<view class="index1">{{product.rate}}%</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">起存金额</view>
			<view class="index1">50.00元</view>
		</view>
		<div class="line"></div>
		
		<view style="height: 30rpx; background-color: #eeefef;"> </view>
		
		<view class="item">
			<view class="index">币种</view>
			<view class="index1">人民币</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">存入金额</view>
			<view class="index1">
				<input placeholder="请输入金额" v-model="deposit" class="input"/>
			</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">转出账户</view>
			<view class="index1">
				<uni-data-select v-model="card" :localdata="cards">
				</uni-data-select>
			</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">可用余额</view>
			<view class="index1"></view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">约转存期</view>
			<view class="index1">不约转</view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">到期后自动转入活期账户</view>
			<view class="index1"></view>
		</view>
		<div class="line"></div>
		<view class="item">
			<view class="index">营销代码</view>
			<view class="index1"></view>
		</view>
		<div class="line"></div>
		<view style="height: 30rpx; background-color: #eeefef;"> </view>
		
		<button class="next" type="warn" @click="navigator('page2', deposit)">下一步</button>
		
		<view class="tips">
			<view>温馨提示</view>
		</view>
		<view class="words">1.存款有风险，投资需谨慎，银行不是你个人财富的保管所</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: null,
				deposit: null,
				product: {},
				cards: null,
				card: null,
				cardIds: null
			};
		},
		methods: {
			load(){
				this.user = JSON.parse(uni.getStorageSync('user'));
				this.product = JSON.parse(uni.getStorageSync('product'));
				uni.request({
					url:'http://localhost:8081/card/byUserId',
					method: 'GET',
					data:{
						userId: this.user.userId
					},
					success: (res) => {
						this.cards = res.data.data;
						console.log(this.cards);
					}
				})
			},
			navigator(page, deposit){
				uni.setStorageSync('deposit', deposit)
				uni.navigateTo({
					url:page
				})
			}
		},
		mounted() {
			this.load();
		}
	}
</script>

<style lang="scss">
	.input{
		text-align: right;
	}
	.words{
		color: #D5D5D5;
	}
	.tips{
		text-align: center;
		color: #D5D5D5;
	}
	.next{
		height: 80rpx;
	}
	.line{
		width:800px;
		height:1px;
		margin:0px auto;
		padding:0px;
		background-color:#D5D5D5;
		overflow:hidden;
	}
	.item{
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.index{
			margin-left: 25rpx;
		}
		.index1{
			padding-right: 20rpx;
		}
	}
</style>
