<template>
  <!--
  You probably want to use bellow commented line instead to use the container also
  (just replace the first line with the commented line
-->
<!--<div class="container mx-auto my-12 px-4 md:px-0">-->
<div class="mx-auto my-12 px-4">
  <div class="md:flex justify-between items-center mb-8">
    <div>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Recent Articles:
      </h2>

      <p class="text-gray-700">
        Discover tutorials and news about algo-trading specifically written for quants.
      </p>
    </div>

    <div class="mt-2">
      <a href="/blog" class="py-2 text-indigo-600 text-sm hover:underline mt-4"> Browse All <span>&rarr;</span> </a>
    </div>
  </div>

  <div class="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-1 gap-4">
    <div class="rounded border md:shadow w-full overflow-hidden">
      <div>
        <a href="#">
          <img class="w-full h-48 object-cover" src="https://media.gettyimages.com/id/168325352/photo/twilight-exterior-of-home-and-landscape.webp?s=2048x2048&w=gi&k=20&c=u2dW3moQi_GEHx0QZWRzthJWDnYIXrKPvCdX1dMWyvo=" alt="card 1" />
        </a>
      </div>

      <div class="px-4 py-4">
        <div class="text-xs text-gray-600 font-medium">
          <a href="#" class="uppercase hover:underline">
            recipe
          </a>
          <span class="mx-1">&bull;</span>
          <span>May 4, 2020</span>
        </div>

        <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg">
          <a href="#">Maiores impedit perferendis car suscipit maniko</a>
        </h3>

        <div class="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </div>

        <div class="mt-4">
          <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More <span>&rarr;</span></a>
        </div>
      </div>
    </div>

    <div class="rounded border md:shadow w-full overflow-hidden">
      <div>
        <a href="#">
          <img class="w-full h-48 object-cover" src="https://media.gettyimages.com/id/1279329257/photo/exterior-of-modern-tiny-house.webp?s=2048x2048&w=gi&k=20&c=G0_DxvVd8CkWF5dHSa7-ci4xyjyR4axaK91PogpskFo=" alt="card 1" />
        </a>
      </div>

      <div class="px-4 py-4">
        <div class="text-xs text-gray-600 font-medium">
          <a href="#" class="uppercase hover:underline">
            recipe
          </a>
          <span class="mx-1">&bull;</span>
          <span>May 4, 2020</span>
        </div>

        <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg">
          <a href="#">Maiores impedit perferendis car suscipit maniko</a>
        </h3>

        <div class="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </div>

        <div class="mt-4">
          <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More <span>&rarr;</span></a>
        </div>
      </div>
    </div>

    <div class="rounded border md:shadow w-full overflow-hidden">
      <div>
        <a href="#">
          <img class="w-full h-48 object-cover" src="https://media.gettyimages.com/id/1256263980/photo/modern-minimalist-family-villa.webp?s=2048x2048&w=gi&k=20&c=aQUwGx1zCRbaWtqHtxsQ_ChZMqD7pYUp9Zh4LftoE7c=" alt="card 1" />
        </a>
      </div>

      <div class="px-4 py-4">
        <div class="text-xs text-gray-600 font-medium">
          <a href="#" class="uppercase hover:underline">
            recipe
          </a>
          <span class="mx-1">&bull;</span>
          <span>May 4, 2020</span>
        </div>

        <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg">
          <a href="#">Maiores impedit perferendis car suscipit maniko</a>
        </h3>

        <div class="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </div>

        <div class="mt-4">
          <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More <span>&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: "BlogSection"
}
</script>

<style>

</style>