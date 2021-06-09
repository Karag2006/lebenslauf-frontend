<template>
    <main class="content">
        <skill-section :skills="main.skills"></skill-section>
        <career-section :career="main.career"></career-section>
    </main>
</template>

<script>
import SkillSection from './SkillSection.vue'
import careerSection from './careerSection.vue'

export default {
    components:{
        SkillSection,
        careerSection
    },
    props: {
        main: Object,
    }
}
</script>