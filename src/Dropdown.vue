<style>

.ui.fluid.dropdown,
.ui.search.dropdown>.menu {
    box-sizing: border-box;
}

</style>

<template>

<div v-bind:id="element_id" class="ui fluid search selection dropdown">
    <input type="hidden" v-bind:name="name" value="{{selection}}">
    <i class="dropdown icon"></i>
    <div class="default text">{{default_text}}</div>
    <div class="menu dropdown_menu">
        <slot></slot>
    </div>
</div>

</template>

<script>

export default {

    props: ['element_id', 'name', 'selection', 'default_text', 'transition', 'full_text_search'],

    data() {
        return {
            id: 'dropdown',
            selection: '',
            transition: 'fade down',
            default_text: 'Choose an option',
            full_text_search : true
        }
    },

    mounted() {
        this.$nextTick(() => {

            $('#' + this.element_id).dropdown({

                transition: this.transition,

                fullTextSearch: this.full_text_search,

                onChange: (value, text, $choice) => {

                    if (this.selection) this.selection = value;

                    this.$emit('dropdown-changed', value);
                }
            });
        })
    }
}

</script>
