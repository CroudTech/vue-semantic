<template>
    <div :class="dropdownClasses">
        <input type="hidden" v-model="model">
        <i class="dropdown icon"></i>
        <div class="default text"></div>
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
                    selection: true,
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
            $(this.$el).dropdown()
        },

        watch: {
            model() {
                $(this.$el).dropdown()
            },
        },
    }
</script>
