import { World, Vector2D, FollowView, Car, loadImage, Entity } from "./engine/index.js";
main();
async function main() {
	const canvas = document.querySelector("canvas");
	const world = new World(5000, 5000);
	const background = await loadImage("./images/background.png");
	const player = new Car(new Vector2D(50, 50), new Vector2D(50, 30), new Vector2D(0, 0), "red", 3, 0);
	const view = new FollowView(canvas, world, background, player);

	window.player = player;

	document.addEventListener("keyup", (e) => player.handleKeyUp(e));
	document.addEventListener("keydown", (e) => player.handleKeyDown(e));

	world.addEntity(player);
	world.addEntity(new Entity(new Vector2D(100, 100), new Vector2D(100, 100), Vector2D.zero, "red"));

	setInterval(() => {
		world.update();
		view.draw();
	}, 10);
}
