<template>
    <div :class="messageClasses">
        <i class="close icon" v-if="dismissable" @click="this.show=false"></i>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            size: {},
            type: {},
            show: {
                default: true,
            },
            dismissable: {
                default: false,
            },
        },
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
