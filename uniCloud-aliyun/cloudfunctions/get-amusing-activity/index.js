'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('amusing-activity')
	const res = collection.get();
	return res
};
