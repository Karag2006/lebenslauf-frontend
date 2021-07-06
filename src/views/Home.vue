<template>
    <div class="container">
        <intro
            v-if="lebenslauf.intro"
            :item="lebenslauf.intro"
            :loggedIn="loggedIn"
            :location="location + 'intro'"
        ></intro>
        <main-section
            v-if="lebenslauf.main"
            :main="lebenslauf.main"
            :loggedIn="loggedIn"
            :location="location + 'main'"
        ></main-section>
        <a v-if="loggedIn" class="btn btn-logout" @click="logOut">
            Logout
        </a>
    </div>
</template>

<script>
import Intro from "@/components/Intro/Intro.vue";
import MainSection from "@/components/main/Main.vue";

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cv')


export default {
    name: "Home",
    components: {
        Intro,
        MainSection,
    },
    data() {
        return {
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
        },
    },
    mounted() {
        this.$store.dispatch("cv/initStore")
    },
};
</script>
