<template>
	<view class="motion">
		<view class="list" v-for="(i,item) in 4" :key="i">
			<view class="list-hd">2019.05.03</view>
			<view class="list-bd">
				<view>步数: <text class="red">130</text></view>
				<view>NEAT:<text class="red">0个</text></view>
				<view>办公操:<text class="red">0个</text></view>
			</view>
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
	.list {
		margin: 0 20rpx*2;
		height: 88rpx*2;
		border-bottom: 1rpx solid #cccccc;
		.list-hd {
			margin-top: 18rpx*2;
			line-height: 12rpx*2;
			font-size: 12rpx*2;
			color: #bbbbbb;
		}

		.list-bd {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 25rpx*2;
			line-height: 13rpx*2;
			font-size: 13rpx*2;
			color: #000000;
		}

		// 红色
		.red {
			color: #e4502a;
		}
	}
</style>
