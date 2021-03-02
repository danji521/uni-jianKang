// ---------------amusing

// 查询活动
var getAmusingActivity = function(e) {
	return uniCloud
		.callFunction({
			name: 'get-amusing-activity',
		})
}


// ---------------my
// 查询用户
var getMyUsers = function(e) {
	return uniCloud
		.callFunction({
			name: 'get-my-users',
		})
}




































// 手机号归属地
var getPhone = function(e) {
	return uni.request({
		url: 'http://apis.juhe.cn/mobile/get',
		data: {
			phone: e.phone,
			key: "ed5509dcc3ec118d1065453dbf406008"
		}
	});
}
// 查询充值记录
var getRechargeRecord = function(e) {
	return uniCloud
		.callFunction({
			name: 'get-record-invest'
		})
}
// 查询用户
var getUser = function(e) {
	return uniCloud
		.callFunction({
			name: 'get-users'
		})
}
// 添加充值记录
var addRecord = function(e) {
	return uniCloud
		.callFunction({
			name: 'record',
			data: {
				type: e.type,
				money: e.money,
				phone: e.phone,
				serial: e.serial,
				state: e.state,
				time: e.time
			}
		})
}
// 登录
var login = function(e) {
	return uniCloud
		.callFunction({
			name: 'login',
			data: {
				code: e.code
			}
		})
}
// 支付
var pay = function(e) {
	return uniCloud
		.callFunction({
			name: 'pay',
			data: {
				openid: e.openid,
				outTradeNo: e.outTradeNo,
				totalFee: e.totalFee
			}
		})
}
// 查询订单号
var getOrderID = function(e) {
	return uniCloud
		.callFunction({
			name: 'get-order-id'
		})
}

// 修改订单号
var updateOrderId = function(e) {
	return uniCloud
		.callFunction({
			name: 'update-order-Id'
		})
}






















// 朋友圈动态发布
var circle = function(e) {
	return uniCloud
		.callFunction({
			name: 'circle',
			data: {
				img: e.img,
				name: e.name,
				news: e.news
			}
		})
}
// 收藏查询
var getCollect = function(e) {
	return uniCloud
		.callFunction({
			name: 'getCollect',
			data: {
				img: e.img,
				lect: e.lect
			}
		})
}
// 发布查询
var getRecord = function(e) {
	return uniCloud
		.callFunction({
			name: 'getRecord',
			data: {
				appid: e.appid
			}
		})
}
// 发布数据
var spre = function(e) {
	return uniCloud
		.callFunction({
			name: 'spre',
			data: {
				img: e.img,
				name: e.name,
				gender: e.gender,
				phone: e.phone,
				radio: e.radio,
				out: e.out,
				outMany: e.outMany,
				end: e.end,
				endMany: e.endMany,
				date: e.date,
				time: e.time,
				plate: e.plate,
				seat: e.tindex,
				price: e.price,
				remarks: e.remarks,
				outlat: e.outlat,
				outlng: e.outlng,
				endlat: e.endlat,
				endlng: e.endlng,
				// #ifdef MP-QQ || MP-WEIXIN
				appid: e.appid
				// #endif
			}
		})
}

module.exports = {
	getAmusingActivity,
	getMyUsers
}
