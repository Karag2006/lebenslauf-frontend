<template>
    <form @submit.prevent="save" ref="form">
        <div class="editRow">
            <input-field
                v-model="internalTitle"
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
import AdminService from '../../../services/admin-service'
import inputField from "../inputs/inputField.vue";
import functionButton from "../inputs/functionButtons.vue";
import { EventListener } from "@/services/event-listener"

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
        save(e){
            e.preventDefault();
            AdminService.editValue(0, this.location, this.internalTitle).then((response) => {
                this.$emit("changed")
                EventListener.$emit('changed', response.data.req)
            }).catch((error) => {
                if (error.response.status == 403) {
                    this.$store.dispatch("auth/logout");
                    this.$router.push("/admin/login")
                } else {
                    console.log(error.response)
                }
            })

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
