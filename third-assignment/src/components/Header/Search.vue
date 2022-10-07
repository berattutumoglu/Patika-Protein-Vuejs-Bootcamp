<script setup>
import Icon from '../Shared/Icon.vue';
const props = defineProps(["searchText"])
const emits = defineEmits(["update:searchText"])
const searchHandler = (event) => {
	emits("update:modelValue", event.target.value)
}

</script>
<template>
	<div class="inputWrapper">
		<Icon name="Search" class="searchIcon" />
		<input class="txtInput" type="text" placeholder="Search" @input="searchHandler">
	</div>
</template>

<style scoped lang="scss">
.inputWrapper {
	@apply flex items-center h-12 w-[442px] bg-gray rounded-lg;

	.searchIcon {
		@apply ml-[22px] mr-4;
	}

	.txtInput {
		@apply outline-none bg-gray w-4/5;
	}
}
</style>