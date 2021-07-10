<template>
    <div class="abilities">
        <h2 v-if="!loggedIn" class="subtitle">{{ item.skillTitle }}</h2>
        <h2 v-else-if="!editmode" class="clickable subtitle" @click="edit">
            {{ item.skillTitle }}
        </h2>
        <edit-item
            v-else
            :names="['skillTitle']"
            :location="location"
            :values="item"
            v-on:cancel="cancel"
            v-on:changed="changedItem"
        >
        </edit-item>
        <skill-categories
            :items="item.skillCategories"
            :location="location + '.skillCategories'"
            :loggedIn="loggedIn"
        ></skill-categories>
    </div>
</template>

<script>
import editItem from "../admin/edit/editItem.vue"
import skillCategories from './SkillCategories.vue'

export default {
    data() {
        return {
            editmode: false,
        };
    },
    components: {
        editItem,
        skillCategories
    },
    props: {
        item: Object,
        location: String,
        loggedIn: Boolean,
    },
    computed: {

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
};
</script>
