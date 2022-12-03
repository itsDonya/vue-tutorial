<template>
	<BaseModal v-if="modalOpened" title="Add user?" @close="toggleModal" />
	<button @click="toggleModal">Add</button>
</template>

<script>
import BaseModal from "./UI/BaseModal.vue";
import useModal from "../hooks/modal";
export default {
	components: {
		BaseModal,
	},
	setup() {
		const [modalOpened, toggleModal] = useModal();

		return { modalOpened, toggleModal };
	},
};
</script>

<style>
button {
	color: white;
	background-color: darkcyan;
	padding: 1.2rem 1.8rem;
	border-radius: 12px;
	border: none;
	cursor: pointer;
}
</style>
