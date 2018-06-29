<template>
  <div>
    <router-link to="/" class="return" v-if="isIndex"></router-link>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  Name: 'Top',
  data () {
    return {
      title: ''
    }
  },
  computed: {
    isIndex () {
      return this.$route.meta.title.indexOf('首页') === -1
    }
  },
  mounted () {
    this.title = this.$route.meta.title
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .publicTop
    height: 0.44rem
    background: $bgColor-white
    line-height: 0.44rem
    text-align: center
    position: relative
    .title
      font-size: $font-18
    .return
      position: absolute
      left: 0.15rem
      top: 0.13rem
      width: 0.1rem
      height: 0.18rem
      background: url(../../assets/images/fanhui.png) no-repeat center / 0.1rem 0.18rem
</style>
