<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icons IconName="money"/>
            记账
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
            <Icons IconName="label"/>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icons IconName="table"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    @Component
    export default class Nav extends Vue {
        name: "Nav" | undefined

    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/stylebasic.scss';

    nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        @extend %outerShadow;
        flex-direction: row;
        font-size: 12px;
        > .item {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon {
                width: 32px;
                height: 32px;
            }
        }
        > .item.selected{
            color: red;
        }
    }
</style>