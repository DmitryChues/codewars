function longestConsec(strarr, k) {
	if (strarr.length === 0 || k > strarr.length || k < 0) { return '' }
	let newArr = []
	for (let i = 0; i <= (strarr.length - k); i++) {
		newArr = [...newArr, strarr.slice(i, i + k).join('')]
	}
	let maxLength = 0
	let maxStr = ''
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i].length > maxLength) {
			maxLength = newArr[i].length
			maxStr = newArr[i]
		}
	}
	return maxStr
}