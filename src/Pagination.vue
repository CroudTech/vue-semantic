<template>
    <div class="ui pagination menu">
        <a v-if="currentPage > 1" class="icon item" @click="pageChanged(1)">
            <i class="left angle double icon"></i>
        </a>
        <a v-if="currentPage > 1" class="icon item" @click="pageChanged(currentPage - 1)">
            <i class="left angle icon"></i>
        </a>
        <a v-if="showPageRange" v-for="n in paginationRange" :class="activePage(n)" class="item" @click.prevent="pageChanged(n)">
            {{ n }}
        </a>
        <div v-if="!showPageRange"class="item">{{currentPage}} of {{totalPages}}</div>
        <a v-if="totalPages > currentPage" class="icon item" @click="pageChanged(currentPage + 1)">
            <i class="right angle icon" ></i>
        </a>
         <a v-if="totalPages > currentPage" class="icon item" @click="pageChanged(totalPages)">
            <i class="right angle double icon" ></i>
        </a>
         <div v-if="loading" class="icon item">
            <i class="notched circle loading icon"></i>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        currentPage: {
        type: Number,
        required: true,
    },
    totalPages: Number,
    itemsPerPage: Number,
    totalItems: Number,
    visiblePages: {
        type: Number,
        default: 5,
        coerce: (val) => parseInt(val),
    },
    loading: {
        default: false,
    },
    showPageRange: {
        default: false
    }
},

    data: function () {
        return {
        }
    },

    computed: {
        lastPage () {
            if (this.totalPages) {
                return this.totalPages
            } else {
                return this.totalItems % this.itemsPerPage === 0
                ? this.totalItems / this.itemsPerPage
                : Math.floor(this.totalItems / this.itemsPerPage) + 1
            }
        },

        paginationRange () {
            let start = this.currentPage - this.visiblePages / 2 <= 0
                        ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                        ? this.lowerBound(this.lastPage - this.visiblePages + 1, 1)
                        : Math.ceil(this.currentPage - this.visiblePages / 2)
                        let range = []
                        for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
                            range.push(start + i)
                        }
                        return range
            }
        },

    methods: {
        pageChanged (pageNum) {
            this.$emit('page-changed', pageNum)
        },

        activePage (pageNum) {
            return this.currentPage === pageNum ? 'active' : ''
        },

        lowerBound (num, limit) {
            return num >= limit ? num : limit
        },
    }
}

</script>
