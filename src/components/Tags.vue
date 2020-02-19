<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="items">
            <li v-for="tag in tagList" :key="tag.id" :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TagsModel from "@/models/TagsModel";
    @Component({
        computed:{
            tagList(){
                return []
            }
        }
    })
    export default class Tags extends Vue {
        name: "Tags" | undefined
        // tagList = store.fetchTags();
        selectedTags: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value', this.selectedTags)
        }

        create() {
            const name = window.prompt('请输入标签');
            if (name === '' || name === null) {
                window.alert('标签不能为空')
            } else {
                // store.createTag(name)
            }
        }
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
        background: white;

        > .items {
            display: flex;
            flex-wrap: wrap;

            .selected {
                background: #00acec;
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