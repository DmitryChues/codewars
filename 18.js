function longest(s1, s2) {
	let s = s1 + s2;
	const arr = s.split('').sort();
	const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
	return uniqueArr.join('');
}