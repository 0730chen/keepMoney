import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class CreateTag extends Vue {
    createTag() {
        const name = window.prompt('请输入标签');
        if (name === '' || name === null) {
            window.alert('标签不能为空')
        } else {
            this.$store.commit('createTag',name);
            this.$store.commit('saveTag')
        }
    }
}

export default  CreateTag
