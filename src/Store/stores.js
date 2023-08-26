import { writable } from 'svelte/store';

export const cookiesAlertVisible = writable(true);

export const products = writable([]);

export const user = writable({
  name: "",
  email: "",
  topic: "",
  message: "",
}
);