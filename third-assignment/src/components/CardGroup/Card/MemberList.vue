<script setup>
import Icon from '@/components/Shared/Icon.vue';
import Avatar from './Avatar.vue';

const props = defineProps(["members"])
</script>

<template>
	<div class="members">
		<div class="members__header">
			<span class="boldie">Members</span>
		</div>
		<div class="members__images">
			<Avatar v-for="member in props.members" :photo="member.photo" />
			<button class="add-btn">
				<Icon name="Plus" />
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.members {
	@apply flex flex-col gap-3 -mt-5;

	&__images {
		@apply flex gap-1;

		.add-btn {
			@apply border border-gray-deep h-8 w-8 rounded-full flex items-center justify-center;
		}
	}
}
</style>