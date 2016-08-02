
<template>
<span>
    <pre>{{field_value | json}}</pre>
    <pre>{{data | json}}</pre>
    <div class="ui form">
    <div class="grouped fields">
      <div class="field" v-for="option in data">
        <div class="ui radio checkbox">
          <input type="radio" name="{{field_name}}" class="native" @click.prevent="checkOption(option.value)">
          <label>{{{option.label}}}</label>
        </div>
      </div>
    </div>
  </div>
</span>

</template>

<script>

export default {

      props: {
        element_id: {},
        field_name: {},
        field_value: {},
        data: {}
    },

    methods: {
        checkOption(value) {
            this.field_value = value;
        }
    },
    computed: {
        isChecked(value) {
            return this.field_value == value;
        }
    }
}

</script>
