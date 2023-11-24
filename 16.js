function validatePIN(pin) {
	var i = pin.length;
	if (i != 4 && i != 6) {
		return false;
	}
	while (i--) {
		if (pin[i] < '0' || pin[i] > '9') {
			return false;
		}
	}
	return true;
}