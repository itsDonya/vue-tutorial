<template>
	<div class="modal-container">
		<div class="modal">
			<div class="modal-header">
				<h2>{{ title }}</h2>
				<span @click="close">Close</span>
			</div>
			<hr />
			<div class="modal-body">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
	},
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>

<style>
.modal-container {
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: #aaaaaa60;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal {
	width: 360px;
	min-height: 240px;
	padding: 1.2rem;
	background-color: aliceblue;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.modal-header {
	color: darkcyan;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.modal-header h2 {
	font-size: 22px;
}
.modal-header span {
	cursor: pointer;
}
hr {
	height: 1px;
	background-color: #008b8b6a;
	border: none;
}
</style>
