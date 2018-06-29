<template>
  <div>
    <swiper>
      <swiper-slide v-for="item in HomeBanner" :key="item.id">
        <router-link :to="'/book/' + item.id"><img class="swiper-img" :src="item.imgUrl"/></router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script scoped>
export default {
  name: 'HomeBanner',
  props: {
    HomeBanner: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 1500,
        delay: 3000
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .homeSwiper
    width: $w375
    overflow: hidden
    .swiper-img
      height: 1.5rem
      width: $w375
      display: block
</style>
