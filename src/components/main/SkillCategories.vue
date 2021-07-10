<template>
    <div class="skillContainer">
        <div class="row">
            <div class="col">
                <skill-category
                    v-for="skillGroup in items"
                    :key="skillGroup.id"
                    :item="skillGroup"
                    :location="location + '.' + skillGroup.id"
                    :loggedIn="loggedIn"
                    :col="1"
                >
                </skill-category>
            </div>
            <div class="col">
                <skill-category
                    v-for="skillGroup in items"
                    :key="skillGroup.id"
                    :item="skillGroup"
                    :location="location + '.' + skillGroup.id"
                    :loggedIn="loggedIn"
                    :col="2"
                >
                </skill-category>
            </div>
        </div>
        <div v-if="loggedIn && !showAddForm" class="add_btn btn" @click="addForm"><i class="fas fa-plus"></i> Kategorie</div>
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
import skillCategory from "./skillCategory.vue";
import addItem from '../admin/edit/addItem.vue'


export default {
    data() {
        return {
            showAddForm: false,
        };
    },
    components: {
        skillCategory,
        addItem
    },
    props: {
        items: Array,
        location: String,
        loggedIn: Boolean,
    },
    computed: {
        itemToAdd(){
            return {
                id: this.items.length,
                title: "",
                col: "",
                items: []
            }
        }
    },
    methods: {
        addForm(){
            this.showAddForm = true
        },
        cancel(){
            this.showAddForm = false
        },
        
    },
};
</script>
