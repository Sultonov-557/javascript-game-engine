import { Entity } from "../entity.js";

export class TopDownPlayer extends Entity {
	/**
	 * @param {Vector2D} position
	 * @param {Vector2D} size
	 * @param {Vector2D} velocity
	 * @param {string} color
	 * @param {number} speed
	 */
	constructor(position, size, velocity, color, speed) {
		super(position, size, velocity, color);
		this.speed = speed;
	}

	control = { left: false, right: false, up: false, down: false };

	update() {
		this.velocity.x = (-this.control.left + this.control.right) * this.speed;
		this.velocity.y = (-this.control.up + this.control.down) * this.speed;

		this.position.add(this.velocity);
	}

	handleKeyDown(event) {
		switch (event.key) {
			case "w":
				this.control.up = true;
				break;
			case "s":
				this.control.down = true;
				break;
			case "a":
				this.control.left = true;
				break;
			case "d":
				this.control.right = true;
				break;
		}
	}

	handleKeyUp(event) {
		switch (event.key) {
			case "w":
				this.control.up = false;
				break;
			case "s":
				this.control.down = false;
				break;
			case "a":
				this.control.left = false;
				break;
			case "d":
				this.control.right = false;
				break;
		}
	}
}
