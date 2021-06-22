<template>
    <div class="container">
        <intro :intro="lebenslauf.intro"></intro>
        <main-section :main="lebenslauf.main"></main-section>
    </div>
</template>

<script>
import Intro from "@/components/Intro/Intro.vue";
import MainSection from '@/components/main/Main.vue'
import axios from 'axios'

// import introContent from '../assets/introContent.json'
// import mainContent from '../assets/mainContent.json'


export default {
    name: "Home",
    components: {
        Intro,
        MainSection,
    },
    data() {
        return {
            lebenslauf: {},
        };
    },
    computed: {
        
    },
    mounted() {
        axios.get('http://localhost:3000/api')
            .then(response => {
                this.lebenslauf = response.data;
                //console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
      
    },
};
</script>
