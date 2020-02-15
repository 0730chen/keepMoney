<template>
    <div>
        <div>
            <router-link to="/money">记账</router-link>
            <router-link to="/label">标签</router-link>
            <router-link to="/statistics">统计</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {
        name: "Nav" | undefined
    }
</script>

<style lang="scss" scoped>

</style>