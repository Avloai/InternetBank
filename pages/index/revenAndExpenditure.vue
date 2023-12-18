<template>
	<view>
		<view class="head">
				<view class="time">
						<uni-datetime-picker v-model="TimeRanges" type="daterange" @maskClick="maskClick" />
				</view>
				<view class="box">
					<view class="account">
						<uni-data-select
						        v-model="value1"
						        :localdata="range1"
						        @change="change"
						        :clear="false"
						      ></uni-data-select>
					</view>
					
					<view class="more">
						<uni-data-select
						        v-model="value2"
						        :localdata="range2"
						        @change="change"
						        :clear="false"
						      ></uni-data-select>
					</view>
				</view>
			</view>
			
			<view class="body">
				<view class="show">
					<view class="text">
						您在这段时间：
					</view>
					<view class="box2">
						<view class="m1">{{pay}}</view>
						<view class="m2">{{income}}</view>
					</view>
					<view class="box1">
						<text class="t1">支出(元)</text>
						<text class="t2">收入(元)</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				income: parseFloat(599.123).toFixed(2),
				pay: parseFloat(100).toFixed(2),
				TimeRanges: ["2021-03-8", "2021-4-20"],
				value1: 0,
				value2: 0,
				range1: [
				  { value: 0, text: "全部账户" },
				  { value: 1, text: "借记卡" },
				  { value: 2, text: "信用卡" },
				],
				range2: [
				  { value: 0, text: "全部" },
				  { value: 1, text: "收入" },
				  { value: 2, text: "支出" },
				],
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.box{
		display: flex;
		.account{
			width: 300rpx;
		}
		.more{
			display: flex;
			margin-left: 300rpx;
			.p1{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}

	
	.body{
		.box1{
			margin-top: 40rpx;
			.t1{
				margin-left: 40rpx;
			}
			.t2{
				margin-left: 300rpx;
			}
		}
		.show{
			margin-top: 40rpx;
			width: 650rpx;
			height: 250rpx;
			background: #fffecb;
			border-radius: 25rpx;
			margin-left: 50rpx;
			border: #fffecb solid;
			
			.text{
				margin-top: 20rpx;
				margin-left: 40rpx;
				font-size: 40rpx;
			}
			.box2{
				margin-top: 40rpx;
				display: flex;
				.m1{
					margin-left: 40rpx;
				}
				.m2{
					margin-left: 320rpx;
				}
			}
		}
	}
	

</style>
