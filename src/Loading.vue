<template>
    <div :class="loadingClasses">{{ text }}</div>
</template>

<script>
    export default {
        props: {
            active: {
                default: true,
            },
            text: {
                default: 'Loading...',
            },
            size: {},
            inline: {},
            inverted: {},
            centered: {},
        },

        computed: {
            loadingClasses() {
                const classes = {
                    ui: true,
                    loader: true,
                    text: this.text ? true : false,
                    active: this.active ? true : false,
                    inline: typeof this.inline !== 'undefined' && this.inline !== false,
                    inverted: typeof this.inverted !== 'undefined' && this.inverted !== false,
                    centered: typeof this.centered !== 'undefined' && this.centered !== false,
                }

                if (this.size) {
                    classes[this.size] = true
                }

                return classes
            },
        },
    }
</script>
