<template>
	<view class="details">
		<view class="header">
			<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(itm,i) in 3" :key="i">
					<image src="../../static/wares.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="nav">
			<view class="nav-hd">
				<view>73食盒</view>
				<view>599.00</view>
			</view>
			<view class="nav-bd">
				一周内4餐，改善饮食结构，全营养配方，符合国人体质，养成健康习惯
			</view>
		</view>
		<view class="main">
			<view class="list-img">
				<image src="../../static/introduce1.png" mode=""></image>
				<image src="../../static/introduce2.png" mode=""></image>
			</view>
		</view>
		<view class="footer">
			<view class="consult">
				<image src="../../static/balance.png" mode=""></image>
				我要咨询
			</view>
			<view class="bu-order">马上下单</view>
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
	.header {
		height: 187rpx*2;

		image,
		swiper {
			width: 100%;
			height: 100%;
		}

	}

	.nav {
		padding: 0 17rpx*2;

		.nav-hd {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 23rpx*2;
			font-size: 16rpx*2;
			font-weight: 600;

			& :nth-child(1) {
				color: #000000;
			}

			& :nth-child(2) {
				position: relative;
				color: #f5582b !important;
			}

			& :nth-child(2)::after {
				content: "￥";
				display: block;
				position: absolute;
				bottom: 0;
				left: -35rpx;
				font-size: 20rpx;
				color: #f5582b !important;
			}
		}

		.nav-bd {
			margin-top: 17rpx*2;
			font-size: 13rpx*2;
			color: #e6e6e8;
		}
	}

	.main {
		margin-top: 28rpx*2;

		image {
			width: 100%;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;

		.consult {
			float: left;
			padding-top: 10rpx;
			width: 30%;
			text-align: center;
			background-color: #FFFFFF;

			image {
				display: block;
				margin: 0 auto;
				width: 22rpx*2;
				height: 22rpx*2;
			}
		}

		.bu-order {
			float: left;
			width: 70%;
			line-height: 51rpx*2;
			color: #FFFFFF;
			font-size: 17rpx*2;
			text-align: center;
			background-color: #ee856f;
		}
	}
</style>
