export function GetCurrentYear(offset = 0) {
	const date = new Date();
	const dateString = String(date.getFullYear());
	return (([2] + dateString[3]) * 1) + offset;
}

export function GetCurrentMonth() {
	const date = new Date();
	return (String(date.getMonth() + 1)) * 1;
}

export function GetTuevColor(year) {
	const colors = ["#d65c4b", "#f79cb8", "#1baf82", "#e59101", "#1bb1f1", "#f4f017"];
	const color = ((`20${year}` * 1) % 6)
	return colors[color];
}