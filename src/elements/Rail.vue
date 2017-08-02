<template>
    <div :class="railClasses">
        <div class="ui segment">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            very: {},
            internal: {},
            close: {},
            divided: {},
            side: {},
        },

        computed: {
            railClasses() {
                const classes = {
                    ui: true,
                    internal: typeof this.internal !== 'undefined' && this.internal !== false,
                    very: typeof this.very !== 'undefined' && this.very !== false,
                    close: typeof this.close !== 'undefined' && this.close !== false,
                    divided: typeof this.divided !== 'undefined' && this.divided !== false,
                    rail: true,
                }

                if (typeof this.side !== 'undefined') {
                    classes[this.side] = true
                }

                return classes
            },
        },
    }
</script>
