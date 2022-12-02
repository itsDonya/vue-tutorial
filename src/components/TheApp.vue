<template>
	<div>
		<h1>{{ fullName }}</h1>
		<input type="text" placeholder="First Name" @input="setFirstName" />
		<input type="text" placeholder="Last name" @input="setLastName" />
	</div>
</template>

<script>
import { ref, computed } from "vue";
export default {
	setup() {
		const firstName = ref("");
		const lastName = ref("");

		function setFirstName(e) {
			firstName.value = e.target.value;
		}
		function setLastName(e) {
			lastName.value = e.target.value;
		}

		const fullName = computed(function () {
			return firstName.value + " " + lastName.value;
		});

		return { setFirstName, setLastName, fullName };
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
div {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
</style>
