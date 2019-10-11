<template>
  <div>
    <a-menu theme="light" :defaultSelectedKeys="[$route.path]" mode="inline">
      <a-menu-item key="/dashboard/index">
        <router-link :to="{path:'/dashboard/index'}">
          <a-icon type="pie-chart" />
          <span>主页</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/dashboard/form">
        <router-link :to="{path:'/dashboard/form'}">
          <a-icon type="desktop" />
          <span>表单</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>