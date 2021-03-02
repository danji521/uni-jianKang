<template>
	<view class="my">
		<view class="header">
			<image src="../../static/food-meal.png" mode="" class="logo"></image>
			<view class="phone">
				<view>{{usersData.name}}</view>
				<view>认证手机号</view>
			</view>
			<view class="gender">
				<view>
					<image src="../../static/gender.png" mode=""></image>
					性别 {{usersData.gender}}
				</view>
				<view>
					<image src="../../static/height.png" mode=""></image>
					升高 {{usersData.height}}cm
				</view>
			</view>
			<view class="birthday">
				<view>
					<image src="../../static/birthday.png" mode=""></image>
					生日 {{usersData.birthday}}
				</view>
				<view>
					<image src="../../static/position.png" mode=""></image>
					位置&nbsp;&nbsp;{{usersData.place}}
				</view>
			</view>
		</view>
		<view class="nav">
			<navigator url="../report/report" class="report">
				<view>{{usersData.healthy}}</view>
				<view>健康报告</view>
			</navigator>
			<view class="scheme">
				<view>
					<image src="../../static/scheme.png" mode=""></image>
				</view>
				<view>历史方案</view>
			</view>
			<view class="diet">
				<view>
					<image src="../../static/diet.png" mode=""></image>
				</view>
				<view>饮食记录</view>
			</view>
			<view class="motion">
				<navigator url="../motion/motion">
					<view>
						<image src="../../static/motion.png" mode=""></image>
					</view>
					<view>运动记录</view>
				</navigator>
			</view>
		</view>
		<view class="main">
			<!-- 人体模型 -->
			<view class="human">
				<image src="../../static/human.png" mode=""></image>
				<view class="human-weight">体重正常</view>
				<view class="human-roughage">适当粗粮摄入</view>
			</view>
			<!-- 选项 -->
			<view class="human-tab">
				<view class="weight">
					<view>体重</view>
					<view>{{usersData.weight}}</view>
				</view>
				<view class="waist">
					<view>腰围</view>
					<view>{{usersData.waist}}</view>
				</view>
				<view class="hipline">
					<view>臀围</view>
					<view>{{usersData.waist}}</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="li li-one">
				<view>{{usersData.gold}}</view>
				<view>健康币</view>
			</view>
			<view class="li">
				<navigator url="../month/month">
					<view>
						<image src="../../static/balance.png" mode=""></image>
					</view>
					<view>
						可用零钱
					</view>
				</navigator>
			</view>
			<view class="li">
				<!-- <navigator url="../shopping/shopping"> -->
				<view>
					<image src="../../static/shopping.png" mode=""></image>
				</view>
				<view>
					商城
				</view>
				<!-- </navigator> -->
			</view>
			<view class="li">
				<view>
					<image src="../../static/order.png" mode=""></image>
				</view>
				<view>
					我的订单
				</view>
			</view>
			<view class="li">
				<button type="default" open-type="contact">
					<view>
						<image src="../../static/phone.png" mode=""></image>
					</view>
					<view>
						联系我们
					</view>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import http from "../../utile/http.js"
	export default {
		data() {
			return {
				usersData: {}
			}
		},
		created() {
			this.getMyUsers();
		},
		methods: {
			getMyUsers() {
				http.getMyUsers().then(res => {
					console.log(res)
					this.usersData=res.result.data[0];
				})
			}
		}
	}
</script>

