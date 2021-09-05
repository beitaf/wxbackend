<template>
  <div class="w-layout w-flex">
    <w-nav />
    <div class="w-right">
      <w-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import wNav from './nav'
import wHeader from './header'
export default {
  name: 'layout',
  data() {
    return {
      
    }
  },
  components: {
    wNav,
    wHeader
  },
  
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .w-layout {
    height: 100%;
    .w-right {
      flex: 1;
      background: #F0F2F5;
      overflow-x: hidden;
    }
  }
</style>