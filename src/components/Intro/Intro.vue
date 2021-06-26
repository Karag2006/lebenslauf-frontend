<template>
    <div class="intro row">
        <text-col :title="intro.title" :items="intro.items" :loggedIn="loggedIn"></text-col>
        <image-col :image="intro.image" :loggedIn="loggedIn"></image-col>
    </div>
</template>

<script>
import textCol from './textCol.vue'
import imageCol from './imageCol.vue'

export default {
    components: {
        textCol,
        imageCol
    },
    props:{
        intro: Object,
        loggedIn: Boolean
    }
}
</script>