<template>
  <ol>
    <h2>Button组件</h2>
    <h3>设置主题</h3>
    <li>
      <LazyerButton>default</LazyerButton>
      <LazyerButton theme="button">button</LazyerButton>
      <LazyerButton theme="link">link</LazyerButton>
      <LazyerButton theme="text">text</LazyerButton>
    </li>
    <br/>
    <h3>设置大小</h3>
    <li>
      <LazyerButton  size="big">bigSize</LazyerButton>
      <LazyerButton >default</LazyerButton>
      <LazyerButton size="small" >small</LazyerButton>
    </li>
    <br/>
    <h3>设置状态</h3>
    <li>
      <LazyerButton level="main">main</LazyerButton>
      <LazyerButton>default</LazyerButton>
      <LazyerButton level="danger">danger</LazyerButton>
    </li>
    <br/>
    <h3>波纹效果</h3>
    <li>
      <LazyerButton ripple>default-ripple</LazyerButton>
      <LazyerButton theme="link" ripple>link-ripple</LazyerButton>
      <LazyerButton theme="text" ripple>text-ripple</LazyerButton>
    </li>
    <br/>
    <h2>Switch组件</h2>
    <h3>设置主题</h3>
    <li>
      <LazyerSwitch v-model:value="bool5"/>
      <LazyerSwitch theme="trendy" v-model:value="bool6"/>
    </li>
    <br/>
    <h3>设置禁用</h3>
    <li>
      <LazyerSwitch v-model:value="bool1" disabled/>
      <LazyerSwitch v-model:value="bool2" disabled/>
    </li>
    <br/>
    <h3>禁用+主题</h3>
    <li>
      <LazyerSwitch theme="trendy" v-model:value="bool1" disabled/>
      <LazyerSwitch theme="trendy" v-model:value="bool2" disabled/>
    </li>
    <br/>
    <h3>设置加载状态</h3>
    <li>
      <LazyerSwitch v-model:value="bool1" loading/>
      <LazyerSwitch v-model:value="bool2" loading/>
    </li>
    <br/>
    <h3>加载状态+主题</h3>
    <li>
      <LazyerSwitch theme="trendy" v-model:value="bool1" loading/>
      <LazyerSwitch theme="trendy" v-model:value="bool2" loading/>
    </li>
    <br/>
    <h2>Dialog组件</h2>
    <li>
      <lazyer-button @click="showDialog">show</lazyer-button>
      <lazyer-button @click="toggle">toggle</lazyer-button>
      <lazyer-dialog v-model:visible="x" :closeOnClickOverlay="true"
                     :ok="f1" :cancel="f2">
        <template v-slot:content>
          <div>hello</div>
          <div>world</div>
        </template>
        <template v-slot:title>
          <strong>加粗标题</strong>
        </template>
      </lazyer-dialog>
    </li>
    <br/>
    <h2>Dropdown组件</h2>
    <li>
      <LazyerDropdown>
        <template v-slot:title>Hover me</template>
        <template v-slot:content>
          <LazyerMenuItem key="1" @click="sayHi"><a href="javascript:;">1st menu item</a></LazyerMenuItem>
          <LazyerMenuItem key="2"><a href="javascript:;">2st menu item</a></LazyerMenuItem>
          <LazyerMenuItem key="3"><a href="javascript:;">3st menu item</a></LazyerMenuItem>
          <LazyerMenuItem key="4"><a href="javascript:;">4st menu item</a></LazyerMenuItem>
        </template>
      </LazyerDropdown>
    </li>
    <br/>
    <h2>Tabs组件</h2>
    <li>
      <LazyerTabs v-model:selected="chosen">
        <LazyerTabsItem title="导航一">内容一</LazyerTabsItem>
        <LazyerTabsItem title="导航二">内容二</LazyerTabsItem>
        <LazyerTabsItem title="这是导航二">内容二</LazyerTabsItem>
      </LazyerTabs>
    </li>
    <br/>

  </ol>
</template>

<script>
import {
  LazyerButton,
  LazyerSwitch,
  LazyerTabsItem,
  LazyerTabs,
  LazyerDialog,
  openDialog,
  LazyerDropdown,
  LazyerMenuItem
} from 'lazyer-ui-1'
import 'lazyer-ui-1/dist/lib/lazyer.css'

export default {
  name: 'App',
  components: {
    LazyerButton, LazyerSwitch, LazyerTabs, LazyerDialog, openDialog, LazyerTabsItem, LazyerDropdown, LazyerMenuItem
  },
  data() {
    return {
      bool1: false,
      bool2: true,
      bool5: false,
      bool6: true,
      x: false,
      chosen: '导航一'
    }
  },
  methods: {
    showDialog() {
      openDialog({
        title: "标题",
        content: "hello",
        ok() {

        },
        cancel() {
        }
      })
    },
    toggle() {
      console.log(this.x);
      this.x = !this.x;
    },
    f1() {
      return false;
    },
    f2() {
    },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
