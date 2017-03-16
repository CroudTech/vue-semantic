<template>
    <div :class="checkboxClasses">
        <input type="checkbox" v-model="checkboxValue" @change="notify">
        <label>{{ ( model && labelChecked ? labelChecked : label) }}</label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'model'
        },
        props: {
            model: {},
            label: {},
            labelChecked: {},
            disabled: {},
            type: {},
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
                    this.$emit('checkbox-clicked', !event.srcElement.checked, event);
                    this.$emit('input', event.srcElement.checked);
                })
            }
        }
    }
</script>
