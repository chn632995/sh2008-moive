<template>
    <div class="list">
        <Loading v-if="loading"></Loading>
        <!-- 展示数据 -->
        <div class="item" v-for="(item, index) in list" :key="index" @click="goDetail(item.filmId)">
            <div class="left">
                <img v-lazy="item.poster" />
            </div>
            <div class="middle">
                <div>{{ item.name }}</div>
                <div v-if="type == 1">
                    <span>观众评分 </span>
                    <span class="grade">{{ item.grade }}</span>
                </div>
                <div>主演：{{ item.actors | parseActors }}</div>
                <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
            </div>
            <div class="right">
                <span v-if="type == 1">购票</span>
                <span v-else>预购</span>
            </div>
        </div>
    </div>
</template>

<script>
// loading导入
import Loading from "@/components/Loading";
export default {
    data() {
        return {
            loading: true,
        };
    },
    props: ["list", "type"],
    components: {
        Loading,
    },
    created() {
        // 判断数据是否获取到，获取到之后去除loading组件
        if (this.list.length > 0) {
            this.loading = false;
        } else {
            this.loading = true;
        }
    },
    filters: {
        // 处理演员的数据，将主演的数据从数组形式转化成字符串形式以便输出
        parseActors: function(value) {
            let actors = "";
            value.forEach((element) => {
                actors += element.name + " ";
            });
            return actors;
        },
    },
    methods: {
        goDetail: function(filmId){
            this.$router.push({name: 'detail',params: {filmId}})
        }
    },
};
</script>

<style lang="scss" scoped>
.list {
    margin-bottom: 50px;

    .item {
        margin-top: 15px;
        padding-bottom: 15px;
        display: flex;
        color: #797d82;
        font-size: 13px;
        border-bottom: 1px solid #ededed;

        .left {
            width: 77px;
            height: 100px;
            margin-left: 20px;
            img {
                width: 66px;
                height: 100%;
            }
        }

        .middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 55%;

            div:nth-of-type(1) {
                color: #191a1b;
                font-size: 16px;
            }

            div:nth-of-type(3) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .grade {
                color: #ffb232;
                font-size: 14px;
            }
        }

        .right {
            width: 15%;
            display: flex;
            align-items: center;
            margin-right: 20px;

            span {
                border: 1px solid #ff5f16;
                background: white;
                color: #ff5f16;
                border-radius: 2px;
                height: 25px;
                line-height: 25px;
                font-size: 13px;
                width: 50px;
                text-align: center;
            }
        }
    }
}
</style>
