<script setup>
import { onMounted, ref, computed } from 'vue';
import { getCategories, getProjects, getFilters, getActiveUser } from "@/services/services"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Header from "./components/Header/Header.vue"
import CardGroup from "./components/CardGroup/CardGroup.vue"
const categories = ref([])
const projects = ref([])
const filters = ref([])
const activeUser = ref({})
const activeFilter = ref(null)
const filteredProjects = computed(() => projects.value.filter(project => activeFilter.value?.name ? activeFilter.value.name === project.status : true))

const handleFilter = (filter) => {
	filter.name === "All"
	? activeFilter.value = true
	: activeFilter.value = filter
}

onMounted(async () => {
	const categoriesData = await getCategories()
	const projectsData = await getProjects()
	const filtersData = await getFilters()
	const userData = await getActiveUser()
	categories.value = categoriesData
	projects.value = projectsData
	filters.value = filtersData
	activeUser.value = userData
})
</script>

<template>

	<div class="main">
		<div class="main__side">
			<Sidebar :categories="categories"/>
		</div>
		<div class="main__content">
			<Header :filters="filters" :activeUser="activeUser" @setActiveFilter="handleFilter"/>
			<CardGroup :data="filteredProjects"/>
		</div>
	</div>
</template>	

<style scoped lang="scss">
	.main{
		@apply flex gap-[30px];
		
		&__side{
			@apply border-r border-gray min-h-full
		}

		&__content{
			@apply flex-1 flex flex-col gap-[30px];
		}
	}
</style>
