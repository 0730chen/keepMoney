<template>
    <Layout>
        <div class="title">
            <Icons IconName="left"></Icons>
            <span>编辑标签</span>
        </div>
    </Layout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TagsModel from "@/models/TagsModel";

    TagsModel.fetch()
    @Component
    export default class EditLabel extends Vue {
        name: "EditLabel" | undefined

        created(): void {
            const id = this.$route.params.id
            const tags = TagsModel.data
            const tag = tags.filter(t=>t.id ===id)[0]
            if(tag){
                console.log(tag);
            }else{
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: row;
    >span{
        margin: 0 auto;
    }
}
</style>