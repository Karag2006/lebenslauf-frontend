<template>
    <div class="container">
        <intro
            :intro="lebenslauf.intro"
            :loggedIn="loggedIn"
            :location="location + '.intro'"
        ></intro>
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
            location: "lebenslauf",
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
            this.$store.dispatch("auth/logout");
            //this.$router.push('/admin/login');
        },
    },
    beforeCreate() {
        AdminService.getAdminView()
            .then((response) => {
                this.lebenslauf = response.data;

                let string = "lebenslauf.main.skills.skillCategories.0.items.0.level";
                let items = string.split(".");
                let len = items.length;
                let position = this;
                for (let i = 0; i < len - 1; i++) {
                    let elem = items[i];
                    if (!position[elem]) position[elem] = {};
                    position = position[elem];
                }
                position[items[len - 1]] = "2";
                console.log(position);
                //this.lebenslauf[items[0]][items[1]][items[2]][items[3]] = "Test"
                //console.log(this.lebenslauf)
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
