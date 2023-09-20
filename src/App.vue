<template>
  <MainHeader /> 
  <!-- <HeroSection /> -->
  <!-- <CarouselSlider /> -->
  <!-- <HorizontalCard /> -->
  <BlogSection/>
  <SignUpSheet/>
  <!-- <ContactForm/> -->
  <SubFooter/>
  <MainFooter />
</template>

<script>
// import AnnouncementBanner from './components/AnnouncementBanner.vue';
import BlogSection from './components/BlogSection.vue';

// import CarouselSlider from './components/CarouselSlider.vue';
// import ContactForm from './components/ContactForm.vue';

// import HeroSection from './components/HeroSection.vue';
// import HorizontalCard from './components/HorizontalCard.vue';
import MainHeader from './components//layout/MainHeader.vue';
import MainFooter from './components//layout/MainFooter.vue';
import SubFooter from './components//layout/SubFooter.vue';
import SignUpSheet from './components/SignUpSheet.vue';

export default {
  name: 'App',
  components: {
    // AnnouncementBanner,
    BlogSection,
    // CarouselSlider,
    // ContactForm,
    MainHeader,
    // HeroSection,
    // HorizontalCard,
    MainFooter,
    SubFooter,
    SignUpSheet,
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
