<template>
	<h1>{{ fullName }}</h1>
	<button @click="resetData">Reset</button>
</template>

<script>
import { computed } from "vue";
export default {
	emits: ["reset-data"],
	props: {
		firstName: {
			type: String,
			default: "",
		},
		lastName: {
			type: String,
			default: "",
		},
	},
	setup(props, context) {
		const fullName = computed(function () {
			return props.firstName + " " + props.lastName;
		});

		function resetData() {
			context.emit("reset-data");
		}

		return { fullName, resetData };
	},
};
</script>
