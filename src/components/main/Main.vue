<template>
    <main class="content">
        <skill-section :skills="main.skills"></skill-section>
    </main>
</template>

<script>
import SkillSection from './SkillSection.vue'
export default {
    components:{
        SkillSection
    },
    props: {
        main: Object,
    }
}
</script>