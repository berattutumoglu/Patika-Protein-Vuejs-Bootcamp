<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps(["name"])
const Icon = defineAsyncComponent(() => import(`/src/components/Icons/${props.name}.vue`/* @vite-ignore */))
</script>

<template>
	<button>
		<Icon />
	</button>
</template>	