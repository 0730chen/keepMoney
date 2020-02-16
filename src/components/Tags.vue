<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="items">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        name: "Tags" | undefined
    }
</script>

<style lang="scss" scoped>
    .tags {
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;

        > .items {
            display: flex;
            flex-wrap: wrap;

            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>