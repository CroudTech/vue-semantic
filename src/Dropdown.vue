<template>
<div :id="element_id" class="ui fluid search selection dropdown">
    <input type="hidden" :name="name" :value="selection">
    <i class="dropdown icon"></i>
    <div class="default text">{{default_text}}</div>
    <div class="menu dropdown_menu">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {

    props: {
        name: {},
        selection: {},
        element_id: {
            default : 'dropdown',
        },
        default_text: {
            default : 'Choose an option',
        },
        transition: {
            default : 'fade down'
        },
        full_text_search : {
            default : false
        },
    },
    mounted() {
        $(`#${this.element_id}`).dropdown({
            transition: this.transition,
            fullTextSearch : this.full_text_search,
            onChange: (value, text, $choice) => {
                if (this.selection) this.selection = value;
                this.$emit('dropdown-changed', value);
            }
        });
    }
}
</script>

<style>
.ui.fluid.dropdown,
.ui.search.dropdown>.menu {
    box-sizing: border-box;
}
</style>
