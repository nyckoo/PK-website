import { writable } from 'svelte/store';

export const products =  writable([]);

export const user = writable({
    name: "",
    email: "",
    topic: "",
    message: "",
  }
);