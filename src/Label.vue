<template>
    <div :class="labelClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            colour: {},
            size: {},
            pointing: {},
            corner: {},
            ribbon: {},
            attached: {},
            basic: {},
            circular: {},
            floating: {},
            tag: {},
        },

        computed: {
            labelClasses() {
                const classes = {
                    ui: true,
                    basic: typeof this.basic !== 'undefined' && this.basic !== false,
                    circular: typeof this.circular !== 'undefined' && this.circular !== false,
                    floating: typeof this.floating !== 'undefined' && this.floating !== false,
                    tag: typeof this.tag !== 'undefined' && this.tag !== false,
                    label: true,
                }

                if (typeof this.colour !== 'undefined') {
                    classes[this.colour] = true
                }

                if (typeof this.size !== 'undefined') {
                    classes[this.size] = true
                }

                if (typeof this.pointing !== 'undefined') {
                    classes['pointing'] = true
                    classes[this.pointing] = true
                }

                if (typeof this.corner !== 'undefined') {
                    classes[this.corner] = true
                    classes['corner'] = true
                }

                if (typeof this.ribbon !== 'undefined') {
                    classes[this.ribbon] = true
                    classes['ribbon'] = true
                }

                if (typeof this.attached !== 'undefined') {
                    this.attached.split(" ").map((split) => {
                        classes[split] = true
                    })
                    classes['attached'] = true
                }

                return classes
            },
        },
    }
</script>
