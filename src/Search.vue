<template>
    <div class="ui search">
        <div class="ui input">
            <input class="prompt" type="text" :placeholder="placeholder">
        </div>
        <div class="results"></div>
    </div>
</template>

<script>
    export default {
        props: {
            url: {},
            placeholder: {
                default: 'Search...',
            },
            fields: {
                default: {}
            },
            sanitize: {
                default: function(response) {
                    return response
                }
            },
        },

        ready() {
            const $this = this
            $(this.$el).search({
                apiSettings: {
                    url: this.url,
                    onResponse: this.sanitize,
                },

                fields: this.fields,

                onSelect(result) {
                    $this.$dispatch('select', result)
                },
            })
        }
    }
</script>
