<template>
    <div class="c_overlay" :class="{ 'c_overlay--active': isActive }" v-show="isActive">
        <div class="c_overlay__mask" @click="closeOverlay"></div>
        <div class="c_overlay__content">
            <div class="c_overlay__content__inner" v-if="isActive">
                <slot></slot>
            </div>
            <div class="c_overlay__content__close icon_close" @click="closeOverlay">Close</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { isActive: false };
        },
        created() {
            VueEvent.$on('show-overlay', (id) => {
                this.isActive = (id === this.overlayId);

                this.$nextTick(function () {
                    if (window.lazy !== undefined) {
                        window.lazy.updateLoad('.c_overlay--active');
                    }
                });
            });
        },
        mounted() {
            this.isActive = this.active;
        },
        props: {
            active: { default: false },
            overlayId: { type: String, required: true },
        },
        methods: {
            closeOverlay() {
                this.isActive = false;
                VueEvent.$emit('hide-overlay');
            }
        },
    }
</script>

<style lang="scss">
    <%- include(paths.css.src + 'automated/_colors.scss') %>
    <%- include(paths.css.src + 'base/_mixins.scss') %>

    $_mq_overlay_1: 700px;
    .c_overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50000;

        @at-root #{&}__mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparentize($color_black_raw, .6);
        }
        @at-root #{&}__content {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: $color_white;
            box-sizing: border-box;

            @at-root #{&}__inner {
                max-height: calc(100vh - 40px);
                overflow: auto;
            }
            @at-root #{&}__close {
                @include hide_text;
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
                width: 40px;
                height: 40px;
                background-color: lighten($color_black_raw, 90);
                background-size: 20px 20px;

                @include mq($_mq_overlay_1) {
                    top: -10px;
                    right: -10px;
                }
            }

            @include mq($_mq_overlay_1) {
                width: 80%;
                height: auto;
                background-color: transparent;
            }
        }
    }
</style>