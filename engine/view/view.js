import { Vector2D, World } from "../index.js";

export class View {
	/**
	 * @param {HTMLCanvasElement} canvas
	 * @param {World} world
	 * @param {HTMLImageElement} background
	 */
	constructor(canvas, world, background) {
		/**@type {HTMLCanvasElement} */
		this.canvas = canvas;
		/**@type {World} */
		this.world = world;
		/**@type {CanvasRenderingContext2D} */
		this.ctx = canvas.getContext("2d");
		/**@type {HTMLImageElement} */
		this.background = background;

		this.ctx.imageSmoothingEnabled = false;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
		this.world.entities.forEach((entity) => {
			entity.render(this.ctx, Vector2D.zero);
		});
	}
}
