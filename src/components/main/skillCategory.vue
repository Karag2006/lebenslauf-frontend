<template>
    <div class="abilities--group">
        <h3 class="abilities--group--title"> {{skillGroup.title}} </h3>
        <skill-item
            v-for="item in skillGroup.items"
            :key="item.id"
            :item="item"    
        ></skill-item>
    </div>
</template>

<script>
import skillItem from './skillItem.vue'

export default {
    components:{
        skillItem
    },
    props:{
        skillGroup: Object
    }
}
</script>