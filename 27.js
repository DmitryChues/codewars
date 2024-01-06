// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
	const arr = s.split(' ').map(item => item.length);
	return Math.min(...arr);
}