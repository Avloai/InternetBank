<template>
	<view>
		<view class="head">
				<view class="time">
						<uni-datetime-picker v-model="TimeRanges" type="daterange" @maskClick="maskClick" />
				</view>
				<view class="account">
					<uni-data-select
					        v-model="value"
					        :localdata="range"
					        @change="change"
					        :clear="false"
							class="select"
					      ></uni-data-select>
				</view>
				
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TimeRanges: ["2021-03-8", "2021-4-20"],
				value: 0,
				range: [
				  { value: 0, text: "全部账户" },
				  { value: 1, text: "借记卡" },
				  { value: 2, text: "信用卡" },
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.account{
		display: flex;
		width: 300rpx;
	}
	
	.head{
	}
</style>
