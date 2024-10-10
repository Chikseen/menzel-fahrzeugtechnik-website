export function GetCountDown(forceFrame, future) {
	const diff = (future - new Date().getTime()) / 1000;
	let timeText = "";
	if (forceFrame == 0 || diff < 60) {
		const d = diff.toFixed(0)
		if (d <= 1)
			timeText = [d, `Sekunde`];
		else
			timeText = [d, `Sekunden`];
	}
	else if (forceFrame == 1 || diff < 3600) {
		const d = (diff / 60).toFixed(0)
		if (d <= 1)
			timeText = [d, `Minute`];
		else
			timeText = [d, `Minuten`];
	}
	else if (forceFrame == 2 || diff < 86400) {
		const d = (diff / 3600).toFixed(0)
		if (d <= 1)
			timeText = [d, `Stunde`];
		else
			timeText = [d, `Stunden`];
	}
	else if (forceFrame == 3 || diff < 604800) {
		const d = (diff / 86400).toFixed(0)
		if (d <= 1)
			timeText = [d, `Tag`];
		else
			timeText = [d, `Tagen`];
	}
	else if (forceFrame == 3 || diff < 2628000) {
		const d = (diff / 604800).toFixed(0)
		if (d <= 1)
			timeText = [d, `Woche`];
		else
			timeText = [d, `Wochen`];
	}
	else if (forceFrame == 3 || diff < 31540000) {
		const d = (diff / 2628000).toFixed(0)
		if (d <= 1)
			timeText = [d, `Monat`];
		else
			timeText = [d, `Monaten`];
	}
	else {
		const d = (diff / 31540000).toFixed(0)
		if (d <= 1)
			timeText = [d, `Jahr`];
		else
			timeText = [d, `Jahren`];
	}

	return timeText;
}