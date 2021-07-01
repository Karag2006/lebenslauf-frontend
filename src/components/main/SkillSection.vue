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
        <div class="row">
            <div class="col">
                <skill-category
                    v-for="skillGroup in col1"
                    :key="skillGroup.id"
                    :item="skillGroup"
                    :location="location + '.skillCategories.' + skillGroup.id"
                    :loggedIn="loggedIn"
                >
                </skill-category>
            </div>
            <div class="col">
                <skill-category
                    v-for="skillGroup in col2"
                    :key="skillGroup.id"
                    :item="skillGroup"
                    :location="location + '.skillCategories.' + skillGroup.id"
                    :loggedIn="loggedIn"
                >
                </skill-category>
            </div>
        </div>
    </div>
</template>

<script>
import skillCategory from "./skillCategory.vue";
import editItem from "../admin/edit/editItem.vue"

export default {
    data() {
        return {
            editmode: false,
        };
    },
    components: {
        skillCategory,
        editItem
    },
    props: {
        item: Object,
        location: String,
        loggedIn: Boolean,
    },
    computed: {
        col1: function() {
            let result = this.item.skillCategories.filter((obj) => {
                return obj.col === 1;
            });
            return result;
        },
        col2: function() {
            let result = this.item.skillCategories.filter((obj) => {
                return obj.col === 2;
            });
            return result;
        },
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
