<template>
    <div :class="loadingClasses">{{ text }}</div>
</template>

<script>
    /**
     * Wrapper for the Semantic Loader
     * 
     * @see https://semantic-ui.com/elements/loader.html
     * @example ./SemanticLoading.md
     */
    export default {
        name: 'semantic-loading',

        props: {
            /**
             * Whether to show the loader or not
             */
            active: {
                type: Boolean,
                default: true,
            },

            /**
             * Text displayed under the spinner
             */
            text: {
                type: String,
                default: 'Loading...',
            },

            /**
             * Size of the loader
             * @see https://semantic-ui.com/elements/loader.html#size
             */
            size: {
                type: String,
            },

            /**
             * Inline loader
             * @see https://semantic-ui.com/elements/loader.html#inline
             */
            inline: {
                type: Boolean,
            },

            /**
             * Inverted loader
             * @see https://semantic-ui.com/elements/loader.html#inverted
             */
            inverted: {
                type: Boolean,
            },

            /**
             * Center the loader
             * @see https://semantic-ui.com/elements/loader.html#inline-center
             */
            centered: {
                type: Boolean,
            },
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
