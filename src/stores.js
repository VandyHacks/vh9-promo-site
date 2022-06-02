import { writable, readable } from "svelte/store";

export const pageOrder = readable({
	home: 0,
	about: 1,
	schedule: 2,
	speakers: 3,
	faq: 4,
	sponsors: 5,
});

export let innerHeightVal = writable(window.innerHeight);

export let isAnimationOn = writable(true);

export let isNavbarOpen = writable(false);
