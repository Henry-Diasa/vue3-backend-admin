<template>
  <!-- <el-icon><Aim /></el-icon>  el-icon-Aim-->
  <el-icon v-if="icon.includes('el-icon')" class="sub-el-icon">
    <component :is="icon.slice(8)" />
  </el-icon>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
