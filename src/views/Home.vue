<template>
    <div class="container">
        <intro :intro="intro"></intro>
    </div>
</template>

<script>
import Intro from "@/components/Intro/Intro.vue";
import introContent from '../assets/introContent.json'

export default {
    name: "Home",
    components: {
        Intro,
    },
    data() {
        return {
            intro: introContent
        };
    },
    computed: {
        
    },
    mounted() {
      
    },
};
</script>
