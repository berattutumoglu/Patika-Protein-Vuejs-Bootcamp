<script setup>
	import { getImage } from '@/services/services';
	const props = defineProps(["photo"])
</script>
<template>
	<span>
		<img :src="getImage(props.photo)" alt="Member Photo">
	</span>
</template>