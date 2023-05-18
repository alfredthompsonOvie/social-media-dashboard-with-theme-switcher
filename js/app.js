import { changeTheme } from "./changeTheme.js";

function init() {

	changeTheme()

  const tl = gsap.timeline({
    duration: .1
  });

	tl.from([".js-header", ".js__text", ".js-theme"], {
    autoAlpha: 0,
    x: 40,
    duration: 1.5,
		ease: 'back.out',
		stagger: 0.2
	})
		.from(".js-card__main", {
			autoAlpha: 0,
			stagger: 0.2,
		}, "-=0.9")
		.from(".js-subHeading", {
			y: "12",
			autoAlpha: 0,
			stagger: 0.2,
		})
		.from(".js-card__small", {
			autoAlpha: 0,
			stagger: 0.2,
		}, "-=0.5")
		.from(".attribution", {
			autoAlpha: 0,
		});
}

document.addEventListener("DOMContentLoaded", init);
