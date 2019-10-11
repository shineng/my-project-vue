<template>
  <div>
    主页
    {{defaultData.name}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      defaultData: {
        name: "",
        age: ""
      }
    };
  },
  mounted() {
    this.getDefautData();
  },
  methods: {
    getDefautData() {
      //https://blog.csdn.net/zhouzuoluo/article/details/80675662
      axios
        .get("/api/dashboard/index", { params: { ID: 123456 } })
        .then(response => {
          console.log(response.data);
          this.defaultData = {
            name: response.data.name,
            age: response.data.age
          };
        });
    }
  },
  components: {}
};
</script>

<style scoped>
</style>