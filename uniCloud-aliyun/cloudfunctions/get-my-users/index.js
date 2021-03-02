'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('my-users')
	const res = collection.get();
	return res
};
