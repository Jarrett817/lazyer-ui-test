<template>
  <ol>
    <h2>Button组件</h2>
    <h3>设置主题</h3>
    <li>
      <Button>default</Button>
      <Button theme="button">button</Button>
      <Button theme="link">link</Button>
      <Button theme="text">text</Button>
    </li>
    <br/>
    <h3>设置大小</h3>
    <li>
      <Button theme="link" size="big">bigSize</Button>
      <Button theme="link">default</Button>
      <Button size="small" theme="link">small</Button>
    </li>
    <br/>
    <h3>设置状态</h3>
    <li>
      <Button level="main">main</Button>
      <Button>default</Button>
      <Button level="danger">danger</Button>
    </li>
    <br/>
    <h3>波纹效果</h3>
    <li>
      <Button ripple>default-ripple</Button>
      <Button theme="link" ripple>link-ripple</Button>
      <Button theme="text" ripple>text-ripple</Button>
    </li>
    <br/>
    <h2>Switch组件</h2>
    <h3>设置主题</h3>
    <li>
      <Switch v-model:value="bool5"/>
      <Switch theme="trendy" v-model:value="bool6"/>
    </li>
    <br/>
    <h3>设置禁用</h3>
    <li>
      <Switch v-model:value="bool1" disabled/>
      <Switch v-model:value="bool2" disabled/>
    </li>
    <br/>
    <h3>禁用+主题</h3>
    <li>
      <Switch theme="trendy" v-model:value="bool1" disabled/>
      <Switch theme="trendy" v-model:value="bool2" disabled/>
    </li>
    <br/>
    <h3>设置加载状态</h3>
    <li>
      <Switch v-model:value="bool1" loading/>
      <Switch v-model:value="bool2" loading/>
    </li>
    <br/>
    <h3>加载状态+主题</h3>
    <li>
      <Switch theme="trendy" v-model:value="bool1" loading/>
      <Switch theme="trendy" v-model:value="bool2" loading/>
    </li>
    <br/>
    <h2>Dialog组件</h2>
    <li>
      <Button @click="showDialog">打开</Button>
      <Button @click="toggle">toggle</Button>
      <Dialog v-model:visible="x" :closeOnClickOverlay="true"
              :ok="f1" :cancel="f2">
        <template v-slot:content>
          <div>hello</div>
          <div>world</div>
        </template>
        <template v-slot:title>
          <strong>加粗标题</strong>
        </template>
      </Dialog>
    </li>
    <br/>
    <h2>Tabs组件</h2>
    <li>
      <Tabs v-model:selected="chosen">
        <Tab title="导航一">内容一</Tab>
        <Tab title="导航二">内容二</Tab>
      </Tabs>
    </li>
  </ol>
</template>

<script>
import {Button, Switch, Tab, Tabs, Dialog, openDialog} from 'lazyer-ui-1'
import 'lazyer-ui-1/dist/lib/lazyer.css'

export default {
  name: 'App',
  components: {
    Button, Switch, Tabs, Dialog, openDialog, Tab
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
