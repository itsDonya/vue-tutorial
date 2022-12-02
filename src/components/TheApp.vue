<template>
	<div>
		<h1>{{ fullName }}</h1>
		<input type="text" placeholder="First Name" v-model="firstName" />
		<input type="text" placeholder="Last name" v-model="lastName" />
	</div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
	setup() {
		const firstName = ref("");
		const lastName = ref("");

		const fullName = computed(function () {
			return firstName.value + " " + lastName.value;
		});

		// watch(firstName, function (newValue, oldValue) {
		// 	console.log("Old name => ", oldValue);
		// 	console.log("New name => ", newValue);
		// });

		watch([firstName, lastName], function (newValues, oldValues) {
			console.log("Old name => ", oldValues[0]);
			console.log("New name => ", newValues[0]);
			console.log("Old family => ", oldValues[1]);
			console.log("New family => ", newValues[1]);
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
