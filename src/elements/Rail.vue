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
                    internal: typeof this.internal !== 'undefined',
                    very: typeof this.very !== 'undefined',
                    close: typeof this.close !== 'undefined',
                    divided: typeof this.divided !== 'undefined',
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
