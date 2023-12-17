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
			<view class="item2">
			<uni-section title="更多功能" type="line" padding>
						<swiper class="swiper" :indicator-dots="true" circular>
							<swiper-item>
								<uni-grid :column="5" :highlight="true" @change="change" :showBorder="false">
									<uni-grid-item v-for="(item, index) in list1" :index="index" :key="index">
										<view class="grid-item-box">
											<image :src="item.url" class="image" mode="aspectFill" />
											<view>
												<text class="text">{{ item.text }}</text>
											</view>
											
										</view>
									</uni-grid-item>
								</uni-grid>
							</swiper-item>
							
							<swiper-item>
								<uni-grid :column="5" :highlight="true" @change="change" :showBorder="false">
									<uni-grid-item v-for="(item, index) in list2" :index="index" :key="index">
										<view class="grid-item-box">
											<image :src="item.url" class="image" mode="aspectFill" />
											<view>
												<text class="text">{{ item.text }}</text>
											</view>
											
										</view>
									</uni-grid-item>
								</uni-grid>
							</swiper-item>
						</swiper>
					</uni-section>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [
					{url: "../../static/live/activity/校园.png", text: "校园"},
					{url: "../../static/live/activity/rice.png", text: "食堂"},
					{url: "../../static/live/activity/党费.png", text: "党费"},
					{url: "../../static/live/activity/车主服务.png", text: "车主服务"},
					{url: "../../static/live/activity/医保指南.png", text: "社保医保"},
					{url: "../../static/live/activity/电影票iocn.png", text: "电影票"},
					{url: "../../static/live/activity/美团膨胀大红包.png", text: "美团外卖"},
					{url: "../../static/live/activity/券.png", text: "优惠卡劵"},
					{url: "../../static/live/activity/京东.png", text: "京东特惠"},
					{url: "../../static/live/activity/热门活动.png", text: "热门活动"},
					
				],
				list2: [
					{url: "../../static/live/activity/编组 49备份 2.png",text: "视听会员"},
					{url: "../../static/live/activity/公益.png",text: "公益捐款"},
					{url: "../../static/live/activity/3 (1).png",text: "美食生活"},
					{url: "../../static/live/activity/店铺-01.png",text: "乡村集市"},
					{url: "../../static/live/activity/中外名酒(1).png",text: "名酒惠"},
					{url: "../../static/live/activity/出行.png",text: "日常出行"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

.swiper{
	height: 350rpx;
}
.grid-dot {
	padding-top: 100rpx;
}
.grid-item-box{
	text-align: center;
	margin-top: 25rpx;
}
.image{
	width: 70rpx;
	height: 70rpx;
}
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
	margin-top: 50rpx;
	margin-left: 40rpx;
	margin-right: 40rpx;
	.item1{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
}
.footer{
	margin-top: 100rpx;
	height: 300rpx;
	// background: greenyellow
}
</style>

push {
	git add .
	git commit -m "注释"
	git push -u origin main
	git pull
}