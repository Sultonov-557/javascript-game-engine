import { Vector2D } from "./utils/index.js";

export class Entity {
	/**
	 * @param {Vector2D} position
	 * @param {Vector2D} size
	 * @param {Vector2D} velocity
	 * @param {string} color
	 */
	constructor(position, size, velocity, color) {
		/**@type {Vector2D} */
		this.position = position;
		/**@type {Vector2D} */
		this.size = size;
		/**@type {Vector2D} */
		this.velocity = velocity;
		/**@type {string} */
		this.color = color;
	}

	update() {
		this.position.add(this.velocity);
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Vector2D} offset
	 */
	render(ctx, offset = Vector2D.zero) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x - offset.x, this.position.y - offset.y, this.size.x, this.size.y);
	}
}
