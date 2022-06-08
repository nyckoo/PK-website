import { writable } from 'svelte/store';

export const products =  writable([]);
// products.subscribe(xd => console.log(xd))
export const user = writable({
    name: "",
    email: "",
    topic: "",
    message: "",
  })