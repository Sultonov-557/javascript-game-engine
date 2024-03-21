import { clamp } from "./utils/index.js";

export class World {
	/**
	 * @param {number} height
	 * @param {number} width
	 */
	constructor(height, width) {
		/**@type {number} */
		this.height = height;
		/**@type {number} */
		this.width = width;
		/**@type {Entity[]} */
		this.entities = [];
	}

	/** @param {Entity} entity */
	addEntity(entity) {
		this.entities.push(entity);
	}

	/** @param {Entity} entity */
	removeEntity(entity) {
		delete this.entities[this.entities.indexOf(entity)];
	}

	update() {
		this.entities.forEach((entity) => {
			entity.update();
			entity.position.x = clamp(entity.position.x, 0, this.width);
			entity.position.y = clamp(entity.position.y, 0, this.height);
		});
	}
}
