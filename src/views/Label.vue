<template>
    <Layout>
        <div class="tags">
            <router-link v-for="item in tags" :key="item.id" :to="`/label/edit/${item.id}`" class="tag">
                <span>{{item.name}}</span>
                <Icons IconName="right"/>
            </router-link>
        </div>
        <div class="newTags-wrapper">
            <Buttons @click="createTag">新建标签</Buttons>
        </div>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Buttons from "@/components/Buttons.vue";
    import createTag from "@/mixins/CreateTag";
    import {mixins} from "vue-class-component";
    import CreateTag from "@/mixins/CreateTag";

    @Component({
        components: {Buttons},
    })
    export default class Label extends mixins(CreateTag) {
        name: "Label" | undefined;

        get tags() {
            return this.$store.state.TagList
        }

        created(): void {
            this.$store.commit('initTagList')
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

    .newTags-wrapper {
        text-align: center;
        margin-top: 44-16px;
    }


</style>