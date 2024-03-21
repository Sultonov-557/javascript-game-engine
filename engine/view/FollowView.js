import { Entity } from "../entity.js";
import { Vector2D } from "../utils/index.js";
import { View } from "./view.js";

export class FollowView extends View {
	/**
	 * @param {HTMLCanvasElement} canvas
	 * @param {World} world
	 * @param {HTMLImageElement} background
	 * @param {Entity} follow
	 */
	constructor(canvas, world, background, follow) {
		super(canvas, world, background);
		this.follow = follow;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.drawImage(this.background, -this.follow.position.x % this.canvas.width, -this.follow.position.y % this.canvas.height, this.canvas.width, this.canvas.height);
		this.ctx.drawImage(
			this.background,
			(-this.follow.position.x % this.canvas.width) + this.canvas.width,
			-this.follow.position.y % this.canvas.height,
			this.canvas.width,
			this.canvas.height
		);
		this.ctx.drawImage(
			this.background,
			-this.follow.position.x % this.canvas.width,
			(-this.follow.position.y % this.canvas.height) + this.canvas.height,
			this.canvas.width,
			this.canvas.height
		);
		this.ctx.drawImage(
			this.background,
			(-this.follow.position.x % this.canvas.width) + this.canvas.width,
			(-this.follow.position.y % this.canvas.height) + this.canvas.height,
			this.canvas.width,
			this.canvas.height
		);

		this.world.entities.forEach((entity) => {
			entity.render(this.ctx, Vector2D.add(this.follow.position, new Vector2D(-this.canvas.width / 2, -this.canvas.height / 2)));
		});
	}
}
