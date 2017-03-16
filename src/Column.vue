<template>
    <div :class="columnClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            width: {},
        },
        computed: {
            columnClasses() {
                const classes = {
                    ui: true,
                    column:true,
                }
                if (typeof this.width !== 'undefined') {
                    classes[this.width] = true
                    classes.wide = true
                }
                return classes
            },
        },
    }
</script>
