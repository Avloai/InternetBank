<template>
	<view class="container">
		<view class="head">
			<view v-if="res == 1" class="h1">
				<view class="h11">
					<image src="../../static/index/成功.png"></image>
				</view>
				<view class="h12">
					<p>转账成功</p>
				</view>
			</view>
			<view v-else class="h1">
				<view class="h11">
					<image src="../../static/index/失败.png"></image>
				</view>
				<view class="h12">
					<p style="color: red;">转账失败</p>
				</view>
			</view>
			<view class="h2">
				<view class="h21">
					<p>转账记录</p>
				</view>
				|
				<view class="h21">
					<p>继续转账</p>
				</view>
			</view>
		</view>
		<view class="body">
			<button @click="newPage()">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: 0
			}
		},
		onLoad: function(option) {
			this.res = option.res
		},
		methods: {
			newPage() {
				uni.switchTab({
					url: "index"
				})
			}
		},
		mounted() {
			var a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		.head {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 200rpx 0;

			.h1 {
				display: flex;
				flex-direction: column;

				.h11 {
					image {
						width: 150rpx;
						height: 150rpx;
					}

					margin-bottom: 20rpx;
				}

				.h12 {
					text-align: center;
					font-size: 40rpx;
					font-weight: bold;
				}
			}

			.h2 {
				margin-top: 10rpx;
				display: flex;
				color: #00d8bb;

				.h21 {
					margin: 0 10rpx;
				}
			}
		}

		.body {
			width: 70%;

			button {
				background-color: #ffbf00;
				color: #ffffff;
			}
		}
	}
</style>