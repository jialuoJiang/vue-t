<!-- 分页 -->
<template>
  <div>
    <span>共{{this.totalNum}}条数据</span>
    <ul>
      <li @click="toFirstPage">第一页</li>
      <li @click="toPrePage">上一页</li>

      <li v-for="m in pageTotal" v-show="m<=lastPage && m>=firstPage" :key="m" :class="{current:m===pageTemp}" @click="toThisPage(m)">{{m}}</li>

      <li @click="toNextPage">下一页</li>
      <li @click="toLastPage">最后一页</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["pageNo", "pageSize", "totalNum"],
  data() {
    return {
      pageTotal: 0,
      thisPage: 1,
      pageTemp: 1,
      firstPage: 1,
      lastPage: 1
    };
  },
  watch: {
    pageNo: {
      handler: function(val) {
        console.log(val, "----in watch");
        this.pageTemp = val;

        if (this.pageTotal <= 10) {
          this.firstPage = 1;
          this.lastPage = this.pageTotal;
        } else {
          this.lastPage = this.pageTemp + 5;
          if (this.lastPage <= 10) {
            this.lastPage = 10;
          }
          if (this.lastPage > this.pageTotal) {
            this.lastPage = this.pageTotal;
          }
          this.firstPage = this.lastPage - 9;
        }
      }
    }
  },
  created() {
    this.pageTotal = Math.ceil(this.totalNum / this.pageSize);
    this.pageTemp = this.pageNo;
    if (this.pageTotal <= 10) {
      this.firstPage = 1;
      this.lastPage = this.pageTotal;
    } else {
      this.lastPage = this.pageTemp + 5;
      if (this.lastPage <= 10) {
        this.lastPage = 10;
      }
      if (this.lastPage > this.pageTotal) {
        this.lastPage = this.pageTotal;
      }
      this.firstPage = this.lastPage - 9;
    }

    console.log(this.firstPage, this.lastPage, "--00");
  },

  methods: {
    toLastPage() {
      this.pageTemp = this.pageTotal;
      this.$emit("pageNoChange", this.pageTemp);
    },
    toFirstPage() {
      this.pageTemp = 1;
      this.$emit("pageNoChange", this.pageTemp);
    },
    toThisPage(m) {
      this.pageTemp = m;
      this.$emit("pageNoChange", this.pageTemp);
    },
    toPrePage() {
      this.pageTemp = this.pageTemp - 1;
      if (this.pageTemp <= 0) {
        this.pageTemp = 1;
      }
      this.$emit("pageNoChange", this.pageTemp);
    },
    toNextPage() {
      this.pageTemp = this.pageTemp + 1;
      if (this.pageTemp > this.pageTotal) {
        this.pageTemp = this.pageTotal;
      }
      this.$emit("pageNoChange", this.pageTemp);
    }
  }
};
</script>
<style type="text/css" scoped>
li {
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px;
  border: 1px solid #e7eaed;
  cursor: pointer;
}
ul {
  display: inline-block;
}
.current {
  border: 1px solid #f85f59;
}
</style>
