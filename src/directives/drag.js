// 拖拽
import Vue from "vue";

const drag = Vue.directive("drag", {
  bind: function (el, binding) {
    if (el.getAttribute("class") === "dialog-wrapper") {
      el = document.getElementsByClassName("dialog-wrapper")[0].children[0];
    }
    const tag = el;

    tag.onmousedown = (e) => {
      const disX = e.clientX - tag.offsetLeft;
      const disY = e.clientY - tag.offsetTop;

      const tagWidth = tag.offsetWidth;
      const tagHeight = tag.offsetHeight;

      const screenWidth = window.innerWidth;// 浏览器窗口文档显示区的高度
      const screenHeight = window.innerHeight;
      const maxDragLeft = screenWidth - tagWidth;
      const maxDragTop = screenHeight - tagHeight;

      document.onmousemove = (e) => {
        if (maxDragLeft > 0 && maxDragTop > 0) {
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          if (left < 0) {
            left = 0;
          }
          if (top < 0) {
            top = 0;
          }
          if (left > maxDragLeft) {
            left = maxDragLeft
          }
          if (top > maxDragTop) {
            top = maxDragTop
          }
          tag.style.left = left + "px";
          tag.style.top = top + "px";
          tag.style.position = "absolute";
          tag.style.cursor = "all-scroll";
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
});

export default drag;
