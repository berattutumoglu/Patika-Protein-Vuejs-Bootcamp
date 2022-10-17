import axios from "axios"

let random = (total) => Math.floor(Math.random() * total);

async function getBreeds () {
  const breeds = await axios.get("https://dog.ceo/api/breeds/list/all")
  .then (response => response.data);

  let result = Object.keys(breeds.message);
  let randomNumber = random(result.length)
  let selected = result[randomNumber]
  singleBreed(selected)
}

getBreeds()

async function singleBreed (selected) {
  const dog = await axios.get(`https://dog.ceo/api/breed/${selected}/images`)

let selectedImage = random(dog.data.message.length)
console.log(dog.data.message[selectedImage]);
}