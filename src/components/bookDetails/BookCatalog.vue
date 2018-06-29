<template>
  <div>
    <div class="title">目录 (共{{catalog.number}}章 | {{catalog.state}})</div>
    <ul class="list">
      <li v-for="item in catalog.list" :key="item.id">
        <span>最新</span>
        <router-link to="/">{{item.chapterName}}</router-link>
        <span>{{item.chapterTime}}</span>
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  name: 'BookCatalog',
  props: {
    catalog: Object
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/css/cssValue.styl'
  .zoom
    overflow: hidden
    zoom: 1
  .catalog
    background: $bgColor-white
    margin-top: $spot-1
    .title
      height: $spot-5
      line-height: $spot-5
      margin: 0 $spot-15
      border-bottom: 1px solid #f1f1f1
  .list
    margin-bottom: $spot-1
    li
      height: $spot-5
      line-height: $spot-5
      padding: 0 $spot-15
</style>
