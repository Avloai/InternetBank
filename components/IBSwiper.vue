<template>
	<view class="container">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" circular @change="change" autoplay interval="3000">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						<image :src="item.content" mode=""></image> 
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					content: '/static/index/轮播图1.jpg'
				}, {
					content: '/static/index/轮播图2.png'
				}, {
					content: '/static/index/轮播图3.png'
				}],
				current: 0,
				mode: 'scaleToFill',
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 300rpx;
	}
</style>