<template>
    <div class="ui search">
        <div class="ui input">
            <input class="prompt" type="text" placeholder="Add User">
        </div>
        <div class="results"></div>
    </div>
</template>

<script>
    export default {
        props: {
            url: {},
        },

        ready() {
            const $this = this
            $(this.$el).search({
                apiSettings: {
                    url: this.url,
                },

                fields: {
                    results: 'data',
                    title: 'name',
                },

                onSelect(result) {
                    $this.$dispatch('user', result)
                },
            })
        }
    }
</script>
