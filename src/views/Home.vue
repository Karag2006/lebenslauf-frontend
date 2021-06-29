<template>
    <div class="container">
        <intro
            v-if="lebenslauf.intro"
            :intro="lebenslauf.intro"
            :loggedIn="loggedIn"
            :location="location + 'intro'"
        ></intro>
        <main-section
            v-if="lebenslauf.main"
            :main="lebenslauf.main"
            :loggedIn="loggedIn"
        ></main-section>
        <a v-if="loggedIn" class="btn btn-logout" @click="logOut">
            Logout
        </a>
    </div>
</template>

<script>
import Intro from "@/components/Intro/Intro.vue";
import MainSection from "@/components/main/Main.vue";

//import AdminService from "../services/admin-service";
// import { EventListener } from "@/services/event-listener"
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cv')

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
            //lebenslauf: {},
            location: "",
        };
    },
    computed: {
        ...mapGetters(['lebenslauf']),
        currentUser() {
            return this.$store.state.auth.user;
        },
        loggedIn() {
            if (this.currentUser) {
                return true;
            } else return false;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch("auth/logout");
            //this.$router.push('/admin/login');
        },
    },
    mounted() {
        this.$store.dispatch("cv/initStore")
        // EventListener.$on('changed', (item) => {
        //     let string = item.location;
        //     let items = string.split(".");
        //     let len = items.length;
        //     let position = this.lebenslauf;
        //     for (let i = 0; i < len - 1; i++) {
        //         let elem = items[i];
        //         if (!position[elem]) position[elem] = {};
        //         position = position[elem];
        //     }
        //     position[items[len - 1]] = item.value;
        //     console.log(position);
        // })
        // AdminService.getAdminView()
        //      .then((response) => {
        //          this.lebenslauf = response.data;
        //     })
        //         .catch((error) => {
        //         console.log(error);
        //     });
    },
};
</script>
