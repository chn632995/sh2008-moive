<template>
    <div>
        <van-index-bar :index-list="indexList" highlight-color="red">
            <template v-for="(item, index) in dataList">
                <van-index-anchor :index="item.index" :key="index" style="background:#eee" />
                <van-cell
                    @click="chooseCity(sub.name)"
                    v-for="(sub, key) in item.data"
                    :title="sub.name"
                    :key="key"
                />
            </template>
        </van-index-bar>
    </div>
</template>

<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import 'vant/lib/index.css';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data() {
        return {
            dataList: [],
            indexList: [],
        };
    },
    // 进入的时候去掉底部导航
    created() {
        this.eventBus.$emit("footernav", false);
    },
    // 出来的时候显示底部导航
    beforeDestroy() {
        this.eventBus.$emit("footernav", true);
    },
    async mounted() {
        let ret = await cityListData(); //dataList, indexList
        this.dataList = ret[0];
        this.indexList = ret[1];
    },
    methods: {
        chooseCity: function(cityName) {
            console.log(cityName);
        },
    },
};
</script>
