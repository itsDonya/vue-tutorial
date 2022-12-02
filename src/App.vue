<template>
	<div>
		<UserData @reset-data="resetUserData" />
		<input type="text" placeholder="First Name" v-model="fName" />
		<input type="text" placeholder="Last name" v-model="lName" />
	</div>
</template>

<script>
import UserData from "./components/UserData.vue";
import { ref, provide } from "vue";
export default {
	components: { UserData },
	setup() {
		const fName = ref("");
		const lName = ref("");

		provide("first-name", fName);
		provide("last-name", lName);

		function resetUserData() {
			fName.value = "";
			lName.value = "";
		}

		return { fName, lName, resetUserData };
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}
h1 {
	margin-top: 2rem;
	color: darkcyan;
}
div {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
input,
button {
	padding: 1.2rem 1.8rem;
	border-radius: 12px;
	border: 2px solid darkcyan;
}
input:focus,
button:focus {
	outline: none;
}
input {
	color: darkcyan;
}
button {
	color: white;
	background-color: darkcyan;
	cursor: pointer;
}
</style>
