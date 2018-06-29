<template>
  <div>
    <!--重磅推荐-->
    <div class="heavy zoom" v-if="isHeavy">
      <div class="recommendTitle">
        {{item.name}}
        <router-link :to="'/past/' + item.id + '?title=' + item.name" class="oldRecommend">查看往期</router-link>
      </div>
      <div class="heavyZoom zoom">
        <div class="heavyBox zoom" v-for="(itemList, index) in item.list" :key="itemList.id">
          <div class="twoColumn" v-if="isHeavyShow(index)">
            <router-link :to="'/book/' + itemList.id">
              <div class="heavyBoxLeft">
                <img :src="itemList.imgUrl" />
              </div>
              <div class="heavyBoxRight">
                <div class="bookName">{{itemList.bookName}}</div>
                <div class="author zoom">
                  <div class="authorLeft">
                    {{itemList.author}}
                  </div>
                  <div class="authorRight zoom">
                    <span class="tips1" :style="{'border-color': isSixColor(itemList), 'color': isSixColor(itemList)}">{{itemList.label}}</span>
                    <span class="tips2">{{itemList.numberWords}}</span>
                  </div>
                </div>
                <div class="brief">{{itemList.brief}}</div>
              </div>
            </router-link>
          </div>
          <div class="index" v-else>
            <router-link :to="'/book/' + itemList.id">
              <img :src="itemList.imgUrl" class="" />
              <div>{{itemList.bookName}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="six-lattice zoom" v-if="isSixLattice">
      <div class="recommendTitle">
        {{item.name}}
        <router-link :to="'/past/' + item.id + '?title=' + item.name" class="oldRecommend">查看往期</router-link>
      </div>
      <div class="zoom">
        <div class="six-box" v-for="itemList in item.list" :key="itemList.id">
          <router-link :to="'/book/' + itemList.id">
            <img :src="itemList.imgUrl" class="" />
            <div>{{itemList.bookName}}</div>
          </router-link>
        </div>
      </div>
    </div>
    <!---->
    <div class="vertical zoom" v-if="isVertical">
      <div class="recommendTitle">
        {{item.name}}
        <router-link :to="'/past/' + item.id + '?title=' + item.name" class="oldRecommend">查看往期</router-link>
      </div>
      <div class="twoColumn twoColumnVertical" v-for="itemList in item.list" :key="itemList.id">
        <router-link :to="'/book/' + itemList.id">
          <div class="heavyBoxLeft">
            <img :src="itemList.imgUrl" />
          </div>
          <div class="heavyBoxRight">
            <div class="bookName">{{itemList.bookName}}</div>
            <div class="author zoom">
              <div class="authorLeft">
                {{itemList.author}}
              </div>
              <div class="authorRight zoom">
                <span class="tips1" :style="{'border-color': isSixColor(itemList), 'color': isSixColor(itemList)}">{{itemList.label}}</span>
                <span class="tips2">{{itemList.numberWords}}</span>
              </div>
            </div>
            <div class="brief">{{itemList.brief}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'HomeRecommend',
  props: {
    item: Object
  },
  computed: {
    isHeavy () {
      return this.item.template_id === 1
    },
    isSixLattice () {
      return this.item.template_id === 2
    },
    isVertical () {
      return this.item.template_id === 3
    },
    isLimit () {
      return this.item.name !== '限时免费'
    }
  },
  methods: {
    isHeavyShow (index) {
      return index === 0
    },
    isSixColor (itemList) {
      return itemList.color
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .heavy
    background: $bgColor-white
    margin:0 0 $spot-1 0
    padding: 0 0 0 $spot-15
    .heavyZoom
      .heavyBox
        float:left
        margin-bottom: $spot-25
        .index
          margin-right: $spot-2
          img
            width: $home-bookImg-width
            height: $home-bookImg-height
            margin-bottom: $spot-05
  .six-lattice
    margin-bottom: $spot-1
    background: $bgColor-white
    padding-left: $spot-15
    .six-box
      width: $home-bookImg-width
      float: left
      margin: 0 $spot-2 $spot-2 0
      img
        width: $home-bookImg-width
        height: $home-bookImg-height
        margin-bottom: $spot-05
  .vertical
    margin-bottom: $spot-1
    background: $bgColor-white
    padding: 0 0 0 $spot-15
    .twoColumnVertical
      margin-bottom: $spot-2
      height: $home-bookImg-height
  /*通用*/
  .oldRecommend
    font-weight: normal
    float: right
    margin-right: $spot-15
    font-size: $font-12
    color: $fontColor-gray-2
    line-height: 0.16rem
  .recommendTitle
    font-size: $font-16
    font-weight: bold
    margin: $spot-2 0
  .zoom
    overflow: hidden
    zoom: 1
  .twoColumn
    .heavyBoxLeft
      float: left
      width: $home-bookImg-width
      height: $home-bookImg-height
      img
        width: 100%
        height: 100%
    .heavyBoxRight
      float: left
      width: 2.31rem
      height: $home-bookImg-height
      margin-left: $spot-15
      .author
        color: $fontColor-gray-2
        padding: $spot-15 0 $spot-2 0
        .authorLeft
          float: left
          font-size: $font-12
          line-height: $spot-2
        .authorRight
          float: right
          line-height: 0.18rem
          text-align: center
          span
            border-radius: 0.05rem
            font-size: $font-12
            float: left
            padding: 0 $spot-05
          .tips1
            border:1px solid $fontColor-blue-1
            color: $fontColor-blue-1
            height: 0.18rem
            margin-right: $spot-05
          .tips2
            border:1px solid $fontColor-gray-2
            height: 0.18rem
      .brief
        font-size: $font-12
        color: $fontColor-gray-2
        height: 0.63rem
        overflow: hidden
        line-height: $spot-2
</style>
