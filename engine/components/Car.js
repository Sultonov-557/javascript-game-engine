import { Entity } from "../entity.js";
import { Vector2D } from "../utils/Vector2D.js";

export class Car extends Entity {
	/**
	 * @param {Vector2D} position
	 * @param {Vector2D} size
	 * @param {Vector2D} velocity
	 * @param {string} color
	 * @param {number} speed
	 */
	constructor(position, size, velocity, color, maxSpeed, startAngle, acceleration = 0.1, friction = 0.02, turnSpeed = 2) {
		super(position, size, velocity, color);
		this.maxSpeed = maxSpeed;
		this.acceleration = acceleration;
		this.friction = friction;
		this.turningFactor = turnSpeed;
		this.speed = 0;
		this.angle = startAngle;
	}

	control = { left: false, right: false, forward: false, backward: false };

	update() {
		if (this.control.forward) {
			this.accelerate();
		} else if (this.control.backward) {
			this.decelerate();
		}

		if (this.speed !== 0) {
			if (this.control.left) {
				this.turn(-this.turningFactor);
			} else if (this.control.right) {
				this.turn(this.turningFactor);
			}
		}

		if (this.speed > 0) {
			this.speed = Math.max(0, this.speed - this.friction);
		} else if (this.speed < 0) {
			this.speed = Math.min(0, this.speed + this.friction);
		}

		const radians = (this.angle * Math.PI) / 180;

		this.velocity.x = this.speed * Math.cos(radians);
		this.velocity.y = this.speed * Math.sin(radians);

		this.position.add(this.velocity);
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Vector2D} offset
	 */
	render(ctx, offset = new Vector2D(0, 0)) {
		ctx.save();
		ctx.translate(this.position.x - offset.x, this.position.y - offset.y);
		ctx.rotate((this.angle * Math.PI) / 180);
		ctx.fillStyle = this.color;
		ctx.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
		ctx.restore();
	}

	turn(angle) {
		this.angle += angle;
	}

	accelerate() {
		this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
	}

	decelerate() {
		this.speed = Math.max(this.speed - this.acceleration, 0);
	}

	handleKeyDown(event) {
		switch (event.key) {
			case "w":
				this.control.forward = true;
				break;
			case "s":
				this.control.backward = true;
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
				this.control.forward = false;
				break;
			case "s":
				this.control.backward = false;
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
