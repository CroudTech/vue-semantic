<template>
    <div :class="checkboxClasses">
        <input :name="name" type="checkbox" v-model="checkboxValue" @change="notify">
        <label @click="toggle">{{ ( model && labelChecked ? labelChecked : label) }}</label>
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
            name: {},
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
            },
            toggle(e) {
                this.$emit('input', !this.checkboxValue);
            }
        }
    }
</script>
