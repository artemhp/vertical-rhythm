window.onload = function() {
	document.getElementById("button").onclick = function() {
			chrome.extension.sendMessage({
				type: "showGrid",
				data: {
					borderColor: document.getElementById("color").value,
					fontSize: document.getElementById("baseline").value
				}
		});
	}
};