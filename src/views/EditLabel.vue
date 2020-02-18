<template>
    <Layout>
        <div class="navBar">
            <Icons class="leftIcon" IconName="left"></Icons>
            <span class="title">编辑标签</span>
        </div>
        <div class="Note-wrapper">
            <Notes field-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
        <Buttons>删除标签</Buttons>
        </div>
    </Layout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TagsModel from "@/models/TagsModel";
    import Notes from "@/components/Notes.vue";
    import Buttons from "@/components/Buttons.vue";

    TagsModel.fetch();
    @Component({
        components: {Buttons, Notes}
    })
    export default class EditLabel extends Vue {
        name: "EditLabel" | undefined
        @Prop() xxx!: string

        created(): void {
            const id = this.$route.params.id
            const tags = TagsModel.data
            const tag = tags.filter(t => t.id === id)[0]
            if (tag) {
                return
            } else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        background: white;
        padding: 16px 14px;

        > .title {
            margin: 0 auto;
        }

        > .leftIcon {

        }


    }
    .Note-wrapper {
        margin-top: 8px;
        background: white;
    }
    .button-wrapper{
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>