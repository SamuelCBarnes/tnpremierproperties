<template>
  <div class="mx-auto px-4 bg-footer-color text-white pb-16 pt-14">
    <div class="grid md:grid-flow-col md:grid-cols-7 md:grid-rows-1 gap-5">
      <div class="w-full overflow-hidden">
      </div>
      <div class="w-full overflow-hidden text-left">
        <div class="px-8 py-6">
          <div class="text-xs text-gray-600 font-medium">
          </div>
          <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg" id="footer-text">
            LOGO
          </h3>
          <div class="text-[#737373]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis ratione.
          </div>
          <div class="mt-4">
            <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More</a>
          </div>
        </div>
      </div>
      <div class="w-full overflow-hidden text-left">
        <div class="px-6 py-6">
          <h3 class="font-semibold text-footer-text my-4 hover:underline text-lg" id="footer-text">
            USEFUL LINKS
          </h3>
          <div class="text-footer-text">
            <ul >
              <li class="hover:underline footer-list-items ml-2 py-1">About Us</li>
              <li class="hover:underline footer-list-items ml-2 py-1">All Listings</li>
              <li class="hover:underline footer-list-items ml-2 py-1">Services</li>
              <li class="hover:underline footer-list-items ml-2 py-1">Blog</li>
              <li class="hover:underline footer-list-items ml-2 py-1">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full overflow-hidden text-left">
        <div class="px-6 py-6">
          <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg" id="footer-text">
            FEEDS
          </h3>

        </div>
      </div>
      <div class="w-full overflow-hidden text-left">
        <div class="px-6 py-6">
          <div class="text-xs text-gray-600 font-medium">
          </div>

          <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg" id="footer-text">
            CONTACT INFO
          </h3>
          <div class="text-footer-text">
            <ul>
              <li class="ml-2 py-1">1111 N. Northshore Drive N600, Knoxville, TN 37919</li>
              <li class="ml-2 py-1">(O): (865)-394-5904</li>
              <li class="ml-2 py-1">(M): (443)-452-7163</li>
              <li class="ml-2 py-1">amberrobinson22@kw.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full overflow-hidden">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubFooter",
}
</script>

<style>
#footer-text {
font-size: 16px;
line-height: 23px;
color: #ffffff;
font-weight: 400;
padding: 0;
margin-bottom: 25px;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
text-transform: uppercase;
}

</style>