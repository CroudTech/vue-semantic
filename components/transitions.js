var Statistic = require('../src/Statistic.vue');

module.exports = {
    install: function (Vue, options) {
        
        if (!$.fn.transition) return;

        var emphasis = [
            'flash',
            'shake',
            'pulse',
            'tada',
            'bounce',
            'jiggle',
        ]

        var appearance = [
            'slide up',
            'slide down',
            'vertical flip',
            'horizontal flip',
            'fade',
            'fade up',
            'fade down',
            'scale',
            'drop',
            'browse',
        ]

        emphasis.forEach(function (animation) {
            var definition = {
                enter: function (el, done) {
                    $(el)
                        .transition('reset')
                        .transition(animation + ' in', 700, done)

                    return function() {
                        $(el).transition('stop')
                    }
                },

                leave: function (el, done) {
                    $(el)
                        .transition('reset')
                        .transition(animation + ' out', 700, done)

                    return function() {
                        $(el).transition('stop')
                    }
                }
            }

            Vue.transition(animation, definition)
        })

        appearance.forEach(function (animation) {
            var definition = {
                enter: function (el, done) {
                    $(el)
                        .transition('reset')
                        .transition(animation + ' in', 700, done)

                    return function() {
                        $(el).transition('stop')
                    }
                },

                leave: function (el, done) {
                    $(el)
                        .transition('reset')
                        .transition(animation + ' out', 700, done)

                    return function() {
                        $(el).transition('stop')
                    }
                }
            }
            var id = animation.split(' ').join('-')

            Vue.transition(id, definition)
        })
    },
}
