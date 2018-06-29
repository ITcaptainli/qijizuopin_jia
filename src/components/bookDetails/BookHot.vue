<template>
  <div>
    <div class="title">同类热门</div>
    <div class="hotList">
      <div class="hotListImg" v-for="item in bookHot" :key="item.id">
        <router-link to="/"><img :src="item.imgUrl" /></router-link>
        <p>{{item.bookName}}</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'BookHot',
  props: {
    bookHot: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .bookHot
    background: $bgColor-white
    .title
      height: $spot-5
      line-height: $spot-5
      margin: 0 $spot-15
    .hotList
      overflow: hidden
      zoom: 1
      margin: 0 $spot-15
    .hotListImg
      width: 1rem
      float: left
      margin: 0 $spot-15 $spot-15 0
      a
        width: 1rem
        height: 1.34rem
        display: block
        img
          width: 100%
          height: 100%
      p
        margin-top: $spot-05
</style>
