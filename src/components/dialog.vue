<!-- dialog 弹窗 -->
<template>
    <div class="dialog-wrapper" v-if="showTemp" @click="close">
        <div class="dialog" @click="dialogClick">
            <div class="header">
                <div class="title">{{title}}</div>
                <div @click="close" class="close">X</div>
            </div>
            <div class="body">
                <slot></slot>
            </div>
            <div class="footer">
                <div @click="close" class="button cancel">取消</div>
                <div @click="confirm" class="button confirm">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["show", "title"],
  data() {
    return {
      showTemp: false
    };
  },
  watch: {
    show: {
      handler: function(val) {
        this.showTemp = val;
      },
      deep: true,
      immediate: true
    }
  },
  mounted(){
  },
  created() {
    this.showTemp = this.show;
   
  },
  methods: {
    dialogClick(event) {
      event.stopPropagation();
    },
    close() {
      this.$emit("close");
      event.stopPropagation();
    },
    confirm() {
      this.$emit("confirm");
    }
  }
};
</script>
<style scoped>
.dialog-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: blue;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  width: 50%;
  background-color: white;
  opacity: 1;
  padding: 20px 20px;
  position: relative;
}
.header {
  height: 45px;
}
.title {
  font-size: 24px;
  display: inline-block;
  float: left;
}
.close {
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  color: #ddd;
  float: right;
  cursor: pointer;
}
.body {
  padding: 30px 0;
}

.button {
  width: 96px;
  height: 36px;
  border: 1px solid #ddd;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.cancel {
  margin-right: 20px;
}
.confirm {
  background-color: #00a1fa;
  color: white;
}
</style>

