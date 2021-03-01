<template>
	<view class="planDetails">
		<view class="header">
			<view>肉食挚爱</view>
			<view></view>
			<view>想要大口吃肉又想急速瘦身</view>
			<view>减重机构，健身房超流行的瘦身方案</view>
			<view>击溃内脏脂肪的高效饮食方法</view>
			<view>无数研究证明快速降低腰围的饮食方案</view>
		</view>
		<view class="nav">
			<view class="nav-li">
				<view>
					长期减重效果
				</view>
				<htz-rate v-model="ceshi1" :size="35"></htz-rate>
			</view>
			<view class="nav-li">
				<view>实操容易度</view>
				<htz-rate v-model="ceshi1" :size="35"></htz-rate>
			</view>
			<view class="nav-li">
				<view>短期减重效果</view>
				<htz-rate v-model="ceshi1" :size="35"></htz-rate>
			</view>
		</view>
		<view class="main">
			<!-- 3-5天计划 -->
			<view class="plan">
				<view class="plan-hd">
					<view>3-5(28天)</view>
					<view>1133</view>
				</view>
				<view class="plan-bd">
					<view>预计减重(斤)</view>
					<view>使用人数</view>
				</view>
			</view>
			<!-- 用户人数 -->
			<view class="users">
				<view class="users-imgs">
					<image src="../../static/food-meal.png" mode="" v-for="(item,i) in 5" :key="i"></image>
				</view>
				<view class="users-txt">25人在使用</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<view>适合这样的你</view>
			<view>腰围过大的人群(男>90cm,女>85cm)</view>
			<view>需要减掉内脏脂肪的人群</view>
			<view>各类蛋白质耐受良好</view>
			<view>接受肉食,对主食缺少无法抗拒人群</view>
		</view>
	</view>
</template>

<script>
	import htzRate from '@/components/htz-rate/htz-rate.vue'
	export default {
		components: {
			htzRate
		},
		data() {
			return {
				ceshi1: 4
			};
		},
		methods: {}
	}
</script>

<style lang="less">
	.planDetails {
		padding-bottom: 20rpx*2;
	}

	.header {
		position: relative;
		width: 100%;
		height: 208rpx*2;
		text-align: center;
		font-size: 13rpx*2;
		color: #FFFFFF;
		box-sizing: border-box;
		background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);

		& :nth-child(1) {
			padding-top: 33rpx*2;
			font-size: 20rpx*2;
		}

		& :nth-child(2) {
			position: relative;
			margin: 13rpx*2 auto;
			width: 0;
			height: 0;
			border-left: 15rpx solid transparent;
			border-right: 15rpx solid transparent;
			border-top: 20rpx solid #e6ed9f;
		}

		& :nth-child(2)::after {
			position: absolute;
			content: "";
			bottom: 0rpx;
			left: 10rpx*2;
			width: 0;
			height: 0;
			border-left: 15rpx solid transparent;
			border-right: 15rpx solid transparent;
			border-top: 20rpx solid #e6ed9f;
		}

		& :nth-child(2)::before {
			position: absolute;
			content: "";
			bottom: 0rpx;
			right: 10rpx*2;
			width: 0;
			height: 0;
			border-left: 15rpx solid transparent;
			border-right: 15rpx solid transparent;
			border-top: 20rpx solid #e6ed9f;
		}

		// 波浪
		&::after {
			position: absolute;
			bottom: 0;
			content: "";
			display: block;
			width: 100%;
			height: 30rpx*2;
			background: url(../../static/wave1.png) no-repeat;
			background-size: 100% 100%;
			animation: mymove 6s steps(8) infinite
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

	// 导航
	.nav {
		margin: 0 25rpx*2;
		margin-top: 10rpx*2;
		height: 98rpx*2;
		font-size: 10rpx*2;
		padding-left: 53rpx*2;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border: 2rpx solid #C0C0C0;
		box-sizing: border-box;

		.nav-li {
			display: flex;

			view {
				margin-top: 10rpx*2;
			}
			& view:nth-child(1){
				width: 80rpx*2;
			}
		}
	}

	// 3-5天计划
	.plan {
		margin: 0 25rpx*2;
		margin-top: 33rpx*2;
		height: 94rpx*2;
		border-radius: 20rpx;
		box-sizing: border-box;
		border: 2rpx solid #C0C0C0;

		.plan-hd,
		.plan-bd {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 50rpx*2;
		}

		.plan-hd {
			padding-top: 20rpx*2;
			font-size: 20rpx*2;
		}

		.plan-bd {
			margin-top: 15rpx*2;
			font-size: 10rpx*2;
			color: #a4a4a4;
		}
	}

	// 用户列表
	.users {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15rpx*2;
		padding-left: 50rpx;
		margin-top: 17rpx*2;
		font-size: 12rpx*2;

		.users-imgs image {
			margin-left: -10rpx;
			width: 30rpx*2;
			height: 30rpx*2;
			border-radius: 50%;
			overflow: hidden;
		}
	}

	// 底部
	.footer {
		padding: 0 20rpx*2;
		height: 185rpx*2;
		margin: 15rpx*2;
		font-size: 14rpx*2;
		background: url(../../static/planDetails.png) no-repeat;
		background-size: 100% 100%;
		border-radius: 20rpx;
		box-sizing: border-box;

		view {
			margin-top: 10rpx*2;
		}

		& :nth-child(1) {
			padding-top: 17rpx*2;
			font-size: 20rpx*2;
			color: #f68f62;
		}
	}
</style>
