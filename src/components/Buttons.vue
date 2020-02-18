<template>
    <button class="newTags" @click="$emit('click',$event)">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Buttons extends Vue {
        name!: "Buttons"
        @Prop() xxx!: string
    }
</script>

<style lang="scss" scoped>
    .newTags {
        background: #767676;
        color: white;
        border: none;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            margin-top: 44-16px;
        }
    }
</style>