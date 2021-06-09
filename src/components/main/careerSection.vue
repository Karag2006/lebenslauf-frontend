<template>
    <div class="row career">
        <div class="col">
            <jobs-section :jobs="career.jobs"></jobs-section>
        </div>
        <div class="col">
            <studies-section :studies="career.studies"></studies-section>
            <school-section :school="career.school"></school-section>
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
        career: Object
    }
}
</script>