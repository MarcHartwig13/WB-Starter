<template>
    <div class="vue_accordion">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: []
            };
        },
        props: {
            accordionId: { required: true },
        },
        created() {
            this.tabs = this.$children;

            VueEvent.$on('tab-selected', (accordionId, tab) => {
                if (accordionId === this.accordionId) {
                    this.selectTab(tab);
                }
            });
        },
        methods: {
            selectTab(selectedTabTitle) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.title === selectedTabTitle);
                });
            }
        }
    }
</script>