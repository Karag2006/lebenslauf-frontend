<template>
    <form @submit.prevent="save" ref="form">
        <div class="addRow">
            <div class="col">
                <input-field
                v-for="name in names"
                :key="name"
                :name="name"
                :Label="name"
                :type="'text'"
                v-model="values[name]"
            ></input-field>
            </div>
            
            <function-button :type="'submit'" @click.native="submit" />
            <function-button :type="'cancel'" @click.native="$emit('cancel')" />
            <input type="submit" value="submit" name="submit" class="hidden" />
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
        values: Object,
        location: String
    },
    data() {
        return {
            names: [],
            internalValues: this.values,
        }
    },
    methods: {
        save(e){
            e.preventDefault();
            // use vuex to make the change in the API
            let obj = {}
            obj.location = this.location
            obj.item = this.values
            this.$store.dispatch("cv/addToLebenslauf", obj)
            this.$emit("added")
        },
        submit(){
            this.$refs.form.requestSubmit();
        }
    },
    mounted() {
        // get all actual values that can be edited in this step and add they keys to the 'names' array
        let temp = Object.keys(this.values)
        temp.forEach(element => {
            if (
            element != 'id' && element != '_id' && typeof this.values[element] === 'string') {
                this.names.push(element)
            }
        });
    },
};
</script>

<style>
.addRow {
    display: flex;
}
.hidden{
    display: none;
}
</style>
