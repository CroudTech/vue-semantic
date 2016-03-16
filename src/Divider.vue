<template>
    <div :class="dividerClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            fitted: {},
            header: {},
            hidden: {},
            horizontal: {},
            inverted: {},
            section: {},
            vertical: {},
        },

        computed: {
            dividerClasses() {
                return {
                    ui: true,
                    inverted: typeof this.inverted !== 'undefined',
                    fitted: typeof this.fitted !== 'undefined',
                    horizontal: typeof this.horizontal !== 'undefined',
                    vertical: typeof this.vertical !== 'undefined',
                    hidden: typeof this.hidden !== 'undefined',
                    section: typeof this.section !== 'undefined',
                    divider: true,
                    header: typeof this.header !== 'undefined',
                }
            },
        },
    }
</script>
