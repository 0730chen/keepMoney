<template>
        <Layout>
            <div class="tags">
                <router-link v-for = "item in tags" :key="item.id" :to="`/label/edit/${item.id}`" class="tag">
                    <span>{{item.name}}</span>
                    <Icons IconName="right"/>
                </router-link>
            </div>
            <div class="newTags-wrapper">
                <button class="newTags" @click="creteTags">新增标签</button>
            </div>
        </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TagsModel from "@/models/TagsModel";

    TagsModel.fetch()
    @Component
    export default class Label extends Vue {
        name: "Label" | undefined
        tags = TagsModel.data

        creteTags() {
            const name = window.prompt('请输入标签名')
            if (name === '' || name === null) {
                window.alert('标签名不能为空')
            } else {
                const status = TagsModel.create(name)
                if(status ==='duplicated'){
                    window.alert('标签重复')
                }
                if(status ==='success'){
                    window.alert('创建成功')
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            border-bottom: 1px solid #e6e6e6;

            div {
                width: 24px;
                height: 24px;
                color: #666666;
                margin-right: 16px;
            }
        }
    }

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