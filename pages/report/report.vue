<template>
	<view class="report">
		<view class="header">
			<view class="o-round"></view>
			<view class="w-round">
				<view>健康</view>
				<view>86</view>
				<view>评估于2019.05.10</view>
			</view>
		</view>
		<view class="nav">
			身体指数
		</view>
		<view class="weight">
			<view class="weight-hd">
				<view>体重</view>
				<view>75kg</view>
			</view>
			<view class="weight-bd">
				<image src="../../static/lower.png" mode=""></image>
				<text class="large">0.00kg</text>
				(2019.05.30-2019.05.30)
			</view>
		</view>
		<view class="bmi">
			<view class="bmi-title">MBI</view>
			<view class="bmi-surface">
				<view>过轻</view>
				<view>18.5正常</view>
				<view>24超重</view>
				<view>28肥胖</view>
			</view>
			<view class="bmi-result">属于正常范围</view>
		</view>
		<view class="the-waist">
			<view>腰围</view>
			<view>正常</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.header {
		position: relative;
		height: 208rpx*2;
		background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);

		// 外圆
		.o-round {
			position: absolute;
			left: 50%;
			top: 20rpx*2;
			margin-left: -184rpx;
			width: 184rpx*2;
			height: 184rpx*2;
			text-align: center;
			border-radius: 50%;
			border: 10rpx solid #65e5cc;

			&::after {
				content: "";
				display: block;
				position: absolute;
				left: -4px;
				top: -4px;
				width: 157px;
				height: 157px;
				text-align: center;
				border-radius: 50%;
				border: 4px solid #FFFFFF;
				border-bottom: 0px;
			}
		}

		// 内圆
		.w-round {
			position: relative;
			top: 40rpx*2;
			left: 50%;
			margin-left: -141rpx;
			width: 141rpx*2;
			height: 141rpx*2;
			text-align: center;
			border-radius: 50%;
			border: 10rpx dotted #FFFFFF;
			z-index: 1;

			& :nth-child(1) {
				padding-top: 23rpx*2;
				font-size: 17rpx*2;
				color: #FFFFFF;
			}

			& :nth-child(2) {
				padding-top: 20rpx*2;
				font-size: 33rpx*2;
				color: #fffa98;
			}

			& :nth-child(3) {
				position: relative;
				left: -13rpx;
				padding-bottom: 25rpx;
				width: 150rpx*2;
				height: 26rpx*2;
				font-size: 10rpx*2;
				color: #FFFFFF;
				background-color: #1fd9a5;
				z-index: 10;
			}
		}

		// 波浪
		&::after {
			position: absolute;
			bottom: -13rpx;
			content: "";
			display: block;
			width: 100%;
			height: 35rpx*2;
			background: url(../../static/wave1.png) no-repeat;
			background-size: 100% 100%;
			animation: mymove 5s steps(8) infinite;
			z-index: 5;
		}
	}

	@keyframes mymove {
		0% {
			background: url(../../static/wave1.png) no-repeat;
			background-size: 100% 100%;
		}

		100% {
			background: url(../../static/wave2.png) no-repeat;
			background-size: 100% 100%;
		}
	}

	.nav {
		margin: 0 20rpx*2;
		margin-top: 10rpx*2;
		padding-left: 12rpx*2;
		line-height: 57rpx*2;
		font-size: 20rpx*2;
		color: #0bc1b5;
		border-radius: 20rpx 20rpx 0 0;
		background-color: #d4f4f1;
	}




	.weight {
		margin-top: 30rpx*2;
		padding: 0 30rpx*2;
		height: 51rpx*2;

		.weight-hd {
			display: flex;
			height: 20rpx*2;
			font-size: 12rpx*2;

			& :nth-child(1) {
				margin-top: 10rpx*2;
			}

			& :nth-child(2) {
				margin-left: 28rpx*2;
				font-size: 20rpx*2;
			}
		}

		.weight-bd {
			padding-left: 35rpx*2;
			margin-top: 20rpx*2;
			font-size: 10rpx*2;

			image {
				width: 20rpx;
				height: 20rpx;
			}

			.large {
				margin-right: 7rpx*2;
				font-size: 23rpx*2;
				color: #00d1ad;
			}
		}
	}

	.bmi {
		margin-top: 40rpx*2;
		padding: 0 30rpx*2;
		font-size: 10rpx*2;

		.bmi-title {
			font-weight: 600;
		}

		.bmi-surface {
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: relative;
			margin-top: 30rpx*2;
			height: 11rpx*2;
			background: url(../../static/speed.png) no-repeat;
			background-size: 100% 100%;

			view {
				margin-top: 30rpx*2;
				font-size: 10rpx*2;
				color: #999999;
			}

			&::after {
				content: "23.2";
				display: block;
				position: absolute;
				bottom: 40rpx;
				left: 30%;
				width: 40rpx*2;
				line-height: 20rpx*2;
				text-align: center;
				color: #FFFFFF;
				border-radius: 10rpx;
				background-color: #00ba7f;
			}

			&::before {
				content: "";
				display: block;
				position: absolute;
				top: -20rpx;
				left: 30%;
				margin-left: 30rpx;
				width: 0;
				height: 0;
				border-left: 6rpx solid transparent;
				border-right: 6rpx solid transparent;
				border-top: 15rpx solid #00ba7f;
			}
		}

		.bmi-result {
			margin-top: 30rpx*2;
			padding: 0 12px*2;
			line-height: 30rpx*2;
			color: #d6d7db;
			background-color: #f4f8fb;
			border-radius: 10rpx;
		}
	}

	.the-waist {
		margin-top: 53rpx*2;
		padding-left: 30rpx*2;
		padding-bottom: 50rpx*2;
		height: 63rpx*2;
		font-size: 15rpx*2;

		& :nth-child(2) {
			margin-top: 17rpx*2;
			width: 63rpx*2;
			line-height: 33rpx*2;
			text-align: center;
			color: #10ceac;
			border-radius: 20rpx;
			background-color: #d6f3ef;
		}
	}
</style>
