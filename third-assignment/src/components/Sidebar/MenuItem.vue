<script setup>
import Icon from "@/components/Shared/Icon.vue";
const props = defineProps(["name", "icon", "isActive"]);
const emits = defineEmits(["setCategory"])

const activeButtonHandler = () => {
	emits("setCategory")
}

</script>

<template>
	<a href="#" class="menuitem" @click="activeButtonHandler" :class = "{active: isActive}">
		<Icon :name="props.icon"/>
		{{ props.name }}
	</a>
</template>

<style scoped>
	.menuitem{
		width: 100%;
		display: flex;
		gap: 18.5px;
		padding: 16px 30px;		
		align-items: center;
	}

	.active{
		color:#00DB99;
		background: #F9F9F9 ;
		border-radius: 8px;
	}


</style>