chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: 'Make Gather fullscreen',
		type: 'normal',
		documentUrlPatterns: ["https://gather.town/app/*"],
		id: 'make-fullscreen',
	});
});

chrome.contextMenus.onClicked.addListener(async (data) => {
	if (data.menuItemId === 'make-fullscreen') {
		chrome.tabs.insertCSS({
			file: 'inject.css',
		});
		chrome.tabs.executeScript({
			file: 'inject.js',
		});
	}
});
