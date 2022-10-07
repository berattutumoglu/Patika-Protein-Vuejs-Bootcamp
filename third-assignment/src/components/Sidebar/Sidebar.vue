<script setup>
import {ref} from "vue";
import MenuItem from "./MenuItem.vue";
import MenuLogo from "./MenuLogo.vue";
import Icon from "../Shared/Icon.vue";
const props = defineProps(["categories"]);

const activeCategory = ref(2);

function activeCategoryHandler(id){
	activeCategory.value = id
}

</script>

<template>
		<div class="sidebar">
					
			<div class="sidebar__header">
				<MenuLogo/>			
				<Icon name="Collapse" class="collapse"/>
			</div>
			<div class="sidebar__menu">
				<MenuItem 
					@setCategory="activeCategoryHandler(item.id)"  
					v-for="item in props.categories"
					:key="item.id"
					:name="item.name"
					:icon="item.icon"
					:isActive="item.id === activeCategory"
				/>
			</div>
			
			<div class="logout">
			 <MenuItem name="Log out" icon="Exit"/>
			</div>
		</div>
</template>

<style>
	.sidebar{
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding-top: 42px;
		min-width: 315px;
	}

	.logout{
		margin-top: auto;
		padding-left: 20px;
		display: flex;
		color:#ff285c;
		border-top: 1px solid #F1F2F7;
		padding-top: 8px;
	}

	.sidebar__menu{
		margin: 47px 20px 0;
	}

	.sidebar__header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 22px;
	}
	
</style>