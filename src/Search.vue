<template>
    <div class="ui search">
        <div :class="searchClasses">
            <input :name="name" class="prompt" type="text" :placeholder="placeholder" v-model="value">
            <slot></slot>
        </div>
        <div class="results"></div>
    </div>
</template>

<script>
    import _ from 'underscore'

    export default {
        model: {
            prop: 'model',
            event: 'input'
        },
        data() {
            return {
                value: this.model,
            }
        },
        props: {
            name: {},
            model: {},
            url: {},
            local: {},
            searchDelay: {
                default: 100,
            },
            placeholder: {
                default: 'Search...',
            },
            fields: {
                type : Object,
                default: () => {}
            },
            sanitize: {
                default: function(response) {
                    return response
                }
            },
            auth: {
                type: Object,
                default: () => {
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
            settings : {
                type : Object,
                default: () => {}
            }
        },

        mounted() {
            const $this = this,
                searchOptions = _.extend({}, {
                    onSelect(result) {
                        $this.$emit('select', result)
                    },
                    searchDelay: this.searchDelay,
                }, this.settings)

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
                    action: typeof this.action !== 'undefined' ? true : false,
                    fluid: typeof this.fluid !== 'undefined' ? true : false,
                    icon: typeof this.icon !== 'undefined' ? true : false,
                    disabled: typeof this.disabled !== 'undefined' && this.disabled === true ? true : false,
                }
            },
        },
        watch: {
            value() {
                this.$emit('input', this.value)
            },
            model() {
                this.value = this.model
            }
        },
    }
</script>
