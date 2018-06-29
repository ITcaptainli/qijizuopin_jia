<template>
  <div>
    <div class="special zoom">
      <div class="recommendTitle">{{HomeSpecial.s_name}}</div>
      <div class="img" v-for="itemList in HomeSpecial.list" :key="itemList.id">
        <router-link to="/"><img :src="itemList.imgUrl" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpecial',
  props: {
    HomeSpecial: Object
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .zoom
    overflow: hidden
    zoom: 1
  .HomeSpecial
    background: $bgColor-white
  .special
    padding-left: $spot-15
    .img
      width: 1.65rem
      height: 0.8rem
      float: left
      margin: 0 $spot-15 $spot-15 0
      border-radius: 0.05rem
      overflow: hidden
      img
        width: 100%
        height: 100%
  .recommendTitle
    font-size: $font-16
    font-weight: bold
    margin: $spot-2 0
</style>
