var Accordion = require('./src/Accordion.vue'),
    Checkbox = require('./src/Checkbox.vue'),
    Column = require('./src/Column.vue'),
    Divider = require('./src/Divider.vue'),
    Dropdown = require('./src/Dropdown.vue'),
    FormDropdown = require('./src/FormDropdown.vue'),
    Loading = require('./src/Loading.vue'),
    Message = require('./src/Message.vue'),
    Modal = require('./src/Modal.vue'),
    Popup = require('./src/Popup.vue'),
    Radiobutton = require('./src/Radiobutton.vue'),
    Reveal = require('./src/Reveal.vue'),
    Search = require('./src/Search.vue'),
    Statistic = require('./src/Statistic.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-accordion', Accordion);
        Vue.component('semantic-checkbox', Checkbox);
        Vue.component('semantic-column', Column);
        Vue.component('semantic-divider', Divider);
        Vue.component('semantic-dropdown', Dropdown);
        Vue.component('semantic-form-dropdown', FormDropdown);
        Vue.component('semantic-loader', Loading);
        Vue.component('semantic-message', Message);
        Vue.component('semantic-modal', Modal);
        Vue.component('semantic-popup', Popup);
        Vue.component('semantic-radio', Radiobutton);
        Vue.component('semantic-Reveal', Reveal);
        Vue.component('semantic-search', Search);
        Vue.component('semantic-statistic', Statistic);

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
