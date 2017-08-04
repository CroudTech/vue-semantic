<template>
    <div :class="accordionClasses">
        <span v-for="item in items">
            <div class="title">
                <i class="dropdown icon"></i>
                {{ item.title }}
            </div>
            <div class="content">{{ item.content }}</div>
        </span>
    </div>
</template>

<script>
    /**
     * Wrapper for the Semantic UI Accordion
     *
     * @see https://semantic-ui.com/modules/accordion.html
     * @example ./SemanticAccordion.md
    */

    export default {
        name: 'semantic-accordion',

        props: {
            /**
             *  A list of Items to display in the Accordion
             */
            items: {
                type: Array,
                required: true,
            },
            
            /**
             *  Open the last Item in the Accordion by default as opposed to the first
             */
            openLast: {
                type: Boolean,
                default: false,
            },
            
            /**
             * Create Styled accordion
             * @see https://semantic-ui.com/modules/accordion.html#styled
             */
            styled: {
                type: Boolean,
                default: true,
            },
            
            /**
             * Create fluid accordion
             * @see https://semantic-ui.com/modules/accordion.html#fluid
             */
            fluid: {
                type: Boolean,
                default: true,
            },

            /**
             * Additional Config options
             * @see https://semantic-ui.com/modules/accordion.html#/settings
             */
            settings: {
                type: Object,
                default() {
                    return {};
                }
            },
        },
        data() {
            return {
            }
        },
        mounted() {
            $(this.$el).accordion(this.settings).accordion('open', this.openLast ? this.items.length -1 : 0)
        },
        computed: {
            accordionClasses() {
                return {
                    ui: true,
                    accordion: true,
                    fluid: typeof this.fluid !== 'undefined' && this.fluid !== false,
                    styled: typeof this.styled !== 'undefined' && this.styled !== false,
                }
            },
        }
    }
</script>
