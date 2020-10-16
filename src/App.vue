<template>
    <div id="app">
        <FooterNav v-if="is_show"></FooterNav>
        <router-view />
    </div>
</template>

<script>
// 导入需要使用组件
import FooterNav from "@/components/FooterNav";
export default {
    data() {
        return {
            is_show: true
        }
    },
    components: {
        FooterNav,
    },
    created() {
        this.eventBus.$on('footernav',(mark) => {
            this.is_show = mark
        })  
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    touch-action: none;
    height: 100%;
    ul,
    li {
        list-style: none;
    }
}
</style>