// Everybody loves pi, but what if pi were a square? Given a number of digits digits, find the smallest integer whose square is greater or equal to the sum of the squares of the first digits digits of pi, including the 3 before the decimal point.

// Note: Test cases will not extend beyond 100 digits; the first 100 digits of pi are pasted here for your convenience:

// 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679

function squarePi(digits) {
	let str = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
	return Math.ceil(Math.sqrt(str.split('').filter((n, index) => index < digits).map(n => n * n).reduce((a, b) => a + b, 0)));
}