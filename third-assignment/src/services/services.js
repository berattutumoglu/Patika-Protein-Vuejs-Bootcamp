const url = "src/assets/data/data.json";

export async function getCategories() {
	const data = await fetch(url)
		.then((data) => data.json())
		.then((data) => data.categories);
	return data;
}

export async function getProjects() {
	const data = await fetch(url)
		.then((data) => data.json())
		.then((data) => data.projects);
	return data;
}

export async function getActiveUser() {
	const data = await fetch(url)
		.then((data) => data.json())
		.then((data) => data.user);
	return data;
}

export async function getFilters() {
	const data = await fetch(url)
		.then((data) => data.json())
		.then((data) => data.filters);
	return data;
}
export function getImage(imageName) {
	return `src/assets/png/${imageName}`;
}


