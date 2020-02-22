<template>
    <Layout>
        <Types class="x" :value.sync="yyy" class-prefix="static"></Types>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Types from "@/components/Types.vue";

    @Component({
        components: {Types}
    })
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
        yyy = '-'
    }
</script>

<style lang="scss" scoped>
    ::v-deep .static-item {
        background: white;
        &.selected {
            background: #c4c4c4;
            &::after {
                display: none;
            }
        }
    }
</style>