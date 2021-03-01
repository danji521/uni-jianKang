<template>
	<view class="service">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item">
				<view class="title">
					<view>全部提醒</view>
					<switch name="switch"/>
				</view>
				<view class="txt">总忘记?开启服务，每一天,自己变好一点</view>
			</view>
			<view class="uni-form-item">
				<view class="title">
					<view>早餐提醒</view>
					<switch name="switch"/>
				</view>
				<view class="txt">不要小瞧早餐,坚持吃早餐不仅能够原理更多疾病,还有助于减肥</view>
			</view>
			<view class="uni-form-item">
				<view class="title">
					<view>午餐提醒</view>
					<switch name="switch"/>
				</view>
				<view class="txt">每天的午餐按照方案吃,营养,减肥两不误,饭前看一天,再也不用维持什么发愁了</view>
			</view>
			<view class="uni-form-item">
				<view class="title">
					<view>晚餐提醒</view>
					<switch name="switch"/>
				</view>
				<view class="txt">晚餐决定了你的体重和寿命,坚持下去不会不一样</view>
			</view>
		</form>
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
	.uni-form-item {
		padding: 0 15rpx;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 11rpx*2;
			font-size: 16rpx*2;
			line-height: 16rpx*2;
			font-weight: 600;
		}

		.txt {
			margin-top: 12rpx*2;
			font-size: 12rpx*2;
			color: #d1d1d3;
		}	
	}
</style>
