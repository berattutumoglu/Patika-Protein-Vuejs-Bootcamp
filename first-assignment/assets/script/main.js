import DATA from "../data/data.json";

function getGroupNames(data) {
	const groupNames = data.map(person => person.group);
	const uniqueNames = [...new Set(groupNames)];
	
    return uniqueNames;
}

function filterByGroups(data) {
    const groups = data.reduce ( (currentData,person) => {
        if (!currentData [person.group]) {
        currentData [person.group] = [] }
        return currentData;
    }, {});

    Object.keys(groups).forEach( group => {
        const students = data.filter(person => person.group == group);
        groups[group] = students;
    })

    return groups;
}

const groups = filterByGroups(DATA);

console.log("Groups", groups);

