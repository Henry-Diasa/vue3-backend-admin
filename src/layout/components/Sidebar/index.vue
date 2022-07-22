<template>
  <div>
    <div class="logo-container">
      <el-avatar
        size="small"
        shape="square"
        src="https://img.onlinedown.net/download/202202/153635-620a06836cced.jpg"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  // height: 44px;
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
