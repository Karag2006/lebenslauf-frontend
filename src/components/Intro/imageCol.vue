<template>
    <div class="col intro--img">
        <img :src="image.src" :alt="image.alt">
    </div>
</template>

<script>
export default {
    props:{
        image: Object
    }
}
</script>