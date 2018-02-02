<template>
    <div :class="dropdownClasses">
        <input type="hidden" :name="name" v-model="value">
        <div class="default text">{{ placeholder }}</div>
        <i class="dropdown icon"></i>
        <div class="menu dropdown_menu">
            <slot></slot>
            <div v-for="option in items" class="item" :data-value="option.id" :data-text="option.name">{{ option.name}}</div>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore'

    /**
     * Semantic Dropdown optimised for use in Forms
     *
     * @see https://semantic-ui.com/modules/dropdown.html#/definition
     * @example ./SemanticFormDropdown.md
     */
    export default {
        name: 'semantic-form-dropdown',

        props: {
            /**
             * Dropdown options
             */
            options: {
                type: Array,
                required: true,
            },

            /**
             * v-model alias
             */
            value: {
                type: String | Number,
                required: true,
            },

            /**
             * Placeholder text
             */
            placeholder: {
                type: String,
                default: '',
            },

            /**
             * Input name attribute
             */
            name: {
                type: String,
                default: '',
            },

            /**
             * Fluid styling flag
             */
            fluid: {
                type: Boolean,
            },

            /**
             * Search dropdown flag
             */
            search: {
                type: Boolean,
            },

            /**
             * Inline styling flag
             */
            inline: {
                type: Boolean,
            },

            /**
             * Multiple dropdown flag
             */
            multiple: {
                type: Boolean,
            },

            /**
             * Disabled dropdown flag
             */
            disabled: {
                type: Boolean,
            },

            /**
             * Allow full text search in dropdown
             */
            full_text_search : {
                type: Boolean,
                default : false
            },

            /**
             * Allow additions on multiple dropdowns
             */
            allow_additions : {
                default : false
            },

            /**
             * Field of options objects to use as the **value**
             */
            value_field: {
                default: 'id',
            },

            /**
             * Field of options objects to show in the dropdown as the **text**
             */
            title_field: {
                default: 'name',
            },

            /**
             * Additional semantic dropdown settings
             * @see https://semantic-ui.com/modules/dropdown.html#/settings
             */
            settings : {
                type : Object,
                default: () => {}
            },

            /**
             * Update the dropdown if the v-model or options change
             */
            autoUpdate: {
                type: Boolean,
                default: true,
            },

            /**
             * Reload the dropdown if options change
             */
            autoUpdateOptions: {
                type: Boolean,
                default: true,
            },
        },

        computed: {
            dropdownClasses() {
                return {
                    ui: true,
                    selection: typeof this.inline === 'undefined' || !this.inline,
                    dropdown: true,
                    search: typeof this.search !== 'undefined' && this.search !== false,
                    fluid: typeof this.fluid !== 'undefined' && this.fluid !== false,
                    multiple: typeof this.multiple !== 'undefined' && this.multiple !== false,
                    inline: typeof this.inline !== 'undefined' && this.inline !== false,
                    disabled: typeof this.disabled !== 'undefined' && this.disabled !== false,
                }
            },

            items() {
                return this.options.map((option) => {
                    return {
                        id: option[this.value_field],
                        name: option[this.title_field],
                    }
                })
            },
        },

        methods : {
            loadDropdown () {

                const settings = _.extend({}, {
                    allowAdditions : this.allow_additions,
                    fullTextSearch : this.full_text_search,
                    onChange : (value, text, $choice) => {
                        this.$emit('input', value)
                        this.$emit('dropdown-selected', value)
                    }
                }, this.settings)

                $(this.$el).dropdown(settings)
            }
        },

        mounted() {
            this.loadDropdown()
        },

        watch: {
            value() {
                if (!this.autoUpdate) return
                this.$nextTick(() => {
                    this.loadDropdown()
                })
            },
            options() {
                if (!this.autoUpdateOptions) return
                this.$nextTick(() => {
                    this.loadDropdown()
                })
            },
        },

        events: {
            'clear-dropdown'() {
                $(this.$el).dropdown('clear')
            }
        },
    }
</script>
