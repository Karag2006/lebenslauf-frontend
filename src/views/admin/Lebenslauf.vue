<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.userName}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.userID}}
    </p>
    <a class="btn btn-logout"
                    @click="logOut">
                    Logout
                </a>
  </div>
</template>

<script>
export default {
    name: 'Lebenslauf Admin',
    computed: {
        currentUser(){
            return this.$store.state.auth.user
        }
    },
    mounted() {
        if (!this.currentUser)
        {
            this.$router.push('/admin/login');
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/admin/login');
    }
  }
}
</script>