/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
	return Math.min(max, Math.max(value, min));
}

/**
 * @param {string} url
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(url) {
	return new Promise((res) => {
		const image = new Image();
		image.src = url;
		image.onload = () => {
			res(image);
		};
	});
}
