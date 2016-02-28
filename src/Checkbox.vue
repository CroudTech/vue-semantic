

<template>

<div class="ui checkbox">
    <input type="checkbox" class="native" id="{{element_id}}" name="{{field_name}}}}" value="{{field_value}}" v-model="is_checked">
    <label>{{field_label}}</label>
</div>

</template>

<script>

export default {
    props: ['element_id', 'field_name', 'field_label', 'field_value', 'is_checked'],
    data() {
        return {
            element_id: '',
            field_name: '',
            field_label: '',
            field_value: '',
            is_checked: ''
        }
    }
}

</script>
