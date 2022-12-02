<template>
	<div>
		<h1>{{ fullName }}</h1>
		<input type="text" placeholder="First Name" v-model="firstName" />
		<input type="text" placeholder="Last name" v-model="lastName" />
	</div>
</template>

<script>
import { ref, computed } from "vue";
export default {
	setup() {
		const firstName = ref("");
		const lastName = ref("");

		const fullName = computed(function () {
			return firstName.value + " " + lastName.value;
		});

		return { firstName, lastName, fullName };
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
