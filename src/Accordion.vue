<template>
    <div class="ui accordion" :class="{ 'styled': styled, 'fluid': fluid}">
        <span v-for="item in items">
            <div class="title">
                <i class="dropdown icon"></i>
                {{ item.title }}
            </div>
            <div class="content">{{ item.content }}</div>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            items: {},
            openLast: {
                default: false,
            },
            styled: {
                default: true,
            },
            fluid: {
                default: true,
            },
            settings: {
                type: Object,
                default() {
                    return {};
                }
            },
        },
        data() {
            return {
            }
        },
        mounted() {
            $(this.$el).accordion(this.settings).accordion('open', this.openLast ? this.items.length -1 : 0)
        },
    }
</script>
