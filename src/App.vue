<template>
	<main>
		<UsersAge />
		<UsersName />
		<UserProjects />
	</main>
</template>

<script>
import UsersAge from "./components/UsersAge.vue";
import UsersName from "./components/UsersName.vue";
import UserProjects from "./components/UserProjects.vue";
export default {
	components: {
		UsersAge,
		UsersName,
		UserProjects,
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body {
	font-family: sans-serif;
}
main {
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
</style>
