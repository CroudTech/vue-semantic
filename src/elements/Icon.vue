<template>
    <i :class="iconClasses"></i>
</template>

<script>
    import CommonProps from '../utils/CommonPropsMixin'
    export default {
        props: {
            bordered: {},
            fitted: {},
            flipped: {},
            icon: {},
            link: {},
            rotated: {},
        },

        mixins: [
            CommonProps,
        ],

        computed: {
            iconClasses() {
                const classes = {
                    bordered: typeof this.bordered !== 'undefined',
                    fitted: typeof this.fitted !== 'undefined',
                    link: typeof this.link !== 'undefined',
                    loading: typeof this.loading !== 'undefined',
                    icon: true,
                }

                if (typeof this.flipped !== 'undefined') {
                    classes[this.flipped] = true
                    classes['flipped'] = true
                }

                if (typeof this.rotated !== 'undefined') {
                    classes[this.rotated] = true
                    classes['rotated'] = true
                }

                if (typeof this.icon !== 'undefined') {
                    classes[this.icon] = true
                }

                return this.commonClasses(classes)
            },
        },
    }
</script>
