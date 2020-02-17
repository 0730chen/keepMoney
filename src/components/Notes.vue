<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注" v-model="value">
        </label>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        name: "Notes" | undefined;
        value = ''
        @Prop(Number)xxx: number|undefined
        @Watch('value')
        onValueChange(val: string){
            this.$emit('update:value',val)
        }
    }
</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
            height: 64px;
        }
    }
</style>