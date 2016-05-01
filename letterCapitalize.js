function letterCapitalize(str) {
	var arr = str.split(' '),
		i = 0;
	for (i = 0; i < arr.length; i += 1) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
	}
	str = arr.join(' ');
	return str;
}
