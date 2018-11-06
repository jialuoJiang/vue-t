<template>
  <div>
    <table-item :tableTitle="tableTitle1" :data="list"></table-item>
    <pagination-item :pageSize="pageSize1" :pageNo="pageNo1" :totalNum="totalNum1" @pageNoChange="pageNoChange"></pagination-item>
    <table-item :tableTitle="tableTitle2" :data="list2"></table-item>
    <pagination-item :pageSize="pageSize2" :pageNo="pageNo2" :totalNum="totalNum2" @pageNoChange="pageNoChange2"></pagination-item>
    <button @click="showOrHide">点击出现或隐藏dialog </button>
    <dialog-item :show="show" @close="closeDialog" @confirm="confirm" :title="'提示'">
      <span>小白不太白</span>
    </dialog-item>
    <button @click="showPwdDialog">修改密码</button>
    <dialog-item :show="showChangePwd" @close="closeChangePwd" @confirm="confirmChange" :title="'修改密码'" ref="baibai" v-drag>
      <h3>rerege</h3>
      <h3>rerege</h3>
      <h3>rerege</h3>
      <h3>rerege</h3>

      <h3>rerege</h3>
      <h3>rerege</h3>
      <h3>rerege</h3>
           <h3>rerege</h3>
                <h3>rerege</h3>
                     <h3>rerege</h3>
    </dialog-item>

    <input type="text" v-focus>
    <div v-drag style="width:200px;height:40px;border:2px solid red;background-color:yellow;">拖拽</div>
  </div>
</template>
<script>
import PaginationItem from "@/components/pagination";
import TableItem from "@/components/table";
import DialogItem from "@/components/dialog";

import focus from "@/directives/focus";
import drag from "@/directives/drag";
export default {
  directives: {
    focus,
    drag
  },
  components: {
    PaginationItem,
    TableItem,
    DialogItem
  },

  data() {
    return {
      show: false,
      showChangePwd: false,
      tableTitle1: ["姓名", "技能", "性别", "类别", "ces"],
      tableTitle2: ["姓名", "技能", "性别"],
      list: [],
      List: [
        {
          name: "宫本武藏",
          ability: "二刀流",
          gender: "男",
          type: "战士"
        },
        {
          name: "沈梦溪",
          ability: "正常操作",
          gender: "男",
          type: "法师"
        },
        {
          name: "李白",
          ability: "青莲剑歌",
          gender: "男",
          type: "刺客"
        },
        {
          name: "刘备",
          ability: "身先士卒",
          gender: "男",
          type: "战士"
        },
        {
          name: "鲁班七号",
          ability: "无敌鲨嘴炮",
          gender: "男",
          type: "射手"
        },
        {
          name: "庄周",
          ability: "蝴蝶效应",
          gender: "男",
          type: "辅助"
        },
        {
          name: "王昭君",
          ability: "寒冰禁锢",
          gender: "女",
          type: "法师"
        },
        {
          name: "孙尚香",
          ability: "红莲炮弹",
          gender: "女",
          type: "射手"
        },
        {
          name: "大桥",
          ability: "漩涡之门",
          gender: "女",
          type: "辅助"
        },
        {
          name: "元歌",
          ability: "无间傀儡",
          gender: "男",
          type: "刺客"
        },
        {
          name: "夏侯惇",
          ability: "不羁之刃",
          gender: "男",
          type: "战士/坦克"
        },
        {
          name: "东皇太一",
          ability: "日蚀祭典",
          gender: "男",
          type: "坦克"
        },

        {
          name: "虞姬",
          ability: "楚歌起",
          gender: "女",
          type: "射手"
        },
        {
          name: "杨玉环",
          ability: "长恨歌",
          gender: "女",
          type: "辅助"
        },
        {
          name: "姜子牙",
          ability: "湮灭",
          gender: "男",
          type: "辅助"
        },

        {
          name: "元歌",
          ability: "无间傀儡",
          gender: "男",
          type: "刺客"
        }
      ],
      List2: [
        {
          name: "张三",
          ability: "吃饭",
          gender: "男"
        },
        {
          name: "李四",
          ability: "睡觉",
          gender: "男"
        },
        {
          name: "王五",
          ability: "游戏",
          gender: "男"
        },
        {
          name: "刘备",
          ability: "11111",
          gender: "男"
        },
        {
          name: "鲁班七号",
          ability: "11111",
          gender: "男"
        },
        {
          name: "庄周",
          ability: "做梦",
          gender: "男"
        },
        {
          name: "丽柏",
          ability: "理发",
          gender: "女"
        }
      ],
      pageSize1: 1,
      pageNo1: 1,
      totalNum1: 0,
      pageNo2: 1,
      pageSize2: 3,
      totalNum2: 0
    };
  },
  created() {
    this.totalNum1 = this.List.length || 0;
    this.totalNum2 = this.List2.length || 0;
    this.initList(1, this.pageSize1);
    this.initList2(1, this.pageSize2);
  },

  methods: {
    showPwdDialog() {
      this.showChangePwd = !this.showChangePwd;
    },
    closeChangePwd() {
      this.showChangePwd = false;
    },
    confirmChange() {
      // console.log('----一些动作')
      this.showChangePwd = false;
    },
    confirm() {
      // console.log("---一些动作");
      this.show = false;
    },
    closeDialog() {
      this.show = false;
    },
    showOrHide() {
      this.show = !this.show;
    },
    pageNoChange(val) {
      this.pageNo1 = val;
      this.initList(val, this.pageSize1);
    },
    pageNoChange2(val) {
      this.pageNo2 = val;
      this.initList2(val, this.pageSize2);
    },
    initList(no, size) {
      this.list = this.List.slice((no - 1) * size, no * size);
    },
    initList2(no, size) {
      this.list2 = this.List2.slice((no - 1) * size, no * size);
    }
  }
};
</script>
<style>
</style>
