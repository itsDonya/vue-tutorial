import { ref } from "vue";
export default function useModal() {
	const modalOpened = ref(false);

	function toggleModal() {
		modalOpened.value = !modalOpened.value;
	}

	return [modalOpened, toggleModal];
}
