console.log(gsap);

const tl = gsap.timeline();

tl.from('.nav', { duration: 0.9, opacity: 0, y: -100, ease: 'power.inOut' })
	.from('.heading-1', { duration: 1.2, y: 300, opacity: 0, ease: 'power.in', delay: -0.9 })
	.to('.cover-text', {
		duration: 0.9,
		width: 0,
		left: '100%',
		ease: 'sine.inOut',
	})
	.from('.display-section', { duration: 0.9, y: 300, opacity: 0, ease: 'power.in' });
