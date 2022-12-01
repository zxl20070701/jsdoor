<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="index-view">
    <div class="menu">
      <h1>Jsdoor 官方文档</h1>
      <h2>Web开发</h2>
      <router-link to="/"> 开始 </router-link>
      <router-link to="treeLayout"> 树布局算法 </router-link>
      <router-link to="resizeElement"> 监听节点大小改变 </router-link>
      <router-link to="Matrix4"> 列主序存储的4x4坐标变换矩阵 </router-link>
      <router-link to="value"> 字符串表达式解析 </router-link>
      <h2>辅助开发</h2>
      <router-link to="server"> 开发服务器 </router-link>
    </div>
    <div class="content">
      <header>
        <div class="tips">
          如果希望我们未来提供你想要的内容，可以
          <a href="https://github.com/zxl20070701/jsdoor/issues" target="_blank"
            >点击此处</a
          >
          告诉我们哦～
        </div>
        <a href="https://github.com/zxl20070701/jsdoor" target="_blank">
          仓库地址
        </a>
        <a href="https://www.npmjs.com/package/jsdoor" target="_blank">
          发布地址
        </a>
        <a href="https://github.com/zxl20070701" target="_blank"> 开发者 </a>
      </header>
      <div class="page" id="doc-view-id">
        <router-view class="doc-view" v-quick-menu></router-view>
        <div class="fixed-nav">
          <nav id="fixed-menu-id"></nav>
          <div class="link">
            <a
              href="https://zxl20070701.github.io/notebook/"
              class="notebook"
              target="_blank"
            >
              快速查询笔记
            </a>
            <a
              href="https://zxl20070701.github.io/toolbox/"
              class="toolbox"
              target="_blank"
            >
              实用工具箱
            </a>
            <a
              href="https://github.com/zxl20070701/laboratory"
              class="laboratory"
              target="_blank"
            >
              实验项目
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-view {
  display: flex;
  height: 100vh;
  & > div {
    &.menu {
      background-color: #f9f9f9;
      flex-basis: 260px;
      flex-shrink: 0;
      overflow: auto;
      & > h1 {
        font-size: 18px;
        margin-top: 20px;
        line-height: 40px;
        padding-left: 90px;
        background-image: url("./logo.png");
        background-position: 30px center;
        background-size: 50px auto;
        background-repeat: no-repeat;
      }
      & > h2 {
        margin: 0 30px;
        margin-top: 20px;
        font-size: 16px;
        padding: 10px 0;
        border-top: 1px solid #ebe9e9;
      }
      & > a {
        display: block;
        margin-top: 10px;
        margin-left: 30px;
        font-size: 14px;
        color: #817e7e;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &.content {
      flex-grow: 1;
      position: relative;
      & > header {
        position: absolute;
        width: 100%;
        height: 60px;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1;
        text-align: right;
        padding-right: 100px;
        & > div {
          &.tips {
            font-size: 13px;
            color: #ffffff;
            background-color: #59bbc6;
            position: fixed;
            user-select: none;
            width: 500px;
            line-height: 30px;
            height: 30px;
            text-align: center;
            left: calc(50% - 250px);
            top: 10px;
            text-align: center;
            & > a {
              color: #000000;
              text-decoration: underline;
              margin: 0 5px;
            }
          }
        }
        & > a {
          line-height: 60px;
          color: #000000;
          margin-left: 20px;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            font-weight: 800;
          }
        }
      }
      & > div {
        &.page {
          height: 100%;
          padding-top: 60px;
          padding-right: 260px;
          overflow: auto;
          & > div {
            &.fixed-nav {
              position: fixed;
              right: 0;
              bottom: 0;
              width: 260px;
              height: calc(100vh - 80px);
              display: flex;
              flex-direction: column;
              & > nav {
                flex-grow: 1;
                border-left: 1px solid rgb(202, 198, 198);
                overflow: auto;
              }
              & > div {
                &.link {
                  flex-basis: 160px;
                  text-align: center;
                  flex-shrink: 0;
                  & > a {
                    display: inline-block;
                    text-align: left;
                    width: 80%;
                    height: 60px;
                    line-height: 60px;
                    margin-top: 15px;
                    background-size: auto 60%;
                    background-position: 20px center;
                    background-repeat: no-repeat;
                    font-size: 14px;
                    padding-left: 70px;
                    &:not(.laboratory) {
                      background-color: #f9f9f9;
                      border-width: 0 1px;
                      border-color: rgb(240, 226, 226);
                      border-style: solid;
                      color: gray;
                      &:hover {
                        border-radius: 5px;
                        outline: 1px solid rgb(202, 199, 199);
                      }
                    }
                    &.notebook {
                      background-image: url("./notebook.png");
                    }
                    &.toolbox {
                      background-image: url("./toolbox.png");
                    }
                    &.laboratory {
                      width: 100px;
                      height: 100px;
                      position: fixed;
                      right: 0;
                      bottom: 200px;
                      font-size: 0;
                      background-size: auto 100%;
                      background-position: center center;
                      background-image: url("./laboratory.png");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
