<template>
	<h1>{{ fullName }}</h1>
	<button @click="resetData">Reset</button>
</template>

<script>
import { computed, inject } from "vue";
export default {
	emits: ["reset-data"],
	setup(_, context) {
		const firstName = inject("first-name");
		const lastName = inject("last-name");
		const fullName = computed(function () {
			return firstName.value + " " + lastName.value;
		});

		function resetData() {
			context.emit("reset-data");
		}

		return { fullName, resetData };
	},
};
</script>
