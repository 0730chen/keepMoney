<template>
    <div>
        <ul class="types">
            <li class="types-item" v-for="(item,index) in dataSource" :key="index" @click="select(item)"
                :class="{[classPrefix+'-item']:classPrefix,selected:item.value === value}"
            >{{item.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    type DataSourceItem = {
        text: string;
        value: string;
    }

    @Component
    export default class Tabs extends Vue {
        name: "Tabs" | undefined
        @Prop({required: true, type: Array}) dataSource!: DataSourceItem[]
        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string | undefined;
        type: string | undefined

        select(item: DataSourceItem) {
            this.$emit('update:value', item.value)
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        background: rgb(249, 219, 99);;
        display: flex;
        text-align: center;
        font-size: 24px;

        &-item {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 64px;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;

            }
        }
    }

</style>