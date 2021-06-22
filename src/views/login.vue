<template>
    <div class="container">
        <div class="row">
            <div class="screen">
                <login-card></login-card>
            </div>
        </div>
        
    </div>
</template>

<script>
import LoginCard from '../components/admin/login/loginCard.vue';

export default {
    name: "login",
    components: {
        
        LoginCard,

    },
    data() {
        return {

        }
    }
}
</script>


<style>
.screen {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

}

</style>