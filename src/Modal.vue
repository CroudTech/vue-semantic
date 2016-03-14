<template>
    <div :class="modalClasses">
        <i class="close icon"></i>
        <div v-if="title" class="header">
            {{ title }}
        </div>
        <div :class="contentClasses">
            <div v-if="icon" class="ui medium image">
                <i class="user icon"></i>
            </div>
            <div class="description">
                <slot></slot>
            </div>
        </div>
        <div v-if="approve || deny" class="actions">
            <div class="ui deny button">
                Cancel
            </div>
            <div class="ui yellow approve right labeled icon button">
                Continue
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
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
        },

        computed: {
            modalClasses() {
                return {
                    ui: true,
                    small: this.size === 'small',
                    large: this.size === 'large',
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
            $(this.$el).modal({
                onHide: $this.hide.bind($this),
                onApprove: $this.approve ? $this.approve : function() {
                    $this.active = false
                },
                onDeny: $this.deny ? $this.deny : function() {
                    $this.active = false
                },
            });
        },

        watch: {
            active() {
                $(this.$el).modal('toggle')
            },
        },
    }
</script>
