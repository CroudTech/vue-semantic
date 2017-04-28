<template>
    <div class="ui search">
        <div :class="searchClasses">
            <input class="prompt" type="text" :placeholder="placeholder">
            <slot></slot>
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
                default() {
                    return {
                        token: false,
                        type: 'Bearer',
                        headerKey: 'Authorization',
                    }
                },
            },
            action: {},
            fluid: {},
            disabled: {},
            icon: {}
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
                        if($this.computedAuth.token !== false) {
                            xhr.setRequestHeader ($this.computedAuth.headerKey, `${$this.computedAuth.type} ${$this.computedAuth.token}`);
                        }
                        return xhr
                    },
                }
                searchOptions.fields = this.fields
            }

            $(this.$el).search(searchOptions)
        },
        computed: {
            computedAuth() {
                return $.extend({
                        token: false,
                        type: 'Bearer',
                        headerKey: 'Authorization',
                    }, this.auth);
            },
            searchClasses() {
                return {
                    ui: true,
                    input: true,
                    action: typeof this.action !== 'undefined' && this.action,
                    fluid: typeof this.fluid !== 'undefined'  && this.fluid,
                    icon: typeof this.icon !== 'undefined' && this.icon,
                    disabled: typeof this.disabled !== 'undefined' && this.disabled,
                }
            },
        }
    }
</script>
