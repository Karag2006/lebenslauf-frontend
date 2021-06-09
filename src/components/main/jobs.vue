<template>
    <div class="jobs">
        <h4 class="jobs--title"> {{jobs.title}} </h4>
        <job-item
            v-for="item in jobs.jobItems"
            :key="item.id"
            :item="item"
        ></job-item>
    </div>
</template>

<script>
import jobItem from './jobItem.vue'
export default {
    components: {
        jobItem
    },
    props: {
        jobs: Object
    }
}
</script>