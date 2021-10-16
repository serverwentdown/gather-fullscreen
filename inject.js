{
	const script = document.createElement('script');
	script.innerHTML = `
	window.innerWidth = window.outerWidth + 72;
	window.innerHeight = window.outerHeight;
	`;
	document.head.appendChild(script);

	//document.body.style.transform = 'translate(-72px, 0)';
	//document.body.style.width = `${window.outerWidth + 72}px`;
}
