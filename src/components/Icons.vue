<template>
    <div>
      <svg class="icon">
          <use :xlink:href="'#'+IconName"></use>
      </svg>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

    @Component
    export default class Icons extends Vue {
        @Prop() IconName: string | undefined;
        name: "Icons" | undefined
    }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>