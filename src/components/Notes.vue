<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        name: "Notes" | undefined
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