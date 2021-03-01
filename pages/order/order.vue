<template>
	<view class="order">
		<view class="address">请选择收货地址</view>
		<view class="products">
			<image src="../../static/wares.png" mode=""></image>
			<view class="title">
				<view>数量:1</view>
				<view>73食盒</view>
				<view>规格:1个月(饼干32包纤维粉16包)</view>
				<view>￥599.00</view>
			</view>
		</view>
		<view class="message">
			<view>买家留言:</view>
			<textarea value="" placeholder="填写留言比如颜色等" />
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
	.order {
		position: relative;
		height: 100vh;
		font-size: 14rpx*2;
		background-color: #fafafa;
		border-top: 20rpx solid transparent;
		border-image: url(../../static/border.png)  repeat;
	}
	.address {
		padding: 18rpx*2 15rpx*2;
		background-color: #FFFFFF;
	}

	.products {
		display: flex;
		margin-top: 12rpx*2;
		padding: 18rpx*2 15rpx*2;
		height: 102rpx*2;
		background-color: #FFFFFF;
		image{
			width: 63rpx*2;
			height: 63rpx*2;
		}
		.title{
			font-size: 15rpx*2;
			& :nth-child(1){
				position: absolute;
				right: 20rpx;
				color: #b5b5b5;
			}
			& :nth-child(2){
				margin-top: 10rpx;
				font-size: 10rpx*2;
				color: #b5b5b5;
			}
			& :nth-child(3){
				margin-top: 10rpx;
				color: #fb683c;
			}
		}
	}

	.message {
		margin-top: 12rpx*2;
		padding: 12rpx*2 15rpx*2;
		font-size: 12rpx*2;
		background-color: #FFFFFF;
		textarea{
			font-size: 12rpx*2;
		}
	}
</style>
