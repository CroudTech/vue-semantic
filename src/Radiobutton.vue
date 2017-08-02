<template>
    <div class="ui form">
        <div class="grouped fields">
            <div class="field" v-for="option in data">
                <div :class="radioButtonClasses">
                    <input type="radio" :name="name" :value="option.value" v-model="radioValue" :disabled="disabled">
                    <label @click="toggle(option.value)">{{option.label}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'model'
        },
        
        props: {
            model: {
                required: true,
            },
            data: {
                required: true,
            },
            disabled: {},
            type: {
                default: 'radio',
            },
            name: {},
        },
        data: function() {
            return {
                radioValue: this.model        
            };
        },

        mounted() {
            this.radioValue = this.model
        },

        methods: {
            toggle(value) {
                if (!this.disabled)
                this.radioValue = value
            }
        },

        watch: {
            radioValue(val) {
                this.$emit('radio', val)
                this.$emit('input', val)
            }
        },
        computed: {
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
