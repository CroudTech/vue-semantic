import accordion from './src/Accordion.vue'
import checkbox from './src/Checkbox.vue'
import column from './src/Column.vue'
import divider from './src/Divider.vue'
import dropdown from './src/Dropdown.vue'
import formDropdown from './src/FormDropdown.vue'
import label from './src/Label.vue'
import loading from './src/Loading.vue'
import message from './src/Message.vue'
import modal from './src/Modal.vue'
import popup from './src/Popup.vue'
import radiobutton from './src/Radiobutton.vue'
import reveal from './src/Reveal.vue'
import search from './src/Search.vue'
import statistic from './src/Statistic.vue'

export default {
    install: function (Vue, options) {
        Vue.component('semantic-accordion', accordion);
        Vue.component('semantic-checkbox', checkbox)
        Vue.component('semantic-column', column)
        Vue.component('semantic-divider', divider)
        Vue.component('semantic-dropdown', dropdown)
        Vue.component('semantic-form-dropdown', formDropdown)
        Vue.component('semantic-label', label)
        Vue.component('semantic-loading', loading)
        Vue.component('semantic-message', message)
        Vue.component('semantic-modal', modal)
        Vue.component('semantic-popup', popup)
        Vue.component('semantic-radiobutton', radiobutton)
        Vue.component('semantic-reveal', reveal)
        Vue.component('semantic-search', search)
        Vue.component('semantic-statistic', statistic)
    },
}
