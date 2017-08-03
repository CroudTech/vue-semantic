<template>
    <div class="ui form">
        <div class="fields" :class="{[formType]: true}">
            <slot></slot>
            <div class="field" v-for="option in options" :key="option.value">
                <div :class="radioButtonClasses">
                    <input type="radio" :name="name" :value="option.value" v-model="radioValue" :disabled="disabled">
                    <label @click="toggle(option.value)">{{option.label}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Semantic Radio button component
     * 
     * @see https://semantic-ui.com/modules/checkbox.html#radio
     * @example ./SemanticRadiobutton.md
     */
    export default {
        name: 'semantic-radiobutton',

        model: {
            prop: 'model'
        },
        
        props: {
            /**
             * Alias for v-model
             */
            model: {
                type: String | Number,
                required: true,
            },

            /**
             * Array of radio option objects in {value: 1, label: 'One'} format.
             * 
             * Also now maps to a Croud data friendly {id: 1, name: 'One'} format.
             */
            data: {
                type: Array,
                required: true,
            },

            /**
             * Disabled flag
             */
            disabled: {
                type: Boolean,
            },

            /**
             * Radio button type
             */
            type: {
                default: 'radio',
            },

            /**
             * The type of the field wrapper, grouped | inline
             */
            formType: {
                type: String,
                default: 'grouped',
            },

            /**
             * Input html name attribute
             */
            name: {
                type: String,
                default: '',
            },
        },

        methods: {
            toggle(value) {
                if (!this.disabled)
                this.radioValue = value
            }
        },

        computed: {
            options() {
                return this.data.map((option) => {
                    option.value = option.value || option.id
                    option.label = option.label || option.name

                    return option
                })
            },

            radioValue: {
                get() {
                    return this.model
                },
                set(val) {
                    this.$emit('selection-changed', val)
                    this.$emit('radio', val)
                    this.$emit('input', val)
                },
            },

            radioButtonClasses() {
                return {
                    ui: true,
                    radio: true,
                    checkbox: true,
                    disabled: typeof this.disabled !== 'undefined' && this.disabled !== false,
                    slider: this.type === 'slider',
                    toggle: this.type === 'toggle',
                }
            },
        },
    }

</script>
