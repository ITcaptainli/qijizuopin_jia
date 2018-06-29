<template>
  <div>
    <vue-top class="publicTop"></vue-top>
    <div class="PastBox" v-for="(item, index) in past" :key="item.id">
      <div class="TitleButton zoom" @click="isShow(index)">
        <div class="title">{{item.name}}</div>
        <div :class="['icon', {icon_close: item.isIcon}]"></div>
      </div>
      <div class="PastContent" v-show="item.isIcon">
        <swiper :options='swiperOption'>
          <swiper-slide v-for='itemList in item.list' :key='itemList.id'>
            <router-link to='/#/'>
              <img class='swiper-img' :src='itemList.imgUrl'/>
              <div class='swiper-font'>{{ itemList.bookName }}</div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script scoped>
import VueTop from '../public/Top'
import ajax from '../../assets/js/axios.js'
export default {
  name: 'Past',
  data () {
    return {
      past: [],
      swiperOption: {
        slidesPerView: 4,
        offsetSlidesAfter: 2,
        spaceBetween: 15,
        slidesOffsetBefore: 15
      }
    }
  },
  components: {
    VueTop
  },
  methods: {
    getData () {
      let _this = this
      ajax.req({
        method: 'get',
        url: 'http://demo.zmblogs.com/qidian/php/Past.php',
        succ: _this.getDataSucc
      })
    },
    getDataSucc (res) {
      let resData = res.data
      if (res.data.code === 200 && resData) {
        this.past = resData.data.recommend
        this.$set(this.past, 'isIcon', false)
        this.$set(this.past[0], 'isIcon', !this.past[0].isIcon)
        this.$set(this.past[1], 'isIcon', !this.past[1].isIcon)
        this.$set(this.past[2], 'isIcon', !this.past[2].isIcon)
      }
    },
    isShow (index) {
      this.$set(this.past[index], 'isIcon', !this.past[index].isIcon)
    }
  },
  mounted () {
    document.title = this.$route.meta.title + ' - ' + this.$route.query.title
    this.getData()
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .zoom
    overflow: hidden
    zoom: 1
  .PastBox
    width: $w375
    .TitleButton
      height: $spot-5
      background: $bgColor-white
      line-height: $spot-5
      padding: 0 $spot-15
      margin-top: $spot-1
      .title
        float: left
      .icon
        float: right
        width: 0.08rem
        height: 0.16rem
        background: url(../../assets/images/kai.png) no-repeat center / 0.08rem 0.16rem
        margin-top: 0.18rem
      .icon_close
        width: 0.16rem
        height: 0.08rem
        background: url(../../assets/images/guan.png) no-repeat center / 0.16rem 0.08rem
  .PastContent
    margin-top: $spot-15
    .swiper-img
      width: 0.9rem
      height: 1.21rem
      margin-right: 0.05rem
    .swiper-font
      margin-top: $spot-05
      font-size: $font-12
      line-height: $spot-2
</style>
