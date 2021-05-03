//underlining active menu element
const navElements = document.querySelectorAll(".menu-list__link");
navElements.forEach((element) => {
    element.addEventListener("click", () => {
        navElements.forEach((el) =>
            el.classList.remove("menu-list__link--active")
        );
        element.classList.add("menu-list__link--active");
    });
});

//adding shadow to navbar on scroll
const header = document.querySelector('#header');
window.addEventListener('scroll', ()=>{ 
    if (window.scrollY > (header.offsetHeight + 100)) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
})

//
const form = document.querySelector(".contact-form");
const subscribe = document.querySelector(".subscribe-form");
form.addEventListener("keyup", labelOut);
subscribe.addEventListener("keyup", labelOut);
function labelOut(e) {
    if (!e.target.value) {
        e.target.previousElementSibling.classList.remove(
            "form-container__label--hide"
        );
    } else {
        e.target.previousElementSibling.classList.add(
            "form-container__label--hide"
        );
    }
}

//activating modal video
const modalVidBtn = document.querySelector("#modalVidBtn");
const modalVid = document.querySelector("#modalVid");
const modalVidToggle = () => {
    modalVid.classList.toggle("hidden");
    modalVid.classList.toggle("modal");
};
modalVidBtn.addEventListener("click", () => {
    modalVidToggle();
});
modalVid.addEventListener("click", () => {
    modalVidToggle();
});

//activating team member modal
const teamElements = document.querySelectorAll(".team-element__link");
const modalTeam = document.querySelector("#modalTeam");
const modalClose = document.querySelector("#modalClose");
const modalToggle = () => {
    modalTeam.classList.toggle("hidden");
    modalTeam.classList.toggle("modal");
};
modalClose.addEventListener("click", () => {
    modalToggle();
});
teamElements.forEach((teamElement) => {
    teamElement.addEventListener("click", function () {
        modalToggle();
        const modalContainer = modalTeam.children[0];
        modalContainer.children[1].innerHTML = teamElement.dataset.name;
        modalContainer.children[2].innerHTML = teamElement.dataset.subname;
        modalContainer.children[3].innerHTML = teamElement.dataset.description;
    });
});

//Glide.js used as a slider
const breakpoint = { portrait: 850};
const reloadThePage = () => {window.location.reload(); console.log('reloaded')}
const createGlide = () => {
    if (window.innerWidth < breakpoint.portrait) {
        document.querySelector(".team-content").classList.add("glide");
        document.querySelector(".team-container").classList.add("glide__track");
        document
            .querySelector(".team-content__elements")
            .classList.add("glide__slides");
        document
            .querySelectorAll(".glide__slide--custom-styles")
            .forEach((glideSlide) => {
                glideSlide.classList.add("glide__slide");
            });
        document
            .querySelector(".team-content___bullets")
            .classList.remove("hidden");
        new Glide(".glide", {
            type: "slider",
            startAt: 0,
            perView: 1,
        }).mount();
    } else if (window.innerWidth > breakpoint.portrait) {
        document.querySelector(".team-content").classList.remove("glide");
        document
            .querySelector(".team-container")
            .classList.remove("glide__track");
        document
            .querySelector(".team-content__elements")
            .classList.remove("glide__slides");
        document
            .querySelectorAll(".glide__slide--custom-styles")
            .forEach((glideSlide) => {
                glideSlide.classList.remove("glide__slide");
            });
        document
            .querySelector(".team-content___bullets")
            .classList.add("hidden");
        
    }
};

window.addEventListener("resize", createGlide);
createGlide();
