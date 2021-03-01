<template>
	<view class="better">
		<view class="header">
			<view class="weight">
				<view class="weight-txt">最新体重</view>
				<view class="weight-number">
					<view>75</view>
					<view @click="upWeightON()"></view>
				</view>
				<view class="weight-speed"></view>
				<view class="weight-target">
					<view>14天减去75kg</view>
					<view>距离目标还有1kg</view>
				</view>
			</view>
			<!-- 最新体重 -->
			<view class="up-weight" v-if="upWeight">
				<view class="box">
					<view>当前体重是?</view>
					<view>建议起床之后测量体重</view>
					<input type="digit" value="" placeholder="**" />
					<view @click="upWeightON()">确定</view>
				</view>
			</view>
		</view>
		<view class="main">
			<!-- 食谱 -->
			<view class="recipes">
				<view class="recipes-title">
					<view>【肉食挚爱】进行中</view>
					<view>14天</view>
				</view>
				<view class="recipes-tips">
					<view>第2天:&nbsp;&nbsp;&nbsp;不放弃一点机会</view>
					<navigator url="../service/service">
						<view>服务提醒</view>
					</navigator>
				</view>
				<view class="recipes-lunch">
					<view>午餐(12:00-13:00)</view>
					<view></view>
				</view>
				<view class="recipes-food">
					<swiper class="swiper" :indicator-dots="true" :indicator-active-color="'#00d0ad'" :indicator-color="'#e5e5e5'">
						<swiper-item v-for="(item,i) in 4" :key="i">
							<view class="swiper-item-li" v-for="(item,i) in 4" :key="i">
								<view class="swiper-item-li-class">主食</view>
								<view class="swiper-item-li-meal">
									<image src="../../static/food-meal.png" mode=""></image>
									<view>
										<view>杂粮饭</view>
										<view>一碗米饭(直径10cm碗)</view>
									</view>
								</view>
								<view class="swiper-item-li-replace"></view>
							</view>
						</swiper-item>
					</swiper>
					<view class="recipes-food-more">
						更多>
					</view>
				</view>
			</view>
			<!-- 运动 -->
			<view class="motion">
				<view class="motion-border">
					<view class="motion-title">运动</view>
					<view class="motion-number">
						<view class="steps">
							<view>今日步数92步</view>
							<view>目标步数10000步</view>
						</view>
						<view class="speed">
						</view>
					</view>
					<view class="motion-vitality">
						<view class="left">
							<view>活力NEAT</view>
							<view>已完成 <view> 0/8</view>个</view>
						</view>
						<view class="right"></view>
					</view>
					<view class="motion-relax">
						<view class="left">
							<view>活力NEAT</view>
							<view>已完成 <view> 0/8</view>个</view>
						</view>
						<view class="right"></view>
					</view>
				</view>
				<view class="motion-way">
					<navigator url="../planDetails/planDetails">
						<view>方案详情</view>
					</navigator>
					<navigator url="../otherPlan/otherPlan">
						<view>其他方案</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="footer">
			<!-- 小工具 -->
			<view class="title">
				<view>小工具</view>
				<view>全部</view>
			</view>
			<view class="container">
				<navigator url="../model/model">
					<view class="container-model"></view>
				</navigator>
				<view>
					<view class="container-about"></view>
					<view class="container-circles"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				upWeight: false
			}
		},
		methods: {
			upWeightON() {
				this.upWeight = !this.upWeight;
			}
		}
	}
</script>

