<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let container;
	let gridItems = [];

	const gap = 5;
	const defaultDirection = 'end';
	const rowRange = 0;
	const columnRange = [1, 8];
	const sizeRange = [200, 1000];
	const isCroppedSize = false;
	const displayedRow = -1;

	onMount(async () => {
		if (browser) {
			const { JustifiedGrid } = await import('@egjs/svelte-grid');

			// Create a new instance of JustifiedGrid
			const gridInstance = new JustifiedGrid();

			// Use as an action on the container
			const options = {
				columnRange,
				defaultDirection,
				displayedRow,
				gap,
				isCroppedSize,
				rowRange,
				sizeRange
			};

			// Apply the grid action to the container
			gridInstance.mount(container, options);

			// Find and update the grid items
			gridItems = Array.from(container.querySelectorAll('.image'));
			gridInstance.syncElements(gridItems);
		}
	});
</script>

<div class="container" bind:this={container}>
	<div class="image" data-grid-content-offset="40">
		<img alt="image1" src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg" />
		<div class="title">Item 1</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image2" src="https://naver.github.io/egjs-infinitegrid/assets/image/2.jpg" />
		<div class="title">Item 2</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image3" src="https://naver.github.io/egjs-infinitegrid/assets/image/3.jpg" />
		<div class="title">Item 3</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image4" src="https://naver.github.io/egjs-infinitegrid/assets/image/4.jpg" />
		<div class="title">Item 4</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image5" src="https://naver.github.io/egjs-infinitegrid/assets/image/5.jpg" />
		<div class="title">Item 5</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image6" src="https://naver.github.io/egjs-infinitegrid/assets/image/6.jpg" />
		<div class="title">Item 6</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image7" src="https://naver.github.io/egjs-infinitegrid/assets/image/7.jpg" />
		<div class="title">Item 7</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image8" src="https://naver.github.io/egjs-infinitegrid/assets/image/8.jpg" />
		<div class="title">Item 8</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image9" src="https://naver.github.io/egjs-infinitegrid/assets/image/9.jpg" />
		<div class="title">Item 9</div>
	</div>
	<div class="image" data-grid-content-offset="40">
		<img alt="image10" src="https://naver.github.io/egjs-infinitegrid/assets/image/10.jpg" />
		<div class="title">Item 10</div>
	</div>
</div>

<style>
	.image {
		position: relative;
		width: 100%;
		font-size: 0;
	}

	.image img {
		width: 100%;
	}

	.title {
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-weight: bold;
		font-size: 14px;
	}

	@media (prefers-color-scheme: dark) {
		.title {
			color: white;
		}
	}

	@media (prefers-color-scheme: light) {
		.title {
			color: black;
		}
	}
</style>
