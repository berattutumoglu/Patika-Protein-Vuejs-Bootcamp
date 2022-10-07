<script setup>
import { computed } from 'vue';
const props = defineProps(["progress"])
const progressWidth = computed(() => `${props.progress}%`)
</script>
<template>
	<div class="section">
		<div class="section__header">
			<span class="boldie">Progress</span>
			<span class="thin">{{props.progress}}%</span>
		</div>
		<div class="progress">
			<div class="progress__bar" :style="{width: progressWidth}"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">

.section {
	@apply w-full mt-auto;

	&__header {
		@apply flex justify-between mb-2;
	}

	.progress {
		@apply bg-gray rounded-lg;

		&__bar {
			@apply h-2 bg-green rounded-md
		}
	}
}
</style>