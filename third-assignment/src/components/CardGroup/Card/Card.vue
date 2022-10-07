<script setup>
import { computed } from 'vue';
import Status from './Status.vue';
import Info from './Info.vue';
import ProgressBar from './ProgressBar.vue';
import Icon from '../../Shared/Icon.vue';
import MemberList from './MemberList.vue';
import Summary from './Summary.vue';

const props = defineProps(["item", "isActive"])
const emits = defineEmits(["setActive"])
const notOnHold = computed(() => props.item.status !== "On Hold")
const dateLabel = computed(() => notOnHold.value ? "Start Date" : "Started")
const personLabel = computed(() => notOnHold.value ? "Users" : "Members")
const personCount = computed(() => notOnHold.value ? props.item.users : props.item.members.length)
const setActiveHandler = () => {
	emits("setActive", props.item.id)
}

</script>
<template>
	<div class="card" :class="{'shadow-2xl border-none': isActive}" @click="setActiveHandler">

		<div class="card__header">
			<span class="title">{{props.item.title}}</span>
			<div class="icons">
				<Icon v-if="props.isActive" name="Edit" />
				<Icon name="More" />
			</div>
		</div>
		
		<div v-if="notOnHold">
			<Status class="boldie" :status="props.item.status" />
		</div>

		<div class="card__info">
			<Info :title="dateLabel" :description="props.item.startDate" />
			<Info v-show="!notOnHold" title="Status" :status="props.item.status"/>
			<Summary :tasks="props.item.tasks" :persons="personCount" :label="personLabel" />
		</div>

		<MemberList :members="props.item.members" />
		<ProgressBar :progress="props.item.progress" />
	</div>
</template>

<style scoped lang="scss">
.card {
	@apply w-[495px] h-[300px] border border-gray-dark p-6 flex flex-col justify-evenly rounded-lg gap-3;

	.thin {
		@apply text-xs;
	}

	.boldie {
		@apply text-[13px] font-medium;
	}

	&__header {
		@apply flex justify-between items-center;

		.title {
			@apply text-lg font-medium text-navy;
		}

		.icons {
			@apply flex gap-[30px];
		}
	}

	&__info {
		@apply flex justify-between items-center mt-1.5;

	}
}
</style>