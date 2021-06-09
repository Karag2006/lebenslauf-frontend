<template>
    <div class="studies">
        <h4 class="studies--title"> {{studies.title}} </h4>
        <studies-item
            v-for="item in studies.studiesItems"
            :key="item.id"
            :item="item"
        ></studies-item>
    </div>
</template>

<script>
import studiesItem from './studiesItem.vue'
export default {
    components: {
        studiesItem
    },
    props:{
        studies: Object
    }
}
</script>