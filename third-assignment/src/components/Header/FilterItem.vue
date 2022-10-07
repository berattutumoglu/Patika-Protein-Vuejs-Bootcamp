<script setup>
const props = defineProps(["filter", "isActive"])
const emits = defineEmits(["setFilter"])

const handleFilter = () => {
	emits("setFilter", props.filter)
}
</script>
<template>
	<button @click="handleFilter" class="filter" :class="{'active': isActive}">
		<p v-if="isActive" class="active__dot"></p>
		{{props.filter.name}}
	</button>
</template>

<style scoped lang="scss">
.filter {
	@apply mt-1.5
}

.active {
	@apply text-navy-dark font-bold flex flex-col items-center justify-center gap-0.5 mt-0;

	&__dot {
		@apply h-1 w-1 bg-navy-dark rounded-full
	}

}
</style>