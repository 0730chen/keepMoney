<template>
    <Layout>
        <div class="navBar">
            <Icons IconName="left"></Icons>
            <span>编辑标签</span>
        </div>
        <Notes field-name="标签名" placeholder="请输入标签名"/>
        <Buttons>删除标签</Buttons>
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
        @Prop()xxx!: string
        created(): void {
            const id = this.$route.params.id
            const tags = TagsModel.data
            const tag = tags.filter(t=>t.id ===id)[0]
            if(tag){
                return
            }else{
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>
.navBar{
    display: flex;
    flex-direction: row;
    >span{
        margin: 0 auto;
    }
}
</style>