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
    beforeMount() {
        
    },   
    beforeCreate() {
        axios.get(process.env.VUE_APP_APIURL + 'api')
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
