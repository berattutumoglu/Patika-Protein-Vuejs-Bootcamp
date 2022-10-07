<script setup>
import Status from './Status.vue';
	const props = defineProps(["title","description","status"])
</script>

<template>
	<div>
		<h6 class="thin">{{props.title}}</h6>
		<span class="boldie">
			<template v-if="props.description	">
				{{props.description}}
			</template>
			<Status v-else :status="props.status" class="boldie"/>
		</span>
	</div>
</template>