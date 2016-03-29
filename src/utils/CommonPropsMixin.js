module.exports = {
    props: {
        colour: {},
        size: {},
        inverted: {},
        disabled: {},
        circular: {},
        loading: {},
    },

    methods: {
        commonClasses: function(classes) {
            classes.inverted = typeof this.inverted !== 'undefined'
            classes.disabled = typeof this.disabled !== 'undefined'
            classes.circular = typeof this.circular !== 'undefined'
            classes.loading = typeof this.loading !== 'undefined'

            if (typeof this.colour !== 'undefined') {
                classes[this.colour] = true
            }

            if (typeof this.size !== 'undefined') {
                classes[this.size] = true
            }
            return classes
        },
    },
}
