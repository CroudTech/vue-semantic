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
    /**
     * Wrapper for the Semantic Reveal
     *
     * @example ./SemanticReveal.md
     * @see https://semantic-ui.com/elements/reveal.html
     */
    export default {
        name: 'semantic-reveal',
    }
</script>
