<template>
    <div>
        <ul class="types">
            <li :class=" type ==='-' && 'selected'" @click="SelectedTypes('-')">支出</li>
            <li :class=" type ==='+' && 'selected'" @click="SelectedTypes('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue,Watch} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        name: "Types" | undefined;
        type = '-';
        @Prop(String) xxx: string | undefined
        SelectedTypes(type: string) {
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknow')
            }
            this.type = type
        }
        mounted(): void {
            console.log(this.xxx);
        }
        @Watch('type')
        onTypeChange(value: string){
            this.$emit('update:value',value)
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
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