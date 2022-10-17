<script setup>
const props = defineProps(["gif", "open"])
const emits = defineEmits(["openChange"])

const openHandler = () => {
    emits("openChange")
}
</script>

<template>
    <!-- <button @click="openHandler">Open Modal</button> -->
        <div v-if="props.open" class="modal">
            <img class="modal__image" :src="props.gif" />
            <button @click="openHandler">Close</button>
        </div>

</template>

<style>
.modal {
    top: 0;
    left: 0;
    position: absolute;

    background-color: #242424;
    width: 100%;
    height: 100%;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal .modal__image {
    margin-bottom: 25px;
    border: 3px solid gray;
    border-radius: 25px;
}
</style>