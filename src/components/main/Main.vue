<template>
    <main class="content">
        <skill-section :location="location + '.skills'" :item="main.skills" :loggedIn="loggedIn"></skill-section>
        <career-section :location="location + '.career'" :item="main.career" :loggedIn="loggedIn"></career-section>
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
        loggedIn: Boolean,
        location: String
    }
}
</script>