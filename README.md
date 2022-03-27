## Vue3 + Vite2
使用`Vue3.2 setup语法糖`开发个人的组件库，全面拥抱Vue3 ☑
## 使用
### 安装
```shell
npm i netx-ui
yarn add netx-ui
pnpm add netx-ui
```
### 全局注册
```vue
....
import NetXUI from 'netx-ui'
Vue.use(NetXUI)
import '../node_modules/netx-ui/dist/style.css'   // 这个bug  待修复 作者正在学习中~
// 这样会报错 找不到这个css文件
// import 'netx-ui/dist/style.css' 
...
```


<br>

## 组件

### 按钮(Button)

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger                        |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                         |
| mimicry  | Boolean          | 是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认为 false |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                           |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                         |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                         |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false                                  |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>

---

<br>

### 对话框(Dialog)

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visiable | Boolean | 对话框可见状态，默认为 false       |
| mimicry  | Boolean | 对话框是否为拟态风格，默认为 false |
| width    | String  | 对话框宽度，默认为 60%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---

<br>

### 输入框(Input)

<br>

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| placeholder  | String  | 占位符，默认为空字符串             |
| type         | String  | 表单类型，默认为'text'             |
| mimicry      | Boolean | 对话框是否为拟态风格，默认为 false |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |

<br>

### 切换(Switch)

<br>

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| mimicry       | Boolean | 对话框是否为拟态风格，默认为 false |
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| disabled      | Boolean | 是否禁用，默认为 false             |
| activeColor   | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6      |

<br>

| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

<br>

---

<br>

### 单选框(Radio)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 单选框组(RadioGroup)

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>

---

<br>

### 复选框(Checkbox)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 复选框组(CheckboxGroup)

<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

<br>

---

<br>

### 表单项(Form-item)

<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form)

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

<br>

---

<br>

### 轮播图(Carousel)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | -----------------------------------|
| duration| ms                        | 轮播时间，单位毫秒，默认2000ms      |
| autoplay| Boolean                   | 是否自动播放，默认为 true           |
| initial | Number                    | 初始显示第几个item，默认为0         |
| hasDirection| Boolean                    | 是否显示左右箭头，默认为true              |
| hasDot   | Boolean                    | 是否显示轮播图地下的小点，默认为true   |
| dotBgColor   | String                    | 小圆点为acitve时的颜色，默认为#008c8c   |

<br>
