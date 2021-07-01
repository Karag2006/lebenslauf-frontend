<template>
    <form @submit.prevent="save" ref="form">
        <div class="editRow">
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
        names: Array,
        values: Object,
        location: String
    },
    data() {
        return {
            internalValues: this.values,
        }
    },
    methods: {
        save(e){
            e.preventDefault();
            // use vuex to make the change in the API
            let arr = []
            this.names.forEach(element => {
                let obj = {
                    location: this.location + "." + element,
                    value: this.internalValues[element]
                }
                arr.push(obj)
            });
            this.$store.dispatch("cv/updateLebenslauf", arr)
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
.hidden{
    display: none;
}
</style>
