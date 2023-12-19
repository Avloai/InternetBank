<template>
	<view class="login">
		<view class="content-wrapper">
			<view class="title">
				<h1>欢迎使用财发银行</h1>
			</view>
			<view class="login-form">
				<view class="login-form-items">
					<view class="login-form-items-title">手机号</view>
					<input type="text" class="login-input" placeholder="手机号" />
				</view>
				<view style="height: 30rpx; background-color: #F4F5F6;">

				</view>
				<view class="login-form-items">
					<view class="login-form-items-title">密码</view>
					<input :type="pwd_show?'text':'password'" class="login-input" placeholder="请输入登录密码" />
					<image class="password_img" @click="change_pwd" style="width: 120rpx; height: 68rpx;"
						:src="pwd_show ? '/static/person/view-eye-fill.png':'/static/person/hide-eye-fill.png'"></image>
				</view>
			</view>
			<view class="submit-wrapper">
				<view class="register">
					<p v-if="status === 1" @click="transform">注册账号</p>
					<p v-else @click="transform">登录账号</p>
				</view>
				<button v-if="status === 1" class="login-btn" @click="login">登录</button>
				<button v-else class="login-btn">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwd_show: false,
				status: 1,
			}
		},
		methods: {
			change_pwd() {
				this.pwd_show = !this.pwd_show
			},
			transform() {
				this.status = this.status ^ 1
				console.log(this.status)
			},
			login() {
				console.log("s")
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F4F5F6;
	}

	.img_code {
		width: 60px;
		height: 30px;
	}

	.login {
		margin: 0 50rpx;

		.content-wrapper {
			width: 100%;

			.title {
				margin-top: 35rpx;
				width: 100%;
				margin-bottom: 10px;

				h1 {
					border: 0px;
					width: 60%;
					margin: 0 auto;
					text-align: center;
					border-bottom: 1px solid #E3E3E3;
					height: 100rpx;
					line-height: 100rpx;
					font-size: 18px;
					overflow: hidden;
					font-weight: 400;
				}
			}

			.login-form {
				margin: 16rpx 26rpx 16rpx 20rpx;
				background: #FFFFFF;

				.login-form-items {
					padding: 15px 10px;
					border-bottom: 1px solid #F3F4F5;
					position: relative;
					display: -webkit-flex;
					display: flex;

					.login-form-items-title {
						width: 30%;
						line-height: 48rpx;
						height: 32rpx;
						flex-shrink: 0;
					}

					.login-input {
						width: 100%
					}

				}
			}
		}

		.submit-wrapper {

			margin: 20rpx 20rpx 46rpx 20rpx;

			.register {
				margin: 20rpx;
				margin-right: 28rpx;
				font-size: 18rpx;
				display: flex;
				justify-content: flex-end;
				color: #aeaeae;
			}

			.register p:hover {
				color: #00aaff;
			}

			.login-btn {
				background-color: #0095e0;
				border-radius: 20rpx;
				border: #00aaff;
				color: #fff;
			}
		}

	}
</style>