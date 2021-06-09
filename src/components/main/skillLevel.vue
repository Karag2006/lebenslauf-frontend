<template>
    <div class="ability--display">
        <i 
            v-for="item in skillArray"
            :key="item.id"
            class="fa-circle"
            :class="item.class"
        ></i>
    </div>
</template>

<script>
export default {
    props:{
        level: Number
    },
    computed: {
        skillArray: function(){
            let array = []
            for(let i=1; i<=10; i++){
                let obj = {id: i}
                if (i <= this.level) {
                    obj.class = "fas"
                } else {
                    obj.class = "far"
                }
                array.push(obj)
            }
            return array
        }
    },
}
</script>