<script setup>
import { onMounted } from "vue";
const props = defineProps(['name']);
const emit = defineEmits(['setName']);
const nameHandler = name => {
    emit('setName', name);
}
</script>
    
<template>
    <button class="button" :class="name.toLowerCase()" @click="nameHandler(props.name)">{{ props.name }}</button>
</template>
    
<style scoped>
.button {
    margin: 10px;
    padding: 12px 0;
    min-width: 120px;
    background-color: transparent;
    border: 2px solid rgb(37, 37, 37);
    cursor: pointer;
}

.orchid {
    background-color: orchid;
}

.steelblue {
    background-color: steelblue;
}

.indianred {
    background-color: indianred;
}

.yellowgreen {
    background-color: yellowgreen;
}

.lightseagreen {
    background-color: lightseagreen;
}
</style>