<template>
<el-container>
  <el-header>MysticFalls' travel assistant</el-header>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-main>
     <el-amap vid="amap" :plugin="plugin" class="amap-demo">
      </el-amap>
    </el-main>
  </el-container>
</el-container>
</template>

  <style>
    .el-container {
        height: 974px;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        font-size: 36px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
  </style>

  <script>
    // NPM 方式
    import VueAMap from 'vue-amap'
    // CDN 方式
    let amapManager = new VueAMap.AMapManager()
    export default {
        data () {
            let self = this;
            return {
                center: [121.59996, 31.197646],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                        if (result && result.position) {
                            self.lng = result.position.lng;
                            self.lat = result.position.lat;
                            self.center = [self.lng, self.lat];
                            self.loaded = true;
                            self.$nextTick();
                        }
                        });
                    }
                    }
                }]
            };
        }
    };
</script>