import { writable } from 'svelte/store';

// function createCount() {
// 	const { subscribe, set, update } = writable(0);

// 	return {
// 		subscribe,
// 		increment: () => {},
// 		decrement: () => {},
// 		reset: () => {}
// 	};
// }

export const products =  writable({});

export const user = writable({
    name: "test",
    email: "testing@gmail.com",
    topic: "",
    message: "",
  })