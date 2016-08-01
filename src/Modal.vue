<template>
    <div :class="modalClasses">
        <i v-if="settings.closeable && settings.closeable_button"  class="close icon"></i>
        <slot name="header">
            <div v-if="title" class="header">
                {{{ title }}}
            </div>
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

    export default {
        props: {
            title: {
                type: String,
            },
            size: {
                type: String,
            },
            icon: {
                type: String,
            },
            active: {
                type: Boolean,
                default: false,
            },
            approve: {
                type: Function,
            },
            deny: {
                type: Function,
            },
            observeChanges: {
                default: true,
            },
            settings : {
                type: Object,
                default: {}
            }
        },

        events : {
            'refresh-modal' : function() {
                $(this.$el).modal("refresh");
            }
        },

        computed: {
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
                return {
                    image: true,
                    content: true,
                }
            },
        },

        methods: {
            hide() {
                this.active = false
            },
        },

        ready() {
            const $this = this
            const settings = _.extend({
                onHide: $this.hide.bind($this),
                onApprove: $this.approve ? $this.approve : function() {
                    $this.active = false
                },
                onDeny: $this.deny ? $this.deny : function() {
                    $this.active = false
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
