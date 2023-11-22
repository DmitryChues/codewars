function squareSum(numbers) {
	let squareArray = numbers.map(num => num ** 2);
	let sum = 0;
	for (let i = 0; i < squareArray.length; i++) {
		sum += squareArray[i];
	}
	return sum;
}