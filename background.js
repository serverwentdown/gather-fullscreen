async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

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
		const tab = await getCurrentTab();
		await chrome.scripting.insertCSS({
			target: { tabId: tab.id },
			files: ['inject.css'],
		});
		await chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ['inject.js'],
		});
	}
});
