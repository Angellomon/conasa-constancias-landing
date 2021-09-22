import { writable } from 'svelte/store';

export const invalidEmail = writable(false);

export const downloadError = writable(false);
