<template>
    <div>
        <label class="notes">
            <span class="name">{{this.fieldName}}</span>
            <input type="text" :placeholder="placeholder" :value="value" @input="onValueChange($event.target.value)">
        </label>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        name: "Notes" | undefined;
        @Prop({default:''}) readonly  value!: string
        @Prop(Number) xxx: number | undefined;
        @Prop({required: true}) fieldName!: string;
        @Prop() placeholder!: string

        @Watch('value')
        onValueChange(val: string) {
            this.$emit('update:value', val)
        }
    }
</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
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
            height: 40px;
        }
    }
</style>