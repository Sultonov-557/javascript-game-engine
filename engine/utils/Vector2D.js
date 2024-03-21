export class Vector2D {
	/**
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		/**@type {number} */
		this.x = x;
		/**@type {number} */
		this.y = y;
	}

	/**
	 * @param {Vector2D} vector1
	 * @param {Vector2D} vector2
	 */
	static add(vector1, vector2) {
		return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
	}
	static zero = new Vector2D(0, 0);

	/**
	 * @param {Vector2D} vector
	 */
	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}
}
