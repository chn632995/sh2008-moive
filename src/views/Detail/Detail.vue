<template>
    <div>
        <div class="detail">
            <div class="img">
                <img :src="film.poster" />
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
        </div>
    </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
// 引入moment
import moment from "moment";
export default {
    data() {
        return {
            film: {},
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
};
</script>

<style lang="scss" scoped>
.detail {
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
