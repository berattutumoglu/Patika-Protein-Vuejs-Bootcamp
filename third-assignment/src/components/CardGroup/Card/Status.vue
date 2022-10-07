<script setup>
	const props = defineProps(["status"])
	const statusClasses = {
	"bg-green": props.status === "Active",
	"bg-yellow-450": props.status === "On Hold",
	"bg-rose-550": props.status === "Inactive",
}
	const statusTextClasses = {
	"text-green": props.status === "Active",
	"text-yellow-450": props.status === "On Hold",
	"text-rose-550": props.status === "Inactive",
	}
</script>

<template>
	<div class="status">
		<span class="status__circle" :class="statusClasses"></span>
		<span :class="statusTextClasses">{{props.status}}</span>
	</div>
</template>

<style scoped lang="scss">
	.status{
		@apply inline-flex gap-2 justify-center items-center;

		&__circle{
			@apply h-2 w-2 rounded-full
		}
	}
</style>