<style lang="less">
	.header {
		position: relative;
		height: 208rpx*2;
		background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);

		.logo {
			position: relative;
			left: 50%;
			top: 20rpx*2;
			margin-left: -35rpx;
			width: 70rpx*2;
			height: 70rpx*2;
			border-radius: 50%;
			border: 2rpx solid #FFFFFF;
		}

		.phone {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 35rpx+10rpx*2;
			line-height: 20rpx*2;
			font-size: 20rpx*2;
			color: #FFFFFF;

			& :nth-child(2) {
				margin-left: 6rpx*2;
				width: 67rpx*2;
				text-align: center;
				line-height: 17rpx*2;
				font-size: 10rpx*2;
				background-color: #FFFFFF;
				color: #1dd7a6;
				border-radius: 15rpx;
			}
		}

		.gender,
		.birthday {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 23rpx*2;
			margin-top: 10rpx*2;
			color: #FFFFFF;
			font-size: 14rpx*2;
			line-height: 14rpx*2;

			image {
				margin-right: 5rpx*2;
				width: 14rpx*2;
				height: 14rpx*2;
				vertical-align: bottom;
			}
		}

		.birthday {
			margin-top: 12rpx*2;
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 74rpx*2;
		border-bottom: 2rpx solid #fafafa;

		image {
			width: 29rpx*2;
			height: 29rpx*2;
		}

		.report,
		.scheme,
		.diet,
		.motion {
			position: relative;
			width: 25%;
			text-align: center;
			font-size: 24rpx;

			& view:nth-child(1) {
				height: 29rpx*2;
				line-height: 29rpx*2;
				border-left: 2rpx solid #a9a9a9;
			}

			& :nth-child(2) {
				margin-top: 14rpx;
			}
		}

		.report :nth-child(1) {
			color: #0bc8b2;
			font-size: 20rpx*2;
			font-weight: 600;
			border-left: 0 !important;

			&::after {
				position: absolute;
				top: 8rpx;
				margin-left: 4rpx;
				content: "分";
				font-size: 20rpx;
				color: #a9a9a9;
			}
		}
	}

	// 人体模型
	.human {
		position: relative;

		image {
			position: relative;
			left: 50%;
			top: 16rpx*2;
			margin-left: -78rpx;
			width: 78rpx*2;
			height: 195rpx*2;
		}

		.human-weight {
			position: absolute;
			top: 120rpx;
			left: 50%;
			margin-left: -120*2rpx;
			padding: 0 14rpx*2;
			line-height: 23rpx*2;
			color: #2adfa8;
			font-size: 24rpx;
			border: 2rpx solid #ededed;
			border-radius: 10rpx;

			&::after {
				position: absolute;
				top: 40rpx;
				right: 20rpx;
				content: "";
				width: 20rpx;
				height: 14rpx;
				border-right: 3rpx solid #ededed;
				border-bottom: 3rpx solid #ededed;
				background-color: #FFFFFF;
				transform: rotate(10deg) skew(20deg, 30deg);
			}
		}

		.human-roughage {
			position: absolute;
			bottom: 2rpx;
			right: 50%;
			margin-right: -260rpx;
			padding: 0 14rpx*2;
			line-height: 23rpx*2;
			color: #2adfa8;
			font-size: 24rpx;
			border: 2rpx solid #ededed;
			border-radius: 10rpx;

			&::after {
				position: absolute;
				top: 37rpx;
				left: 20rpx;
				content: "";
				width: 14rpx;
				height: 20rpx;
				border-right: 3rpx solid #ededed;
				border-bottom: 3rpx solid #ededed;
				background-color: #FFFFFF;
				transform: rotate(70deg) skew(20deg, 30deg);
			}
		}

	}




	// 体重 腰围
	.human-tab {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 26rpx;
		margin-top: 83rpx;
		height: 55rpx*2;

		.weight,
		.waist,
		.hipline {
			position: relative;
			padding: 0 11rpx;
			width: 84rpx*2;
			height: 53rpx*2;
			color: #FFFFFF;
			font-size: 20rpx;
			border-radius: 20rpx;
			box-sizing: border-box;
			background-color: #b5c1cd;

			& view:nth-child(1) {
				margin-top: 14rpx;
				line-height: 20rpx;
			}

			& view:nth-child(2) {
				margin-top: 16rpx;
				line-height: 15rpx*2;
				font-size: 15rpx*2 !important;
				font-weight: 600;
			}
		}

		.weight {
			background-image: linear-gradient(180deg, #ff8077 0%, #fd6685 100%);

			&::after {
				position: absolute;
				bottom: 20rpx;
				margin-left: 40rpx;
				content: "kg";
				font-size: 20rpx;
			}
		}

		.waist {
			&::after {
				position: absolute;
				bottom: 20rpx;
				margin-left: 60rpx;
				content: "cm";
				font-size: 20rpx;
			}
		}
	}

	// 底部
	.footer {
		width: 100%;
		height: 132rpx*2;
		padding-bottom: 15rpx*2;

		.li {
			margin-top: 20rpx*2;
			float: left;
			width: 33.3%;
			text-align: center;
			font-size: 24rpx;
		}

		image {
			position: relative;
			margin: 0 auto;
			width: 18rpx*2;
			height: 18rpx*2;
		}

		.li view:nth-child(1) {
			height: 18rpx*2;
			line-height: 18rpx*2;
		}

		.li view:nth-child(2) {
			margin-top: 14rpx*2;
			height: 11rpx*2;
			line-height: 11rpx*2;
		}

		.li-one view:nth-child(1) {
			color: #f2927c;
			font-size: 16rpx*2;
			font-weight: 600;

			&::after {
				content: "个";
				font-size: 20rpx;
				color: #9b9b9d;
			}
		}

		button {
			position: inherit;
			font-size: 24rpx;
			background-color: #FFFFFF;

			&::after {
				display: none;
			}
		}
	}
</style>
