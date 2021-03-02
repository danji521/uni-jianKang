<template>
	<view class="amusing">
		<view class="rewards">
			<view class="rewards-coins">
				<image src="../../static/rewards-coins.png" mode=""></image>
				<view>
					<view>赚健康币</view>
					<view>每天最多赚200元</view>
				</view>
			</view>
			<view class="rewards-money">
				<image src="../../static/rewards-money.png" mode=""></image>
				<view>
					<view>赚赏金</view>
					<view>和好友一起打卡</view>
				</view>
				<view class="rewards-money_hint">￥30</view>
			</view>
		</view>
		<view class="containers1" v-for="(item,i) in activityData" :key="i">
			<view class="containers1-tags">
				活动
			</view>
			<view class="containers1-users">
				<view class="containers1-users-ul">
					<image :src="item.avatarImg" mode="" v-for="(item,i) in item.users" :key="i"></image>
				</view>
				<view>303人已参与</view>
			</view>
			<view class="containers1-plans">
				{{item.target}}
			</view>
			<view class="containers1-rewards">
				{{item.explain}}
			</view>
			<view class="containers1-but"></view>
		</view>
	</view>
</template>

<script>
	import http from "../../utile/http.js"
	export default {
		data() {
			return {
				activityData: {}
			}
		},
		created() {
			this.getAmusingActivity()
		},
		methods: {
			getAmusingActivity() {
				http.getAmusingActivity().then(res => {
					console.log(res)
					this.activityData = res.result.data;
				})
			}
		}
	}
</script>

<style lang="less">
	.amusing {
		padding: 20rpx*2;
	}

	// 健康币
	.rewards {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		height: 67rpx*2;
		border-radius: 20rpx;
		background-color: #fde8e3;
		box-sizing: border-box;

		.rewards-coins,
		.rewards-money {
			display: flex;
			align-items: center;
			width: 50%;
			height: 100%;
			font-size: 20rpx;
			color: #99908b;
			z-index: 1;

			& :nth-child(1) {
				font-size: 16rpx*2;
				color: #000000;
			}

			.rewards-money_hint {
				position: absolute;
				top: 13rpx*2;
				right: 40rpx*2;
				line-height: 15rpx*2;
				padding: 0 4rpx*2;
				color: #fe6470;
				font-size: 18rpx;
				background-color: #fcf26e;
				border-radius: 8rpx;
				z-index: -1;

				&::after {
					display: block;
					position: absolute;
					top: 10rpx;
					left: -6rpx;
					content: "";
					width: 8rpx;
					height: 8rpx;
					background-color: #fcf26e;
					transform: rotate(-45deg);

				}
			}

		}

		.rewards-coins {
			margin-right: 20rpx*2;
			border-right: 2rpx solid #f8e4dd;
		}

		image {
			margin-right: 12rpx*2;
			width: 27rpx*2;
			height: 27rpx*2;
		}
	}

	// 活动
	.containers1 {
		position: relative;
		margin-top: 17rpx*2;
		padding: 0 15rpx*2;
		height: 156rpx*2;
		border: 3rpx solid #f7f7f7;
		border-radius: 20rpx;
		overflow: hidden;

		.containers1-users {
			display: flex;
			align-items: center;
			margin-top: 15rpx*2;
			font-size: 12rpx*2;
			color: #bebdc2;

			image {
				margin-right: 10rpx*2;
				width: 27rpx*2;
				height: 27rpx*2;
				border-radius: 50%;
				vertical-align: bottom;
			}
			.containers1-users-ul{
				width: 370rpx;
				height: 60rpx;
				overflow: hidden;
			}
		}

		.containers1-plans {
			margin-top: 21rpx*2;
			line-height: 17rpx*2;
			font-size: 17rpx*2;
		}

		.containers1-rewards {
			margin-top: 11rpx*2;
			line-height: 11rpx*2;
			font-size: 11rpx*2;
			color: #acabb0;
		}

		.containers1-tags {
			position: absolute;
			right: 0;
			top: 15rpx*2;
			width: 40rpx*2;
			line-height: 22rpx*2;
			font-size: 20rpx;
			background-color: #f4f5f7;
			text-align: center;
			border-bottom-left-radius: 13rpx*2;
			border-top-left-radius: 13rpx*2;
		}

		.containers1-but {
			position: absolute;
			margin-top: 5rpx*2;
			right: 21rpx*2;
			width: 35rpx*2;
			height: 35rpx*2;
			border-radius: 50%;
			border: 2rpx solid #C8C7CC;
			background: url(../../static/containers1-but.png) no-repeat;
			background-size: 100% 100%;
			z-index: 1;
		}

		&::after {
			position: absolute;
			left: 0rpx;
			bottom: -48rpx;
			display: block;
			content: "";
			width: 105%;
			height: 50*2rpx;
			background-color: #ddf1f8;
			border-top-right-radius: 80rpx;
			transform: rotate(-6deg);
		}
	}
</style>
