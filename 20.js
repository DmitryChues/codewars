function filter_list(l) {
	return l.filter(str => typeof str !== 'string');
}