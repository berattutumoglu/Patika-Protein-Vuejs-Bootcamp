<script setup>
import { ref } from "vue"
import { searchGif } from "./services/gifService"
import GifModal from "./components/GifModal.vue"

const searchValue = ref("")
const gifImage = ref("")
const open = ref(false)

const gifSearchHandler = async (value) => {
  const result = await searchGif(value)
  const gif = result[0]["images"]["downsized"]["url"]
  gifImage.value = gif
  open.value = true
  return gif
}

const openChange = () => {
  open.value = !open.value
}

</script>

<template>
  <div class="gif">
    <div class="gif__search">
      <input type="search" v-model="searchValue" placeholder="Searching...">
      <input type="button" value="Search" @click="gifSearchHandler(searchValue)">
    </div>
    <div class="gif__modal">
      <Teleport to="#modal">
        <GifModal :gif="gifImage" :open="open" @openChange="openChange"></GifModal>
      </Teleport>
    </div>
  </div>
</template>

<style >
body {
  background-color: #242424;
}

input,
button {
  border: 2px solid gray;
  border-radius: 25px;
  padding: 5px 15px;
  margin: 0 5px;
  outline: 0;
}

input[type="button"]:hover,
button:hover {
  background-color: gray;
  color: white;
}

/* input[type="search"]:focus {
  background-color: gray;
  color: white;
  border: 2px solid gray;
}

input[type="search"]::placeholder{
  color:red
} */

.gif {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.gif .gif__modal {
  margin-top: 8px;
}
</style>
