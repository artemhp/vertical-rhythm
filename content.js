chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "drawGrid":
		  var docHeight = getDocHeight();
			var boxHeight = parseInt(message.fontSize);
			var elemDiv = document.createElement('div');
			var color = message.borderColor;
			elemDiv.id = 'showGrid';
			elemDiv.style.height = docHeight + 'px';

			document.body.appendChild(elemDiv);


			var renderedGrid = document.createElement('div');
			for (var ii = 0; ii < (docHeight - boxHeight); ii = ii + boxHeight) {
				renderedGrid.appendChild(appendMe(boxHeight, color));
			}

			console.log(renderedGrid);
			document.getElementById("showGrid").innerHTML = "";
			document.getElementById("showGrid").appendChild(renderedGrid);
			break;
	}
});

function appendMe(boxHeight, color) {
	var innerElemDiv = document.createElement('div');
	innerElemDiv.className = 'showGridEl';
	innerElemDiv.style.height = boxHeight + "px";
	innerElemDiv.style.borderColor = color;
	return innerElemDiv;
//	document.body.appendChild(innerElemDiv);
}

function getDocHeight() {
	var D = document;
	return Math.max(
					D.body.scrollHeight, D.documentElement.scrollHeight,
					D.body.offsetHeight, D.documentElement.offsetHeight,
					D.body.clientHeight, D.documentElement.clientHeight
	);
}