import BaseModal from "./components/UI/BaseModal.vue";
export default {
	data() {
		return {
			modalOpened: false,
		};
	},
	components: {
		BaseModal,
	},
	methods: {
		toggleModal() {
			this.modalOpened = !this.modalOpened;
		},
	},
};
