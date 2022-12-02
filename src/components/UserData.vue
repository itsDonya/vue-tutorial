<template>
	<h1>{{ fullName }}</h1>
</template>

<script>
import { computed } from "vue";
export default {
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
	setup(props) {
		const fullName = computed(function () {
			return props.firstName + " " + props.lastName;
		});
		return { fullName };
	},
};
</script>
