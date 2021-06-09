<template>
    <div class="jobs--item">
        <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
        <p>{{item.occupation}}</p>
        <ul>
            <job-work-item
                v-for="workItem in item.work"
                :key="workItem.id"
                :item="workItem"
            ></job-work-item>
        </ul>
    </div>
</template>

<script>
import jobWorkItem from './jobWorkItem.vue'
export default {
    components:{
        jobWorkItem
    },
    props:{
        item: Object
    }
}
</script>