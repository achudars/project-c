<script>
  import { JustifiedGrid } from "@egjs/svelte-grid";

  const gap = 5;
  const defaultDirection = "end";
  const rowRange = 0;
  const columnRange = [1,8];
  const sizeRange = [200,1000];
  const isCroppedSize = false;
  const displayedRow = -1;
</script>
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

<JustifiedGrid
        class="container"
        {defaultDirection}
        {gap}
        {rowRange}
        {columnRange}
        {sizeRange}
        {isCroppedSize}
        {displayedRow}
>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg" alt="image1" />
    <div class="title">Item 1</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/2.jpg" alt="image2" />
    <div class="title">Item 2</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/3.jpg" alt="image3" />
    <div class="title">Item 3</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/4.jpg" alt="image4" />
    <div class="title">Item 4</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/5.jpg" alt="image5" />
    <div class="title">Item 5</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/6.jpg" alt="image6" />
    <div class="title">Item 6</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/7.jpg" alt="image7" />
    <div class="title">Item 7</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/8.jpg" alt="image8" />
    <div class="title">Item 8</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/9.jpg" alt="image9" />
    <div class="title">Item 9</div>
  </div>
  <div class="image" data-grid-content-offset="40">
    <img src="https://naver.github.io/egjs-infinitegrid/assets/image/10.jpg" alt="image10" />
    <div class="title">Item 10</div>
  </div>
</JustifiedGrid>