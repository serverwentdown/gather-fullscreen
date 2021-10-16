{
	const script = document.createElement('script');
	script.innerHTML = `
	window.innerWidth = window.outerWidth + 72;
	window.addEventListener('resize', () => {
		window.innerWidth = window.outerWidth + 72;
	});
	`;
	document.head.appendChild(script);
}
