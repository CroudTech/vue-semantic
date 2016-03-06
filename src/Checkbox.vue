<template>
    <div :class="checkboxClasses">
        <input type="checkbox" v-model="model">
        <label>{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            model: {},
            label: {},
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
        },
    }
</script>
