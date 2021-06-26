<template>
    <div class="container">
        <intro :intro="lebenslauf.intro" :loggedIn="loggedIn"></intro>
        <main-section
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
import AdminService from "../services/admin-service";

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
            this.$store.dispatch('auth/logout');
            this.$router.push('/admin/login');
        },
    },
    beforeCreate() {
        AdminService.getAdminView()
            .then((response) => {
                this.lebenslauf = response.data;
                //console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
    },
    
}
</script>
