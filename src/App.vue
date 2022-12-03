<template>
	<main>
		<AddUser />
		<ViewUser />
		<DeleteUser />
	</main>
</template>

<script>
import AddUser from "./components/AddUser.vue";
import DeleteUser from "./components/DeleteUser.vue";
import ViewUser from "./components/ViewUser.vue";
export default {
	components: {
		AddUser,
		ViewUser,
		DeleteUser,
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
	justify-content: flex-start;
	gap: 2rem;
	align-items: center;
	position: relative;
}
</style>
