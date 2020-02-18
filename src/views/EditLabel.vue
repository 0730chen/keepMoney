<template>
    <Layout>
        <div class="navBar">
            <Icons class="leftIcon" IconName="left" @click="goBack"></Icons>
            <span class="title">编辑标签</span>
        </div>
        <div class="Note-wrapper">
            <Notes :value="tag.name" field-name="标签名" placeholder="请输入标签名" @update:value="updateTag"/>
        </div>
        <div class="button-wrapper">
            <Buttons @click="deleteTag">删除标签</Buttons>
        </div>
    </Layout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TagsModel from "@/models/TagsModel";
    import Notes from "@/components/Notes.vue";
    import Buttons from "@/components/Buttons.vue";
    import store from "@/store/index2";
    TagsModel.fetch();
    @Component({
        components: {Buttons, Notes}
    })
    export default class EditLabel extends Vue {
        name: "EditLabel" | undefined
        @Prop() xxx!: string;
        tag?: Tag = undefined

        created(): void {
           this.tag = store.findTag(this.$route.params.id);
            if (!this.tag) {
                this.$router.replace('/404')
            }
        }

        updateTag(name: string) {
            if (this.tag) {
               store.updateTag(this.tag.id,name)
            }
        }

        deleteTag() {
            if (this.tag) {
                if (store.removeTag(this.tag.id)) {
                    this.$router.back()
                } else {
                    window.alert('删除失败')
                }
            }
        }

        goBack() {
            this.$router.back()
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

    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>