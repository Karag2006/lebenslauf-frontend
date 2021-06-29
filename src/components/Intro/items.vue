<template>
    <div class="intro--text">
        <text-item 
            v-for="item in items"
            :key="item.id"
            :item="item"
            :location="location + '.' + item.id">
        </text-item>
    </div>
</template>

<script>
import textItem from './singleItem.vue'
export default {
    components:{
        textItem
    },
    props:{
        items: Array,
        location: String
    }
}
</script>