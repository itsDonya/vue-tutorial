import { ref } from "vue";
export default function useModal(modalVisibility = false) {
	const modalOpened = ref(modalVisibility);

	function toggleModal() {
		modalOpened.value = !modalOpened.value;
	}

	return [modalOpened, toggleModal];
}
