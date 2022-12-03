<template>
	<base-modal v-if="modalOpened" title="Users Projects" @close="toggleModal">
		<p>[Projects]: Nothing to show yet</p>
	</base-modal>
	<button @click="toggleModal">Show users project</button>
</template>

<script>
import modalMixin from "../mixin";
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
