<template>
    <div class="col">
        <h1 class="title">{{title}}</h1>
        <intro-items :items="items"></intro-items>
    </div>
</template>

<script>
import introItems from './items.vue'

export default {
    components:{
        introItems
    },
    props:{
        title: String,
        items: Array
    }
}
</script>