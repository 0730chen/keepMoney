<template>
    <div>
        <ul class="types">
            <li :class="{[classPrefix+`-item`]:classPrefix,selected:value ==='-'}" @click="SelectedTypes('-')">
                <Icons IconName="money"/>
                支出
            </li>
            <li :class="{[classPrefix+`-item`]:classPrefix,selected:value ==='+'}" @click="SelectedTypes('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        name: "Types" | undefined;
        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string | undefined;
        type: string | undefined

        SelectedTypes(type: string) {
            if (this.value !== '-' && this.value !== '+') {
                throw new Error('type is unknow')
            }
            this.$emit('update:value', type);
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        border: 1px solid black;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
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