<style lang="less">
	.better {
		width: 100%;
		overflow: hidden;
	}

	.header {
		position: relative;
		left: -30%;
		top: 0;
		width: 160%;
		height: 171rpx*2;
		background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);
		border-radius: 0 0 50% 50%;
	}

	.header .weight {
		position: absolute;
		top: 26rpx*2;
		left: 50%;
		padding: 0 15rpx*2;
		margin-left: -264rpx;
		width: 264rpx*2;
		height: 146rpx*2;
		background-color: #ffffff;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		box-sizing: border-box;

		.weight-txt {
			margin-top: 17rpx*2;
			height: 11rpx*2;
			color: #adadad;
			font-size: 22rpx;
		}

		.weight-number {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 14rpx*2;
			height: 35rpx*2;

			& :nth-child(1) {
				position: relative;
				font-size: 70rpx;
				color: #413d4b;
			}

			& :nth-child(1)::after {
				position: absolute;
				top: 46rpx;
				left: 90rpx;
				display: block;
				content: "kg";
				color: #413d4b;
				font-size: 24rpx;
				font-weight: 600;
			}

			& :nth-child(2) {
				position: relative;
				width: 28rpx*2;
				height: 28rpx*2;
				border-radius: 50%;
				background: url(../../static/add.png) no-repeat;
				background-size: 100% 100%;
			}
		}

		.weight-speed {
			position: relative;
			margin-top: 15rpx*2;
			height: 7rpx*2;
			border-radius: 20rpx;
			background-color: #e7e7e7;

			&::after {
				position: absolute;
				content: "";
				display: block;
				width: 30%;
				height: 7rpx*2;
				background-color: #2edea0;
				border-radius: 20rpx;
			}
		}

		.weight-target {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 13rpx*2;
			height: 14rpx*2;
			font-size: 28rpx;
			color: #413d4b;
		}

	}

	// 设置体重
	.header .up-weight {
		position: fixed;
		width: inherit;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		z-index: 6;

		.box {
			position: fixed;
			left: 50%;
			top: 43vh;
			margin-top: -279rpx;
			margin-left: -237rpx;
			width: 237rpx*2;
			height: 279rpx*2;
			// text-align: center;
			padding-left: 63rpx*2;
			background-color: #FFFFFF;
			border-radius: 25rpx;
			box-sizing: border-box;
		}

		.box view:nth-child(1) {
			margin-top: 38rpx*2;
			line-height: 21rpx*2;
			font-size: 21rpx*2;
			font-weight: 600;
			color: #000000;
		}

		.box view:nth-child(2) {
			position: relative;
			margin-top: 14rpx*2;
			line-height: 12rpx*2;
			font-size: 12rpx*2;
			color: #cbcbcd;
		}

		.box view:nth-child(2)::after {
			position: absolute;
			content: "kg";
			display: block;
			top: 115rpx;
			right: 110rpx;
			font-size: 30rpx;
			color: #000000;
		}

		.box input {

			margin-top: 33rpx*2;
			width: 93rpx*2;
			height: 42rpx*2;
			font-size: 19rpx*2;
			text-align: center;
			color: #000000;
			background-color: #eaebef;
		}

		.box view:nth-child(4) {
			margin-top: 60rpx*2;
			width: 113rpx*2;
			line-height: 39rpx*2;
			font-size: 15rpx*2;
			text-align: center;
			color: #FFFFFF;
			background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);
			border-radius: 33rpx;
		}
	}

	.main {
		padding: 0 30rpx*2;
	}

	// 食谱
	.recipes {
		.recipes-title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 49rpx*2;
			height: 21rpx*2;
			font-size: 42rpx;

			& :nth-child(2) {
				margin-left: 10rpx;
				text-align: center;
				width: 40rpx*2;
				line-height: 21rpx*2;
				background-color: #d2f6f4;
				border-radius: 30rpx;
				color: #19d2a8;
				font-size: 24rpx;
			}
		}

		.recipes-tips {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30rpx*2;
			height: 26rpx*2;
			font-size: 22rpx;
			color: #999999;

			& :nth-child(2) {
				margin-left: 10rpx;
				text-align: center;
				width: 73rpx*2;
				line-height: 27rpx*2;
				background-color: #13d1a3;
				border-radius: 30rpx;
				color: #FFFFFF;
				font-size: 22rpx;
			}
		}

		.recipes-lunch {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 18rpx*2;
			margin-top: 32rpx*2;
			height: 29rpx*2;
			font-size: 16rpx*2;
			box-shadow: 2rpx 2rpx 6rpx #c0c0c0;

			& :nth-child(2) {
				position: relative;
				width: 28rpx*2;
				height: 28rpx*2;
				border-radius: 50%;
				background: url(../../static/add.png) no-repeat;
				background-size: 100% 100%;
			}
		}

		.recipes-food {
			position: relative;
			margin-top: 9rpx*2;
			height: 257rpx*2;
			box-shadow: 2rpx 2rpx 6rpx #c0c0c0;

			.swiper {
				height: 100%;
			}

			.swiper-item-li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20rpx*2;
				margin-top: 14rpx*2;
			}

			.swiper-item-li-class {
				font-size: 17rpx*2;
			}

			.swiper-item-li-meal {
				display: flex;

				image {
					margin-right: 15rpx*2;
					width: 40rpx*2;
					height: 40rpx*2;
					border-radius: 10rpx;
				}
			}

			.swiper-item-li-meal :nth-child(1) {
				font-size: 13rpx*2;
				color: #000000;
			}

			.swiper-item-li-meal :nth-child(2) {
				font-size: 10rpx*2;
				color: #a9a9a9;
			}

			.swiper-item-li-replace {
				width: 13rpx*2;
				height: 13rpx*2;
				background: url(../../static/food-replace.png) no-repeat;
				background-size: 100% 100%;
			}

			.recipes-food-more {
				position: absolute;
				bottom: 10rpx;
				right: 35rpx;
				color: #06d1be;
				font-size: 24rpx;
			}
		}
	}

	// 运动
	.motion {
		margin-top: 24rpx*2;

		.motion-border {
			box-shadow: 2rpx 2rpx 6rpx #c0c0c0;
		}

		.motion-title {
			padding: 0 13rpx*2;
			line-height: 47rpx*2;
			font-size: 17rpx*2;
			border-bottom: 2rpx solid #C8C7CC;
		}

		.motion-number {
			margin: 30rpx*2 13rpx*2 0 13rpx*2;
			height: 25rpx*2;


			.steps {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 9rpx*2;
				line-height: 18rpx;
			}

			.speed {
				position: relative;
				top: 7rpx*2;
				height: 6rpx*2;
				border-radius: 10px;
				background-color: #ebebeb;
			}

			.speed::after {
				position: absolute;
				content: "";
				display: block;
				width: 30%;
				height: 6rpx*2;
				background-color: #fb714d;
				border-radius: 10px;
			}



		}

		.motion-vitality,
		.motion-relax {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 13rpx*2;
			margin-top: 20rpx*2;
			padding: 20rpx*2 0;
			height: 31rpx*2;
			border-bottom: 2rpx solid #ececec;



			.left :nth-child(1) {
				color: #000000;
				font-size: 11rpx*2;
				line-height: 22rpx;
			}

			.left :nth-child(2) {
				margin-top: 22rpx;
				color: #a0a0a0;
				font-size: 8rpx*2;
				line-height: 8rpx;
			}

			.left view {
				display: flex;
				align-items: center;
				line-height: 23rpx !important;
				font-weight: 600;
				color: #000000;
			}

			.right {
				position: relative;
				width: 28px;
				height: 28px;
				border-radius: 50%;
				background: url(../../static/add.png) no-repeat;
				background-size: 100% 100%;
			}
		}

		.motion-relax {
			margin: 0 13rpx*2;
			padding: 20rpx*2 0;
			height: 31rpx*2;
		}

		.motion-way {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 18rpx*2;
			height: 22rpx*2;

			view {
				width: 60rpx*2;
				line-height: 22rpx*2;
				text-align: center;
				font-size: 20rpx;
				color: #0acdad;
				background-color: #d3f3ee;
				border-radius: 20rpx;
			}
		}
	}

	// 小工具
	.footer {
		padding: 0 20rpx*2 40rpx 20rpx*2;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 48rpx*2;
			line-height: 16rpx*2;
			font-size: 16rpx*2;

			:nth-child(2) {
				line-height: 12rpx*2;
				color: #4fdcd3;
				font-size: 12rpx*2;
			}
		}

		.container {
			display: flex;
			justify-content: space-between;
			// align-items: center;
			margin-top: 12rpx*2;
			height: 203rpx*2;
		}

		.container-model {
			width: 155rpx*2;
			height: 201rpx*2;
			background-color: #cccccc;
			border-radius: 20rpx;
			background: url(../../static/model.png) no-repeat;
			background-size: 100% 100%;
		}

		.container-about,
		.container-circles {
			width: 140rpx*2;
			height: 97rpx*2;
			background-color: red;
			border-radius: 20rpx;
			background: url(../../static/about.jpg) no-repeat;
			background-size: 100% 100%;
		}

		.container-circles {
			margin-top: 20rpx;
			border-radius: 20rpx;
			background: url(../../static/circles.png) no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
