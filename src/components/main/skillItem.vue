<template>
    <div class="ability--item">
        <p class="ability--name">{{item.name}}</p>
        <skill-level :level="item.level"></skill-level>  
    </div>
</template>

<script>
import skillLevel from './skillLevel.vue'
export default {
    components:{
        skillLevel
    },
    props:{
        item: Object
    }
}
</script>