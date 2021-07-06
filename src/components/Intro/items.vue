<template>
    <div class="intro--text">
        <text-item 
            v-for="item in items"
            :key="item.id"
            :item="item"
            :location="location + '.' + item.id"
            :loggedIn="loggedIn">
        </text-item>
        <div v-if="loggedIn && !showAddForm" class="add_btn btn" @click="addForm"><i class="fas fa-plus"></i></div>
        <add-item 
            v-else-if="loggedIn && showAddForm"
            :values="itemToAdd"
            :location="location"
            @cancel="cancel"
            @added="cancel"
        ></add-item>
    </div>
</template>

<script>
import textItem from './singleItem.vue'
import addItem from '../admin/edit/addItem.vue'

export default {
    components:{
        textItem,
        addItem
    },
    props:{
        items: Array,
        location: String,
        loggedIn: Boolean
    },
    data() {
        return {
            showAddForm: false,
            itemToAdd: {
                id: this.items.length,
                title: "",
                content: "",
            },
        }
    },
    methods: {
        addForm(){
            this.showAddForm = true
            
        },
        cancel(){
            this.showAddForm = false
        }
    },
}
</script>