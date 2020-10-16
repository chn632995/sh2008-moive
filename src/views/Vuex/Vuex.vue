<template>
    <div>
        {{ num }}
        {{ city }}
        {{getCount}}
        <br />
        <button @click="handle4()">点我+13</button>
        <button @click="handle5()">获取总数</button>
    </div>
</template>

<script>
// 按需导入mapState
import { mapState } from "vuex";
// 按需导入mapMutations
import { mapMutations } from "vuex";
// 按需导入mapActions
import { mapActions } from "vuex";
// 按需导入mapGetters
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            num: 1,
        };
    },
    mounted() {
        // 1. state直接获取对应的数据值
        console.log(this.$store.state.count);
        console.log(this.$store.state.city);
    },
    computed: {
        ...mapState(["count", "city"]),
        ...mapGetters(['getCount']),
    },
    methods: {
        ...mapMutations(["add"]),
        ...mapActions(["addAsync"]),
        handle1: function() {
            this.$store.commit("add", 13);
        },
        handle2: function() {
            this.add(13);
        },
        handle3: function() {
            this.$store.dispatch("addAsync", 31);
        },
        handle4: function() {
            this.addAsync(31);
        },
        handle5: function() {
            console.log(this.$store.getters.getCount);
        },
    },
};
</script>
