<template>
    <div>
        <h1>logout</h1>
    </div>
</template>

<script>
export default {
    mounted() {},
    // 进入的时候去掉底部导航
    created() {
        this.eventBus.$emit("footernav", false);
    },
    // 出来的时候显示底部导航
    beforeDestroy() {
        this.eventBus.$emit("footernav", true);
    },
};
</script>
