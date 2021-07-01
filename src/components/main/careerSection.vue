<template>
    <div class="row career">
        <div class="col">
            <jobs-section :item="item.jobs" :location="location + '.jobs'" :loggedIn="loggedIn"></jobs-section>
        </div>
        <div class="col">
            <studies-section :item="item.studies" :location="location + '.studies'" :loggedIn="loggedIn"></studies-section>
            <school-section :item="item.school" :location="location + '.school'" :loggedIn="loggedIn"></school-section>
        </div>
    </div>
</template>

<script>
import jobsSection from './jobs.vue'
import studiesSection from './studies.vue'
import schoolSection from './school.vue'

export default {
    components:{
        jobsSection,
        studiesSection,
        schoolSection
    },
    props:{
        item: Object,
        location: String,
        loggedIn: Boolean
    }
}
</script>