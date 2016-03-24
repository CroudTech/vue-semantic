<template>
    <div :class="dropdownClasses">
        <input type="hidden" v-model="model">
        <div class="default text"></div>
        <i class="dropdown icon"></i>
        <div class="menu dropdown_menu">
            <div v-for="option in items" class="item" data-value="{{ option.id }}" data-text="{{ option.name }}">{{ option.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                required: true,
            },
            model: {
                required: true,
            },
            fluid: {},
            search: {},
            inline: {},
            multiple: {},
            allow_additions : {
                default : false
            },
            value_field: {
                default: 'id',
            },
            title_field: {
                default: 'name',
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

        ready() {
            $(this.$el).dropdown({
                allowAdditions : this.allow_additions
            })
        },

        watch: {
            model() {
                $(this.$el).dropdown({
                    allowAdditions : this.allow_additions
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
