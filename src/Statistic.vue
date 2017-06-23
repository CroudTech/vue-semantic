<template>
    <div :class="segmentClasses">
        <div :class="statisticClasses">
            <div class="value">
                <i v-if="icon" :class="iconClasses"></i>
                <slot></slot>
            </div>
            <div class="label">
                {{ label }}
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Wrapper for the Seamntic statistic view
     *
     * @example ./SemanticStatistic.md
     * @see https://semantic-ui.com/views/statistic.html
     */
    export default {
        name: 'semantic-statistic',

        props: {
            /**
             * Colour of the statistic
             */
            colour: {
                type: String,
            },
            /**
             * Add Icon to statistic
             */
            icon: {
                type: String,
            },
            /**
             * Invert the colours
             */
            inverted: {
                type: Boolean,
            },
            /**
             * Size of the text in that stats box
             */
            size: {
                type: String,
            },
            /**
             * Statistic label
             */
            label: {
                type: String,
                required: true,
            },
        },

        computed: {
            segmentClasses() {
                const classes = {
                    ui: true,
                    fluid: true,
                    center: true,
                    aligned: true,
                    padded: true,
                    segment: true,
                    basic: !this.colour && !this.inverted,
                }

                if (this.colour) {
                    classes[this.colour] = true
                }

                if (this.inverted) {
                    classes.inverted = true
                }

                return classes
            },

            iconClasses() {
                const classes = {
                    small: true,
                    icon: true,
                }

                if (this.colour && !this.inverted) {
                    classes[this.colour] = true
                }

                if (this.icon) {
                    classes[this.icon] = true
                }

                return classes
            },

            statisticClasses() {
                const classes = {
                    ui: true,
                    statistic: true,
                }

                if (this.colour && !this.icon && !this.inverted) {
                    classes[this.colour] = true
                }

                if (this.inverted) {
                    classes.inverted = true
                }

                if (this.size) {
                    classes[this.size] = true
                }

                return classes
            },
        },
    }
</script>
