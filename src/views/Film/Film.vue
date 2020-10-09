<template>
    <div>
        <FilmListTopNav></FilmListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav'
export default {
    // 注册组件
    components: {
        FilmListTopNav
    }
}
</script>