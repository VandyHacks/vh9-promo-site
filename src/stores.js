import { writable, readable } from 'svelte/store'

export const pageOrder = readable({
    home: 0,
    wave: 1,
    about: 2,
    schedule: 3,
    speakers: 4,
    faq: 5,
    sponsors: 6,
})

export let innerHeightVal = writable(window.innerHeight)

export let isNavbarOpen = writable(false)

export let isAnimationOn = writable(false)
