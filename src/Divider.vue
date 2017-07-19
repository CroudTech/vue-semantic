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
                    inverted: typeof this.inverted !== 'undefined' && this.inverted !== false,
                    fitted: typeof this.fitted !== 'undefined' && this.fitted !== false,
                    horizontal: typeof this.horizontal !== 'undefined' && this.horizontal !== false,
                    vertical: typeof this.vertical !== 'undefined' && this.vertical !== false,
                    hidden: typeof this.hidden !== 'undefined' && this.hidden !== false,
                    section: typeof this.section !== 'undefined' && this.section !== false,
                    divider: true,
                    header: typeof this.header !== 'undefined' && this.header !== false,
                }
            },
        },
    }
</script>
