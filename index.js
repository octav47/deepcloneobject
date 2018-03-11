function deepClone (object) {
	return JSON.parse(JSON.stringify(object));
}

module.exports = deepClone