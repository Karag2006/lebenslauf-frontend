<template>
    <form @submit.prevent="save" ref="form">
        <div class="editRow">
            <input-field
                v-model="internalValue"
                :name="'title'"
                :Label="'title'"
                :type="'text'"
            ></input-field>
            <function-button :type="'submit'" @click.native="submit" />
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
        value: String,
        location: String
    },
    data() {
        return {
            internalValue: this.value
        }
    },
    methods: {
        save(e){
            e.preventDefault();
            // use vuex to make the change in the API
            let obj = {
                location: this.location,
                value: this.internalValue
            }
            this.$store.dispatch("cv/updateLebenslauf", obj)
            this.$emit("changed")
        },
        submit(){
            this.$refs.form.requestSubmit();
        }
    },
};
</script>

<style>
.editRow {
    display: flex;
}
</style>
