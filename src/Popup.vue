

<template>
    <span>
        <a class="browse item">
            {{title}}
            <i class="dropdown icon"></i>
        </a>
        <div class="ui fluid popup bottom right transition hidden">
            <div class="column">
                <slot></slot>
            </div>
        </div>
    </span>
</template>

<script>

export default {
    props: ['title'],
    ready() {
        $('.menu .browse').popup({
            inline: true,
            hoverable: true,
            position: 'bottom right',
            delay: {
                show: 300,
                hide: 800
            }
        });
    },
}

</script>
