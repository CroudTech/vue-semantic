<template>
    <div :class="checkboxClasses">
        <input :name="name" type="checkbox" v-model="checkboxValue" @change="notify">
        <label @click="toggle">{{ ( model && labelChecked ? labelChecked : label) }}</label>
    </div>
</template>

<script>
    /**
    * Simple Semanitc Checkbox
    *
    * @example ./SemanticCheckbox.md
    */

    export default {
        name: 'SemanticCheckbox',

        model: {
            prop: 'model'
        },
        props: {
            /**
             * v-model to attach input to
             */
            model: {
                type: Boolean,
            },
            /**
             * Checkbox label
             */
            label: {
                type: String,
            },
            /**
             * @ignore
             */
            labelChecked: {},
            /**
             * Disable the checkbox
             */
            disabled: {},
            /**
             * Change the type of the checkbox
             */
            type: {
                type: String,
            },
            /**
             * Set input's Name Attr
             */
            name: {
                type: String,
            },
        },
        computed: {
            checkboxClasses() {
                return {
                    ui: true,
                    checkbox: true,
                    disabled: typeof this.disabled !== 'undefined',
                    slider: this.type === 'slider',
                    toggle: this.type === 'toggle',
                }
            },
            checkboxValue() {
                return this.model
            },
        },
        methods : {
            notify(event) {
                this.$nextTick(() => {
                    this.$emit('checkbox-clicked', !event.target.checked, event);
                    this.$emit('input', event.target.checked);
                })
            },
            toggle(e) {
                this.$emit('input', !this.checkboxValue);
            }
        }
    }
</script>
