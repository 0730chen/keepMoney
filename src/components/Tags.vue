<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="items">
            <li v-for="tag in tagList" :key="tag.id" :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag.name}}
            </li>
        </ul>
        <div class="title">橘子记账</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {mixins} from "vue-class-component";
    import {CreateTag} from '@/mixins/CreateTag';

    @Component({})
    export default class Tags extends mixins(CreateTag) {
        name: "Tags" | undefined
        selectedTags: string[] = [];

        get tagList() {
            return this.$store.state.TagList
        }

        created(): void {
            this.$store.commit('initTagList')
        }

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value', this.selectedTags)
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        flex-grow: 1;
        font-size: 14px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        background: white;

        > .items {
            display: flex;
            flex-wrap: wrap;
            flex-grow: 1;
            padding: 16px 6px;

            .selected {
                background: rgb(249, 219, 99);
            }

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

        > .title {
            background: rgb(249, 219, 99);
            height: 30px;
            font-size: 16px;
            text-align: center;
            font-weight: 1000;
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding:0 8px;
            }
        }
    }
</style>