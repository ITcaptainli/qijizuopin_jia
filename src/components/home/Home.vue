<template>
  <div>
    <vue-top class="publicTop"></vue-top>
    <home-banner :HomeBanner="HomeBanner" class="homeSwiper"></home-banner>
    <router-link tag="div" to="/" class="read">
      <span class="icon1"></span>
      <span class="font">登录查看最近阅读书籍</span>
      <span class="icon2"></span>
    </router-link>
    <home-recommend v-for="item in HomeRecommend" :key="item.id" :item="item"></home-recommend>
    <home-special class="HomeSpecial" :HomeSpecial="HomeSpecial"></home-special>
  </div>
</template>

<script scoped>
import VueTop from '../public/Top'
import HomeBanner from './HomeBanner'
import HomeRecommend from './HomeRecommend'
import HomeSpecial from './HomeSpecial'
import ajax from '../../assets/js/axios.js'
export default {
  name: 'Home',
  data () {
    return {
      'HomeBanner': [],
      'HomeRecommend': [],
      'HomeSpecial': {}
    }
  },
  components: {
    VueTop,
    HomeSpecial,
    HomeBanner,
    HomeRecommend
  },
  methods: {
    getData () {
      let _this = this
      ajax.req({
        method: 'get',
        url: 'http://demo.zmblogs.com/qidian/php/Home.php',
        succ: _this.getDataSucc
      })
    },
    getDataSucc (res) {
      const resData = res.data
      if (resData.code === 200 && resData) {
        this.HomeBanner = resData.data.banner
        this.HomeRecommend = resData.data.recommend
        this.HomeSpecial = resData.data.special
      }
    }
  },
  mounted () {
    this.getData()
    document.title = this.$route.meta.title
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .read
    width: 3.45rem
    height: 0.4rem
    line-height: 0.4rem
    position: relative
    margin: $spot-1 auto
    background: $bgColor-white
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    .icon1
      position: absolute
      left: 0.15rem
      top: 0.1rem
      width: 0.2rem
      height: 0.2rem
      background: url(../../assets/images/shu.png) no-repeat center / 0.2rem 0.2rem
    .icon2
      position: absolute
      right: 0.15rem
      top: 0.15rem
      width: 0.07rem
      height: 0.12rem
      background: url(../../assets/images/jin.png) no-repeat center / 0.07rem 0.12rem
    .font
      position: absolute
      left: 0.5rem
      top: 0
      font-size: $font-12
      color: $fontColor-gray-2
</style>
