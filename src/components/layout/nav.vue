<template>
  <div class="w-nav">
    <div class="nav-title w-flex">
      <label :style="{ width: isCollapse ? '0px' : '100px'}" v-if="!isCollapse">中福超生活</label>
      <i class="font_family icon-menu" @click="isCollapse = !isCollapse" :style="{ transform: isCollapse ? 'rotate(-90deg)' : '' }"></i>
    </div>
    <el-menu
      router
      :default-active="nowPath"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409eff">
      <div v-for="(item, index) in routes" :key="index">
        <el-submenu v-if="item.children && item.meta.level !== 2" :key="index" :index="item.path">
          <template slot="title"><i :class="['font_family', item.meta.icon]"></i> <span slot="title">{{ item.meta.title }}</span> </template>
          <el-menu-item v-for="(nav, ind) in item.children" :key="ind" :index="nav.path" v-show="nav.meta.nav">{{ nav.meta.title }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="item.path"><i :class="['font_family', item.meta.icon]"></i> <span slot="title">{{ item.meta.title }}</span></el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'layout',
  data() {
    return {
      isCollapse: false,
      routes: routes[0].children
    }
  },
  computed: {
    nowPath() {
      console.log(this.$route.path)
      return this.$route.path
    }
  },
  methods: {
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-submenu .el-menu-item{
    padding-left: 60px!important;
  }
</style>
<style lang="scss" scoped>
  .w-nav {
    height: 100%;
    background: #545c64;
    .nav-title {
      height: 50px;
      align-items: center;
      color: #fff;
      background: #4085F5;
      font-size: 20px;
      padding: 0 10px;
      justify-content: center;
      label { margin-right: auto; margin-left: 20px; overflow: hidden;}
      .icon-menu {
        padding: 5px 10px;
        font-size: 20px;
        cursor: pointer;
        transition: all .3s;
      }
    }
    .el-menu { 
      border-right: none;
      overflow: hidden;
      text-align: left;
      .font_family {
        font-size: 38px;
        text-align: center;
      }
      
      
    }
    .el-menu--collapse {
      .font_family {
        display: inline-block;
        transform: translateX(-10px);
      }
    }
  }
</style>