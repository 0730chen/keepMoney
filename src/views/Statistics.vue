<template>
    <Layout>
        <Tabs class="x" :value.sync="type" class-prefix="type" :data-source="typeList"></Tabs>
        <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"></Tabs>
        type:{{type}}
        <br/>
        interval:{{interval}}

    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Types from "@/components/Types.vue";
    import Tabs from "@/components/Tabs.vue";

    @Component({
        components: {Tabs, Types}
    })
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
        type = '-';
        interval = 'day';
        intervalList = [
            {text: '按天', value: 'day'},
            {text: '按周', value: 'week'},
            {text: '按月', value: 'month'}
        ];
        typeList = [
            {text: '支出', value: '-'},
            {text: '收入', value: '+'},
        ]
    }
</script>

<style lang="scss" scoped>
    ::v-deep .type-item {
        background: white;

        &.selected {
            background: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }
</style>