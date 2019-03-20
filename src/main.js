import Vue from 'vue'
import './styles'
import './apis/mock'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAMap from 'vue-amap'
import App from './App.vue'

document.addEventListener('deviceready', () => {
  if (window.cordova) {
    Vue.cordova = Vue.prototype.$cordova = window.cordova
  }
  /* eslint-disable no-new */
  Vue.use(VueAMap);
  VueAMap.initAMapApiLoader({
    key: '6d1edfb5b9d7e883d152ac42ce5b89e1',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });
  
  Vue.use(ElementUI)

  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: require('./App').default },
    router: require('./router').default,
    store: require('./store').default
  })
}, false)
