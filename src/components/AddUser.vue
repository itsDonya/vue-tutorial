<template>
	<BaseModal v-if="modalOpened" title="Add user?" @close="toggleModal" />
	<button @click="toggleModal">Add</button>
</template>

<script>
``;
import modalMixin from "../modal";
export default {
	mixins: [modalMixin],
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
