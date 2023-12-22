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
				<view class="item1">{{product.account}}</view>
			</view>
			<view class="box">
				<view class="item">转入地区:</view>
				<view class="item1">湖北</view>
			</view>
			<view class="box">
				<view class="item">转出账户:</view>
				<view class="item1">{{cardId}}</view>
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
			<button type="warn" @click="insert">确定</button>
		</view>
	</view>
</template>

<script>
import moment from 'moment';
	export default {
		data() {
			return {
				user: null,
				deposit: 0,
				product: {},
				cardId: null,
				balance: 0,
			};
		},
		methods:{
			load(){
				this.user = JSON.parse(uni.getStorageSync('user'));
				this.product = JSON.parse(uni.getStorageSync('product'));
				this.deposit = parseFloat(uni.getStorageSync('deposit')).toFixed(2);
				this.cardId = uni.getStorageSync('cardId');
				this.balance = uni.getStorageSync('balance');
			},
			insert(){
				var now = moment();
				var startDate = now.format('YYYY-MM-DD HH:mm:ss');
				console.log(startDate);
				var endDate = now.add(this.product.term, 'months');
				endDate = endDate.format('YYYY-MM-DD HH:mm:ss');
				console.log(endDate);
				uni.request({
					url:'http://localhost:8081/deposit/insert',
					method: 'POST',
					data:{
						userId: this.user.userId,
						userName: this.user.userName,
						balance: parseFloat(this.deposit).toFixed(2),
						term: this.product.term,
						startDate: startDate,
						endDate: endDate,
						account: this.product.account,
						rate: this.product.rate,
						name: this.product.name
					},
					success: (res) => {
						uni.request({
							url:'http://localhost:8081/card',
							method:'PUT',
							data:{
								cardId: this.cardId,
								balance: parseFloat(this.balance).toFixed(2) - parseFloat(this.deposit).toFixed(2)
							},
							success: (res) => {
								uni.navigateTo({
									url:'/pages/index/success',
								})
							}
						})
					}
				});
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
