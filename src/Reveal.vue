<template>
    <div class="ui move reveal">
        <div class="visible content">
            <slot name="visible"></slot>
        </div>
        <div class="hidden content">
            <slot name="hidden"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
