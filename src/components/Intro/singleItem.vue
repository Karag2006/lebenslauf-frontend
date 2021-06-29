<template>
    <div v-if="!loggedIn" class="text--item">
        <p class="text--item--title">{{lebenslaufItem(location + ".title")}} : </p>
        <p class="text--item--content">{{lebenslaufItem(location + ".content")}} : </p>
    </div>
    <div v-else-if="!editmode" class="text--item clickable" @click="edit">
        <p class="text--item--title">{{lebenslaufItem(location + ".title")}} : </p>
        <p class="text--item--content">{{lebenslaufItem(location + ".content")}} : </p> 
    </div>
    <edit-item
            v-else
            :location="location + '.title'"
            :value="lebenslaufItem(location + '.title')"
            v-on:cancel="cancel"
        ></edit-item>
</template>

<script>

import editItem from '../admin/edit/editItem.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cv')

export default {
    components: {
        editItem,
    },
    props:{
        location: String,
        loggedIn: Boolean
    },
    data() {
        return {
            editmode: false
        }
    },
    computed: {
        ...mapGetters(['lebenslaufItem'])
    },
}
</script>