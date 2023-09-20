<template>

        <VueSlickCarousel v-bind="settings">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </VueSlickCarousel>

</template>
  
<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data() {
        return {
            settings: {
                arrows: true,
                dots: true,
            },
        }
    },
    name: 'CarouselSlider',
    components: { VueSlickCarousel },
}
</script>