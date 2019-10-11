<template>
  <a-layout id="basic-layout" style="min-height: 100vh">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" theme="light">
      <div class="logo">Logo</div>
      <Sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed =! collapsed"
        ></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
export default {
  components: {
    Header,
    Footer,
    Sider
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped>
#basic-layout .logo {
  height: 32px;
  background: rgba(32, 32, 32, 0.2);
  margin: 16px;
}
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font: 20px;
}
.trigger:hover {
  background-color: antiquewhite;
}
</style>