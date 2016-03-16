<template>
    <div class="ui styled fluid accordion">
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
                default: {},
            },
        },

        ready() {
            if (this.openLast) {
                $(this.$el).accordion('open', this.items.length)
            } else {
                $(this.$el).accordion('open', 0)
            }
        },
    }
</script>
