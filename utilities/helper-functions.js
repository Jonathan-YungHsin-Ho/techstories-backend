module.exports = {
	processBool,
};

function processBool(boolValue) {
	return boolValue === 1 || boolValue === true
		? true
		: boolValue === 0 || boolValue === false
		? false
		: null;
}
