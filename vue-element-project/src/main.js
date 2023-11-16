import { createApp } from 'vue' // 从包中导入createApp函数,也就是Vue的实例化方法
import ElementPlus from 'element-plus'  // 导入element-plus
import 'element-plus/dist/index.css'    // 导入element-plus的css文件
import App from './App.vue'     // 导入App.vue组件
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // 导入element-plus的中文语言包


const app = createApp(App)  // 创建Vue实例

app.use(ElementPlus,{locale:zhCn})    // 使用element-plus
app.mount('#app')       // 挂载到id为app的元素上