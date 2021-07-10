<template>
    <div class="abilities--group--container">
        <skill-item
            v-for="currentItem in items"
            :key="currentItem.id"
            :item="currentItem"
            :location="location + '.' + currentItem.id"
            :loggedIn="loggedIn"    
        ></skill-item>
        <div v-if="loggedIn && !showAddForm" class="add_btn btn" @click="addForm"><i class="fas fa-plus"></i> Skill</div>
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
import skillItem from './skillItem.vue'
import addItem from '../admin/edit/addItem.vue'


export default {
    components:{
        skillItem,
        addItem
    },
    props:{
        items: Array,
        location: String,
        loggedIn: Boolean,
    },
    data() {
        return {
            showAddForm: false,
        }
    },
    computed: {
        itemToAdd(){
            return {
                id: this.items.length,
                name: "",
                level: "",
            }
        }
    },
    methods: {
        addForm(){
            this.showAddForm = true
        },
        cancel() {
            this.showAddForm = false;
        },
    },
}
</script>