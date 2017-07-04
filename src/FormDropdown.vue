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

    export default {
        props: {
            options: {
                required: true,
            },
            value: {
                required: true,
            },
            placeholder: {},
            name: {},
            fluid: {},
            search: {},
            inline: {},
            multiple: {},
            disabled: {},
            full_text_search : {
                default : false
            },
            allow_additions : {
                default : false
            },
            value_field: {
                default: 'id',
            },
            title_field: {
                default: 'name',
            },
            settings : {
                type : Object,
                default: () => {}
            },
            autoUpdate: {
                default: true,
            },
        },

        computed: {
            dropdownClasses() {
                return {
                    ui: true,
                    selection: typeof this.inline !== 'undefined' ? false : true,
                    dropdown: true,
                    search: typeof this.search !== 'undefined' ? true : false,
                    fluid: typeof this.fluid !== 'undefined' ? true : false,
                    multiple: typeof this.multiple !== 'undefined' ? true : false,
                    inline: typeof this.inline !== 'undefined' ? true : false,
                    disabled: typeof this.disabled !== 'undefined' && this.disabled === true ? true : false,
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
