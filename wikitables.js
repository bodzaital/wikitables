/**
 * Creates an svg.external element containing the "external link" image.
 * @returns {SVGElement} The SVG element.
 */
function ExternalLinkVector() {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	
	svg.classList = "external-vector";
	svg.innerHTML = '<path fill="#3366CC" d="M11.376,9.606l0.707-0.707l-0.002-0.001l0.002-6.982l-6.982,0v0.003L4.394,2.625L6.47,4.702L6.073,5.1H1.917 v6.984h6.98L8.899,7.93L9.298,7.53L11.376,9.606z M7.897,11.084h-4.98V6.1h2.156L3.641,7.531l2.829,2.828l1.429-1.43L7.897,11.084z M6.47,8.945L5.056,7.531l2.828-2.83L6.1,2.917V2.916l4.983,0l-0.002,4.984L9.298,6.116L6.47,8.945z M7.884,4.702"/>';

	return svg;
}

/**
 * Creates an img.coordinate-globe element containing the globe image from Wikipedia.
 * @returns {HTMLImageElement} The IMG element.
 */
function CoordinatesGlobeImage() {
	let img = document.createElement("img");
	img.classList = "coordinate-globe"
	img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/WMA_button2b.png/17px-WMA_button2b.png";
	return img;
}

/**
 * Creates an svg element with an arrow.
 * @param {string} type - Shape of the arrow; positive/negative/steady.
 * @param {string} direction - Optional: If type is positive or negative, the direction of the arrow; increase/decrease.
 */
function ArrowVectors(type, direction = null) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.classList = "arrow " + type;

	switch (direction) {
		case "increase":
			svg.innerHTML = '<polygon fill="#231F20" points="1.696,12.304 7,1.696 12.304,12.304 "/>';
			break;

		case "decrease":
			break;
	
		// steady
		default:
			break;
	}

	return svg;
}

/**
 * Adds a new element after every anchor elements.
 * @param {string} anchorElement - CSS selector of the parent/anchor nodes.
 * @param {Element} newElement - the node to insert.
 */
function AddAfter(anchorElement, newElement) {
	let parentElements = document.querySelectorAll(anchorElement);
	parentElements.forEach(e => {
		e.appendChild(newElement.cloneNode(true));
	});
}

function AddBefore(anchorElement, newElement) {
	let parentElements = document.querySelectorAll(anchorElement);
	parentElements.forEach(e => {
		e.parentNode.insertBefore(newElement.cloneNode(true), e);
	});
}

AddAfter("a.external", ExternalLinkVector());
AddBefore(".coordinates", CoordinatesGlobeImage());
AddBefore(".test", ArrowVectors("positive", "increase"));