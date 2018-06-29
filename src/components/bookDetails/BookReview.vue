<template>
  <div>
    <div class="title">
      <span>书评 （{{bookReview.number}}条）</span>
      <span class="createReview">写书评</span>
    </div>
    <dl v-for="item in bookReview.list" :key="item.id" class="zoom">
      <dt><img :src="item.portrait" /></dt>
      <dd>
        <div class="userName"><span>{{item.reviewTime}}</span>{{item.reviewUser}}</div>
        <div class="userReview">{{item.reviewContent}}</div>
      </dd>
    </dl>
  </div>
</template>

<script scoped>
export default {
  name: 'BookReview',
  props: {
    bookReview: Object
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .zoom
    overflow: hidden
    zoom: 1
  .bookReview
    padding-bottom: 0.43rem
    background: $bgColor-white
    .title
      height: $spot-5
      line-height: $spot-5
      margin: 0 $spot-15
      border-bottom: 1px solid #f1f1f1
      .createReview
        float: right
        font-size: $font-12
    dl
      padding: $spot-15 0
      border-bottom: 1px solid #f1f1f1
      margin: 0 $spot-15
      dt
        width: 0.28rem
        height: 0.28rem
        float: left
        img
          width: 100%
          height: 100%
          border-radius: 50%
      dd
        width: 3rem
        float: left
        margin-left: $spot-1
        .userName
          margin: $spot-1 0
          font-size: $font-12
          color: $fontColor-gray-2
          span
            float: right
            font-size: $font-12
            color: $fontColor-gray-2
        .userReview
          height: $spot-2
          font-size: $font-12
</style>
