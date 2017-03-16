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
            local: {},
            searchDelay: {
                default: 100,
            },
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
            auth: {
                coerce (val) {
                    return $.extend({
                        token: false,
                        type: 'Bearer',
                        headerKey: 'Authorization',
                    }, val);
                },
                default() {
                    return {
                        token: false,
                        type: 'Bearer',
                        headerKey: 'Authorization',
                    }
                },
            },
        },

        mounted() {
            const $this = this,
                searchOptions = {
                    onSelect(result) {
                        $this.$emit('select', result)
                    },
                    searchDelay: this.searchDelay,
                }

            if (typeof this.local !== 'undefined') {
                searchOptions.source = this.local
            } else {
                searchOptions.apiSettings = {
                    url: this.url,
                    onResponse: this.sanitize,
                    beforeXHR (xhr) {
                        if($this.auth.token !== false) {
                            xhr.setRequestHeader ($this.auth.headerKey, `${$this.auth.type} ${$this.auth.token}`);
                        }
                        return xhr
                    },
                }
                searchOptions.fields = this.fields
            }

            $(this.$el).search(searchOptions)
        }
    }
</script>
