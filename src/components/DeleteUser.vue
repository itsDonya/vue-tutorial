<template>
	<BaseModal v-if="modalOpened" :title="title" @close="toggleModal" />
	<button @click="toggleModal">Delete</button>
</template>

<script>
import BaseModal from "./UI/BaseModal.vue";
import useModal from "../hooks/modal";
import { ref } from "vue";
export default {
	components: {
		BaseModal,
	},
	setup() {
		const title = ref("Delete user?");
		const [modalOpened, toggleModal] = useModal();

		return { title, modalOpened, toggleModal };
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
