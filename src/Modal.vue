<template>
    <div :class="modalClasses">
        <i v-if="showCloseIcon" class="close icon"></i>
        <slot name="header">
            <div v-if="title" class="header" v-html="title"></div>
        </slot>
        <div :class="contentClasses">
            <div v-if="icon" class="ui medium image">
                <i class="user icon"></i>
            </div>
            <div class="description">
                <slot></slot>
            </div>
        </div>
        <slot name="actions">
            <div v-if="approve || deny" class="actions">
                <div class="ui deny button">
                    Cancel
                </div>
                <div class="ui yellow approve right labeled icon button">
                    Continue
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
    import _ from 'underscore'


    /**
     * Semantic Modal Component
     * @example ./SemanticModal.md
     */
    export default {
        name: 'semantic-modal',

        model: {
            prop: 'active',
        },

        props: {
            /**
             * The title displayed in the top bar of the modal
             */
            title: {
                type: String,
            },

            /**
             * The size of the modal
             * @see https://semantic-ui.com/modules/modal.html#size
             */
            size: {
                type: String,
            },

            /**
             * Show image content
             * @see https://semantic-ui.com/modules/modal.html#image-content
             */
            icon: {
                type: String,
            },

            /**
             * State of the modal, alias for v-model
             */
            active: {
                type: Boolean,
                default: false,
            },

            /**
             * Pass through function to show and handle **Continue** CTA button
             */
            approve: {
                type: Function,
            },

            /**
             * Pass through function to show and handle **Cancel** button
             */
            deny: {
                type: Function,
            },

            /**
             * Whether any change in modal DOM should automatically refresh cached positions
             */
            observeChanges: {
                type: Boolean,
                default: true,
            },

            /**
             * Additional custom settings
             * @see https://semantic-ui.com/modules/modal.html#/settings
             */
            settings : {
                type: Object,
                default: () => {}
            }
        },

        events : {
            'refresh-modal' : function() {
                $(this.$el).modal("refresh");
            }
        },

        computed: {
            // closeable is closable in semantic ui
            showCloseIcon()
            {
                return this.settings && this.settings.closable_button || this.settings.closeable_button
            },
            modalClasses() {
                return {
                    ui: true,
                    small: this.size === 'small',
                    large: this.size === 'large',
                    fullscreen: this.size === 'fullscreen',
                    long: true,
                    modal: true,

                }
            },
            contentClasses() {
                if (this.settings && this.settings.content_classes)
                    return this.settings.content_classes

                return {
                    image: true,
                    content: true,
                }
            },
        },

        methods: {
            hide() {
                this.$emit('input', false)
                this.$emit('close-modal', false)
            },
        },

        mounted() {
            const $this = this
            const settings = _.extend({
                onHide: $this.hide.bind($this),
                onApprove: $this.approve ? $this.approve : function() {
                    $this.$emit('input', false)
                },
                onDeny: $this.deny ? $this.deny : function() {
                    $this.$emit('input', false)
                },
                onVisible: function () {
                    $(this.$el).modal("refresh");

                },
                 observeChanges: this.observeChanges,
            }, this.settings)

            $(this.$el).modal(settings);
        },

        watch: {
            active() {
                $(this.$el).modal("refresh").modal('toggle')
            },
        },
    }
</script>
