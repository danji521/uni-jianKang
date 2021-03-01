<template>
	<view class="month">
		<view class="container">
			<image src="../../static/wallet.png" mode=""></image>
			<view class="balance">￥0.00</view>
			<view class="usable-balance">(可提现余额)</view>
			<view class="add-up">累计体现: ￥0.00</view>
		</view>
		<view class="all-up">全部提现</view>
		<view class="new">提现金额必须在<text>￥1</text>以上,且必须将所有可提现余额提出,每天一次</view>
		<view class="water">交易流水></view>
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
	.month {
		height: 100vh;
		background-color: #fafafa;
	}

	.container {
		height: 233rpx*2;
		text-align: center;
		background-color: #FFFFFF;

		image {
			margin-top: 44rpx*2;
			width: 44rpx*2;
			height: 44rpx*2;
		}

		.balance {
			margin-top: 32rpx*2;
			font-size: 32rpx*2;
			color: #f86d4e;
		}

		.usable-balance {
			margin-top: 16rpx*2;
			font-size: 13rpx*2;
			color: #bdbdbd;
		}

		.add-up {
			margin-top: 16rpx*2;
			font-size: 13rpx*2;
			color: #000000;
		}
	}

	.all-up {
		margin-top: 40rpx;
		width: 260rpx*2;
		line-height: 47rpx*2;
		text-align: center;
		color: #FFFFFF;
		font-size: 17rpx*2;
		margin: 0 auto;
		margin-top: 54rpx*2;
		border: 3rpx solid #FFFFFF;
		border-radius: 30rpx;
		background-image: linear-gradient(180deg, #00cfb7 0%, #26dca2 100%);
	}

	.new {
		padding: 0 30rpx;
		margin-top: 30rpx*2;
		font-size: 10rpx*2;
		color: #000000;
		text {
			color: #f3a287;
		}
	}

	.water {

		margin: 0 auto;
		margin-top: 17rpx*2;
		width: 70rpx*2;
		font-size: 14rpx*2;
		color: #f3a287;
	}
</style>
