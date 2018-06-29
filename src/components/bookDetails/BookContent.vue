<template>
  <div>
    <div class="bookConTop zoom">
      <div class="bookConTopLeft">
        <img :src="bookContent.imgUrl" />
      </div>
      <div class="bookConTopRight">
        <div class="bookName">{{bookContent.bookName}}</div>
        <div class="author">{{bookContent.author}}</div>
        <div class="tips">
          <span :style="{borderColor: bookContent.color, color: bookContent.color}">{{bookContent.label}}</span>
          <span>{{bookContent.numberWords}}</span>
        </div>
        <div class="many">{{isVipBoolen}}</div>
      </div>
    </div>
    <div class="bookConBtm">
      <div class="h1">内容介绍</div>
      <div class="con">{{bookContent.brief}}</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'BookContent',
  props: {
    bookContent: Object,
    isVip: Number,
    many: String
  },
  computed: {
    isVipBoolen () {
      return this.isVip === 0 ? '免费' : this.many
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .zoom
    overflow: hidden
    zoom: 1
  .bookContent
    background: $bgColor-white
    padding: $spot-15
    margin-top: $spot-1
    .bookConTopLeft
      width: 1rem
      height: 1.34rem
      float: left
      img
        width: 100%
        height: 100%
    .bookConTopRight
      float: left
      margin-left: $spot-15
      .bookName
        font-size: $font-18
        font-weight: bold
      .author
        font-size: $font-12
        color: $fontColor-gray-2
        margin: $spot-15 0
      .tips
        span
          padding: 0 0.05rem
          border: 1px solid $fontColor-gray-2
          font-size: $font-12
          border-radius: 0.03rem
          color: $fontColor-gray-2
      .many
        margin-top: $spot-15
        color: $fontColor-gray-2
        font-size: $font-12
    .bookConBtm
      margin: $spot-15 0 0 0
      .h1
        font-size: $font-16
        margin-bottom: $spot-1
      .con
        font-size: $font-12
        line-height: $spot-2
        color: $fontColor-gray-1
</style>
