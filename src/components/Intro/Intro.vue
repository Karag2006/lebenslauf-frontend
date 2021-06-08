<template>
    <div class="intro row">
        <text-col :title="intro.title" :items="intro.items"></text-col>
        <image-col :image="intro.image"></image-col>
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
        intro: Object
    }
}
</script>