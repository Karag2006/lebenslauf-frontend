<template>
    <div class="container">
        <intro :intro="intro"></intro>
        <main-section :main="main"></main-section>
    </div>
</template>

<script>
import Intro from "@/components/Intro/Intro.vue";
import MainSection from '@/components/main/Main.vue'


import introContent from '../assets/introContent.json'
import mainContent from '../assets/mainContent.json'


export default {
    name: "Home",
    components: {
        Intro,
        MainSection,
    },
    data() {
        return {
            intro: introContent,
            main: mainContent
        };
    },
    computed: {
        
    },
    mounted() {
      
    },
};
</script>
