<template>
    <div :class="messageClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [
            'size',
            'type',
        ],
        computed: {
            messageClasses() {
                return {
                    'ui': true,
                    'message': true,
                    'success': this.type === 'success',
                    'warning': this.type === 'warning',
                    'error': this.type === 'error',
                    'small': this.size === 'small',
                    'large': this.size === 'large',
                };
            },
        },
    }
</script>
