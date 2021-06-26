<template>
    <form action="">
        <div class="editRow">
            <input-field
                v-model="internalTitle"
                :name="'title'"
                :Label="'title'"
                :type="'text'"
            ></input-field>
            <function-button :type="'save'" @submit.prevent="save"/>
            <function-button :type="'cancel'" @click.native="$emit('cancel')" />
        </div>
    </form>
</template>

<script>
import inputField from "../inputs/inputField.vue";
import functionButton from "../inputs/functionButtons.vue";

export default {
    components: {
        inputField,
        functionButton,
    },
    props: {
        title: String,
        location: String
    },
    data() {
        return {
            internalTitle: this.title
        }
    },
    methods: {
        
    },
};
</script>

<style>
.editRow {
    display: flex;
}
</style>
