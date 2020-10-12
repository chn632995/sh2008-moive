<template>
    <div>
        <div class="detail">
            <div class="img">
                <img v-lazy="film.poster" />
            </div>
            <div>
                <div>{{ film.name }}</div>
                <div>{{ film.category }}</div>
                <div>{{ film.premiereAt | parsePremiereAt }}上映</div>
                <div>{{ film.nation }} | {{ film.runtime }} 分钟</div>
                <div>
                    {{ film.synopsis }}
                </div>
            </div>
            <div>
                <Swiper :key="'actors_' + film.actors.length">
                    <!-- 循环输出图片信息 -->
                    <div
                        v-for="(item, index) in film.actors"
                        :key="index"
                        class="swiper-slide"
                    >
                        <img v-lazy="item.avatarAddress" alt="" />
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
// 引入moment
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
    data() {
        return {
            film: {actors: []},
        };
    },
    async mounted() {
        let ret = await moiveDetailData(this.$route.params.filmId);
        this.film = ret.data.data.film;
    },
    filters: {
        parsePremiereAt: function(value) {
            // 时间戳的单位是秒，需要乘以1000转化成毫秒进行处理
            return moment(value * 1000).format("YYYY-MM-DD");
        },
    },
    components: {
        Swiper
    }
};
</script>

<style lang="scss" scoped>
.detail {
    .swiper-slide {
        img {
            width: 80px;
        }
    }
    .img {
        width: 100%;
        height: 260px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
