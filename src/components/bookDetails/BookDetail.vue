<template>
  <div class="bookDetail">
    <vue-top class="publicTop"></vue-top>
    <book-content class="bookContent" :bookContent="bookContent" :isVip="isVip" :many="many"></book-content>
    <book-catalog class="catalog" :catalog="catalog"></book-catalog>
    <book-review class="bookReview" :bookReview="bookReview"></book-review>
    <book-other class="bookOther" :otherBooks="otherBooks"></book-other>
    <book-hot class="bookHot" :bookHot="bookHot"></book-hot>
    <div class="button zoom">
      <div class="appendShelf">加入书架</div>
      <div class="rightOffread">立即阅读</div>
    </div>
  </div>
</template>

<script scoped>
import VueTop from '../public/Top'
import BookContent from './BookContent'
import BookCatalog from './BookCatalog'
import BookReview from './BookReview'
import BookOther from './BookOther'
import BookHot from './BookHot'
import ajax from '../../assets/js/axios.js'
export default {
  name: 'BookDetail',
  data () {
    return {
      bookContent: {},
      isVip: 0,
      many: '',
      catalog: {},
      bookReview: {},
      otherBooks: [],
      bookHot: []
    }
  },
  components: {
    VueTop,
    BookContent,
    BookCatalog,
    BookReview,
    BookOther,
    BookHot
  },
  methods: {
    getData () {
      let _this = this
      ajax.req({
        method: 'get',
        url: 'http://demo.zmblogs.com/qidian/php/BookDetail.php',
        succ: _this.getDataSucc
      })
    },
    getDataSucc (res) {
      let resData = res.data
      if (resData.code === 200 && resData) {
        this.bookContent = resData.data.bookContent
        this.isVip = resData.data.bookContent.isVip
        this.many = resData.data.bookContent.many
        this.catalog = resData.data.catalog
        this.bookReview = resData.data.bookReview
        this.otherBooks = resData.data.otherBooks
        this.bookHot = resData.data.hot
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
  .zoom
    overflow: hidden
    zoom: 1
  .bookDetail
    padding-bottom: 0.43rem
  .button
    width: $w375
    height: 0.44rem
    line-height: 0.44rem
    text-align: center
    position: fixed
    bottom: 0
    left: 0
    box-shadow: $shadow
    .appendShelf
      background: $button-white
      width: 50%
      float: left
    .rightOffread
      background: $button-orange
      color: $bgColor-white
      width: 50%
      float: left
</style>
