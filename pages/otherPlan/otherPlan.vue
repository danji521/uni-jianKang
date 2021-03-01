<template>
	<view class="otherPlan">
		<view class="emotion">
			<view class="emotion-look">
				<image src="../../static/food-meal.png" mode=""></image>
				<view>觉得自己情绪波多大?</view>
			</view>
			<view class="emotion-reset">测试</view>
		</view>
		<view class="nav">
			<view class="tab-hd">
				<view :class="[navIndex==1?'activ':'']" @click="navIndexState(1)">减肥</view>
				<view :class="[navIndex==2?'activ':'']" @click="navIndexState(2)">降血压</view>
				<view :class="[navIndex==3?'activ':'']" @click="navIndexState(3)">控血糖</view>
			</view>
			<view class="tab-bd">
				<view class="tab-bd-list" v-for="(item,i) in 3" :key="i">
					<view>饱腹慢慢</view>
					<view>607人使用 适宜人群:不饱不开心饥饿感强</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 1
			};
		},
		methods: {
			navIndexState(navIndex) {
				this.navIndex = navIndex;
			}
		}
	}
</script>

<style lang="less">
	.emotion {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 34rpx*2;
		margin-top: 27rpx*2;
		height: 44rpx*2;
		border-radius: 20rpx;
		border: 2rpx solid #C8C7CC;

		.emotion-look {
			display: flex;
			align-items: center;

			image {
				position: relative;
				top: 0rpx;
				left: -14rpx;
				margin-right: 10rpx;
				width: 50rpx*2;
				height: 50rpx*2;
				border-radius: 50%;
				overflow: hidden;
			}
		}

		.emotion-reset {
			margin-right: 10rpx*2;
			width: 38rpx*2;
			line-height: 24rpx*2;
			text-align: center;
			color: #FFFFFF;
			font-size: 10rpx*2;
			background-color: #04cfbc;
			border-radius: 20rpx;
		}
	}

	.nav {
		.tab-hd {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 16rpx*2;
			font-size: 18rpx*2;
			color: #a6a4a9;
			margin-top: 30rpx*2;

			.activ {
				position: relative;

				&::after {
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					margin-left: -25rpx;
					content: "";
					width: 50rpx;
					height: 10rpx;
					color: red;
					background-color: red;
				}
			}
		}

		.tab-bd-list {
			margin: 20rpx*2;
			padding-left: 18rpx*2;
			height: 77rpx*2;
			border-radius: 20rpx;
			background: url(../../static/tabback.png) no-repeat;
			background-size: 100% 100%;
			border: 2rpx solid #cccccc;
			box-sizing: border-box;
			& :nth-child(1) {
				padding-top: 20rpx*2;
				font-size: 16rpx*2;
				font-weight: 600;
			}

			& :nth-child(2) {
				margin-top: 10rpx*2;
				font-size: 10rpx*2;
				color: #c4c4c6;
			}
		}
	}
</style>
