chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.type) {
		case "showGrid":
			showGrid(request.data.fontSize, request.data.borderColor);
		break;
	}
	return true;
});

var showGrid = function(size, color) {
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendMessage(tab.id, {type: "drawGrid", fontSize: size, borderColor: color});
	});
};