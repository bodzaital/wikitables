/**
 * TODO: parameters: node to search, node to add.
 */
function AddAfter() {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.classList = "external";
	svg.innerHTML = '<path fill="#3366CC" d="M11.376,9.606l0.707-0.707l-0.002-0.001l0.002-6.982l-6.982,0v0.003L4.394,2.625L6.47,4.702L6.073,5.1H1.917 v6.984h6.98L8.899,7.93L9.298,7.53L11.376,9.606z M7.897,11.084h-4.98V6.1h2.156L3.641,7.531l2.829,2.828l1.429-1.43L7.897,11.084z M6.47,8.945L5.056,7.531l2.828-2.83L6.1,2.917V2.916l4.983,0l-0.002,4.984L9.298,6.116L6.47,8.945z M7.884,4.702"/>';
	let parentNodes = document.querySelectorAll("a.external");
	parentNodes.forEach(e => {
		e.appendChild(svg.cloneNode(true));
	});
}

AddAfter();