<template>
  <div>
    <div class="title">作者的其它书籍</div>
    <div class="bookOtherCon">
      <dl v-for="item in otherBooks" :key="item.id">
        <dt>
          <img :src="item.imgUrl" />
        </dt>
        <dd>
          <div class="bookName">{{item.bookName}}</div>
          <div class="author">{{item.label}} | {{item.numberWords}}</div>
          <div class="brief">{{item.brief}}</div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'otherBook',
  props: {
    otherBooks: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .bookOther
    background: $bgColor-white
    margin: $spot-1 0
    .title
      height: $spot-5
      line-height: $spot-5
      margin: 0 $spot-15
    .bookOtherCon
      padding-bottom: $spot-1
      dl
        overflow: hidden
        zoom: 1
        margin: 0 $spot-15
        margin-bottom: $spot-1
        dt
          float: left
          width: 1rem
          height: 1.34rem
          img
            width: 100%
            height: 100%
        dd
          float: left
          width: 2.31rem
          margin-left: $spot-15
          .author
            font-size: $font-12
            margin: $spot-15 0 $spot-2 0
            color: $fontColor-gray-2
          .brief
            font-size: $font-12
            height: 0.63rem
            overflow: hidden
            line-height: $spot-2
            color: $fontColor-gray-2
</style>
