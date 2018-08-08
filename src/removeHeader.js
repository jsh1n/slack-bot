exports.removeHeader = function (str) {
	var tmp = str.split(';')[0].length;
	return str.slice(tmp + 1);
};
