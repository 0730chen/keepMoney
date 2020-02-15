<template>
    <div>
        NotFound当前页面不存在
        <router-link to="/money">返回首页</router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class NotFound extends Vue {
        name: "NotFound" | undefined
    }
</script>

<style lang="scss" scoped>

</style>