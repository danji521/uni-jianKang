<template>
	<view class="model">
		<view class="header">填写身体数据,计算你的理想模型</view>
		<view class="nav">
			<view>腰臀比(0.65-0.72) : --</view>
			<view>腰高比(0.65-0.72) : --</view>
		</view>
		<view class="main">
			<view class="ul">
				<view class="li li-one">
					<view>理想胸围:-cm</view>
					<view>当前胸围:<text class="blue">-cm</text></view>
				</view>
				<view class="li">
					<view>理想腰围:100cm</view>
					<view>当前腰围:<text class="blue">100cm</text></view>
					<view class="blue">如何塑性></view>
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<view>理想上臂:-cm</view>
					<view>当前上臂:-cm</view>
					<view class="blue">如何塑性></view>
				</view>
				<view class="li">
					<view>理想臀围:-cm</view>
					<view>当前臀围:<text class="blue">-cm</text></view>
					<view class="blue">如何塑性></view>
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<view>理想大腿围:-cm</view>
					<view>当前大腿围:<text class="blue">-cm</text></view>
					<view class="blue">如何塑性></view>
				</view>
				<view class="li">
					<view>理想腹围:-cm</view>
					<view>当前腹围:<text class="blue">-cm</text></view>
					<view class="blue">如何塑性></view>
				</view>
			</view>
			<view class="but-box">
				<view>理想小腿围:-cm</view>
				<view>当前小腿围: <text class="blue">-cm</text></view>
				<view class="blue">如何塑性></view>
			</view>
			<view class="model-img">
				<image src="../../static/human.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.model {
		padding: 0 13rpx*2;
	}

	.header {
		position: relative;
		left: 50%;
		top: 24rpx*2;
		margin-left: -314rpx;
		width: 314rpx*2;
		line-height: 42rpx*2;
		text-align: center;
		color: #FFFFFF;
		font-size: 12rpx*2;
		border-radius: 20rpx;
		background-image: linear-gradient(left, #fe8675, #ff5e88);
	}

	.nav {
		padding: 0 20rpx;
		margin-top: 39rpx*2;
		font-size: 12rpx*2;
	}


	.main {
		position: relative;
		padding: 0 13rpx*2;
		margin-top: 47rpx*2;



		// 颜色
		.blue {
			color: #1fd3c8;
			z-index: 1;
		}

		.ul {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.li {
			position: relative;
			width: 120rpx*2;
			padding: 10rpx 0;
			padding-left: 20rpx;
			margin-top: 15rpx*2;
			font-size: 10rpx*2 !important;
			border: 2rpx solid #cccccc;
			border-radius: 20rpx;
			box-sizing: border-box;
		}

		// 右边一排
		.li:nth-last-child(1) {
			left: 100rpx;
		}

		.li:nth-last-child(1)::after {
			position: absolute;
			top: 95rpx;
			left: 20rpx;
			content: "";
			width: 20rpx;
			height: 20rpx;
			border-right: 3rpx solid #cccccc;
			border-bottom: 3rpx solid #cccccc;
			background-color: #FFFFFF;
			transform: rotate(57deg) skew(20deg, 30deg);
		}

		// 左边
		.li:nth-last-child(2) {
			right: 110rpx;
		}

		.li:nth-last-child(2)::after {
			position: absolute;
			top: 25rpx;
			right: -14rpx;
			content: "";
			width: 20rpx;
			height: 20rpx;
			border-right: 3rpx solid #cccccc;
			border-bottom: 3rpx solid #cccccc;
			background-color: #FFFFFF;
			transform: rotate(-70deg) skew(20deg, 30deg);
		}

		.li-one view:last-child {
			position: initial !important;
		}

		.li-one ::after {
			top: 60rpx !important;
			transform: rotate(-36deg) skew(20deg, 30deg) !important;
		}

		// 如何塑性微调
		.li view:last-child {
			position: relative;
			top: 10rpx;
		}

		// 中间模型
		.model-img image {
			position: absolute;
			top: 0;
			left: 50%;
			margin-left: -92rpx;
			width: 92rpx*2;
			height: 233rpx*2;
		}

		// 底部盒子
		.but-box {
			position: absolute;
			top: 270rpx*2;
			left: 50%;
			margin-left: -120rpx;
			padding: 8rpx*2 0 8rpx*2 10rpx*2;
			width: 106rpx*2;
			font-size: 10rpx*2 !important;
			border: 2rpx solid #cccccc;
			border-radius: 20rpx;

			&::after {
				position: absolute;
				top: -16rpx;
				right: 103rpx;
				content: "";
				width: 20rpx;
				height: 20rpx;
				border-right: 3rpx solid #cccccc;
				border-bottom: 3rpx solid #cccccc;
				background-color: #FFFFFF;
				transform: rotate(-137deg) skew(20deg, 30deg) !important;
			}
		}
	}
</style>
