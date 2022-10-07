<script setup>
import { computed } from 'vue';

 const props = defineProps(["tasks", "persons", "label"])
</script>
<template>
	<div class="summary">
		<div class="summary__badge">
			<span class="stat">
				{{props.tasks}}
			</span>
			<span class="thin">Tasks</span>
		</div>
		<div class="summary__badge">
			<span class="stat">
				{{props.persons}}
			</span>
			<span class="thin">{{props.label}}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
.summary {
	@apply grid grid-cols-2 p-1 py-3.5 bg-gray-light text-center divide-x divide-divider w-[148px] rounded-md;

	&__badge {
		@apply flex flex-col;

		.stat {
			@apply text-lg text-navy font-bold;
		}
	}
}
</style>