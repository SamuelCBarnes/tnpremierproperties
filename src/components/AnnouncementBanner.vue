<template>
  <div class="fixed bottom-0 left-0 pb-4 w-full px-2 md:px-0">
  <div class="w-full md:w-3/4 mx-auto bg-black opacity-75 rounded-lg md:rounded-full px-4 md:pl-8 md:pr-2 py-2 md:flex items-center justify-between">
    <div class="text-white md:max-w-xl">
      All components hosted on VueTailwind.com are now open-source!
    </div>

    <div class="py-2 md:py-0 text-center">
      <button class="block md:inline-block mx-auto my-2 md:my-0 md:mx-2 px-4 py-2 text-sm text-gray-400 focus:outline-none hover:underline">
        Close
      </button>

      <a href="#" class="block md:inline-block px-4 py-2 text-sm rounded-full bg-indigo-600 text-white">
        Github &rarr;
      </a>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: "AnnouncmentBanner"
}
</script>

<style>

</style>