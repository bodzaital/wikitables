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
 * @param {string} type - The trend of the arrow. Positive is green, negative is red, steady is a blue horizontal bar.
 * @param {string} direction - Optional: If type is positive or negative, increase is an upward facing triangle, decrease is a downward facing triangle.
 */
function ArrowVectors(type, direction = null) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.classList = "arrow " + type;

	switch (direction) {
		case "increase":
			svg.innerHTML = '<polygon fill="black" points="1.696,12.304 7,1.696 12.304,12.304 "/>';
			break;
		case "decrease":
			svg.innerHTML = '<polygon fill="black" points="12.305,1.695 7,12.305 1.695,1.695 "/>';
			break;
		default:
			svg.innerHTML = '<polygon fill="black" points="1.695,6 12.304,6 12.304,8 1.695,8 "/>';
			break;
	}

	return svg;
}

/**
 * Adds a new element after every anchor elements.
 * @param {string} anchorElement - CSS selector of the parent/anchor elements.
 * @param {Element} newElement - the element to insert.
 */
function AddAfter(anchorElement, newElement) {
	let parentElements = document.querySelectorAll(anchorElement);
	parentElements.forEach(e => {
		e.appendChild(newElement.cloneNode(true));
	});
}

/**
 * Adds a new element before every anchor elements.
 * @param {string} anchorElement - CSS selector of the next elements.
 * @param {Element} newElement - the element to insert.
 */
function AddBefore(anchorElement, newElement) {
	let parentElements = document.querySelectorAll(anchorElement);
	parentElements.forEach(e => {
		e.parentNode.insertBefore(newElement.cloneNode(true), e);
	});
}

// Add the external vector to all links with the .external class.
AddAfter("a.external", ExternalLinkVector());

// Add the globe before all coordinates with the .coordinates class.
AddBefore(".coordinates", CoordinatesGlobeImage());

// Add the trend triangles (positive-negative, increase-decrease).
AddBefore(".pos-inc", ArrowVectors("positive", "increase"));
AddBefore(".pos-dec", ArrowVectors("positive", "decrease"));
AddBefore(".neg-inc", ArrowVectors("negative", "increase"));
AddBefore(".neg-dec", ArrowVectors("negative", "decrease"));
AddBefore(".steady", ArrowVectors("steady"));