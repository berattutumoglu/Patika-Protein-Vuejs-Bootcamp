<script setup>
import { ref } from 'vue';
import Icon from '../Shared/Icon.vue';
import FilterItem from './FilterItem.vue';

const props = defineProps(["filters"])
const emits = defineEmits(["setActiveFilter"])
const activeFilter = ref(null)

const handleFilter = (filter) => {
	activeFilter.value = filter.id
	emits("setActiveFilter", filter)
}
</script>
<template>
	<div class="filterbar">
		<div class="filterbar__filters">
			<FilterItem v-for="filter in filters" 
				:key="filter.id"
				:filter="filter" 
				:isActive="activeFilter === filter.id"
				@setFilter="handleFilter"/>
			<button class="sort">
				Default
				<Icon name="List" />
			</button>
		</div>
	</div>
</template>
<style scoped lang="scss">
.filterbar {
	@apply flex flex-1 h-[52px] px-5 py-[18px] rounded-lg border border-gray;

	&__filters {
		@apply flex flex-1 justify-start items-center gap-12 ml-5 text-sm font-normal text-gray-deep;

		.sort {
			@apply flex justify-self-end ml-auto items-center gap-[18px] text-[14px] font-normal;
		}
	}
}
</style>