<template>
    <div class="ui form">
        <div class="grouped fields">
            <div class="field" v-for="option in data">
                <div class="ui radio checkbox">
                    <input v-model="model" type="radio" :value="option.value">
                    <label>{{{option.label}}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            model: {
                required: true,
                twoWay: true,
            },
            data: {
                required: true,
            },
        },
    }
</script>
