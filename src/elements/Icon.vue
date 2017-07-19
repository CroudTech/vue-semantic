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
                    bordered: typeof this.bordered !== 'undefined' && this.bordered !== false,
                    fitted: typeof this.fitted !== 'undefined' && this.fitted !== false,
                    link: typeof this.link !== 'undefined' && this.link !== false,
                    loading: typeof this.loading !== 'undefined' && this.loading !== false,
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
                    this.icon.split(" ").map((split) => {
                        classes[split] = true
                    })
                }

                return this.commonClasses(classes)
            },
        },
    }
</script>
