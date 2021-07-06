<template>
    <div class="card">
        <div class="card-title">
            <h4 class="card-title-text">Admin Login</h4>
        </div>
        <div class="card-body">
            <form>
                <input-field
                    :name="'name'"
                    :type="'text'"
                    :Label="'Name'"  
                    v-model="user.username"
                ></input-field>
                <input-field
                    :name="'passwort'"
                    :type="'password'"
                    :Label="'Passwort'"  
                    v-model="user.password"
                ></input-field>
                <a class="btn btn-login"
                    @click="login">
                    Login
                </a>
            </form>
        </div>
    </div>
</template>

<script>
import User from '../../../models/user'
import inputField from "../inputs/inputFieldWLabel.vue";
export default {
    components: { inputField },
    data() {
        return {
            user: new User('', ''),
            loading: false,
            message: ''
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        }
    },
    created() {
        // if (this.loggedIn) {
        //     this.$router.push('/admin/lebenslauf')
        // }
    },
    methods: {
        login(){
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                    this.loading = false
                    return
                }

                if (this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user)
                        .then(() => {
                            this.$router.push('/')
                        },
                        error => {
                            this.loading = false
                            this.message = 
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString()
                        })
                }
            })
        }
    },
};
</script>

<style>
.card {
    margin: auto 0;
    min-width: 25em;
    /* background-color: blue; */
}

</style>
