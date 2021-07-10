<template>
    <div v-if="!loggedIn" class="ability--item">
        <p class="ability--name">{{item.name}}</p>
        <skill-level :level="item.level"></skill-level>  
    </div>
    <div v-else-if="!editmode" class=" clickable ability--item" @click="edit">
        <p class="ability--name">{{item.name}}</p>
        <skill-level :level="item.level"></skill-level>  
    </div>
    <edit-skill-item
        v-else
        :values="item"
        :location="location"
        :names="['name', 'level']"
        :deletable="true"
        v-on:cancel="cancel"
        v-on:changed="changedItem"
    ></edit-skill-item>
</template>

<script>
import skillLevel from './skillLevel.vue'
import editSkillItem from '../admin/edit/editSkillItem.vue'
export default {
    components:{
        skillLevel,
        editSkillItem
    },
    props:{
        item: Object,
        location: String,
        loggedIn: Boolean
    },
    data() {
        return {
            editmode: false,
        };
    },
    methods: {
        edit() {
            if (this.loggedIn) {
                this.editmode = true;
            }
        },
        changedItem() {
            this.editmode = false;
        },
        cancel() {
            this.editmode = false;
        },
    },
}
</script>