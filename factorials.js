function getFactorial(num) {
	var i = (num - 1);
	for (i; i > 0; i -= 1) {
		num = num * i;
	}
	return num;
}