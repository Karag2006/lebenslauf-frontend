<template>
    <div class="school">
        <h4 class="school--title"> {{school.title}} </h4>
        <school-item
            v-for="item in school.schoolItems"
            :key="item.id"
            :item="item"
        ></school-item>
    </div>
</template>

<script>
import schoolItem from './schoolItem.vue'
export default {
    components:{
        schoolItem
    },
    props:{
        school: Object
    }
}
</script>