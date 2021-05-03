//underlining active menu element
const navElements = document.querySelectorAll('.menu-list__link');
navElements.forEach(element => {
    element.addEventListener('click', ()=>{
        navElements.forEach(el => el.classList.remove('menu-list__link--active'));
        element.classList.add('menu-list__link--active');
    })
})

//
const form = document.querySelector('.contact-form');
const subscribe = document.querySelector('.subscribe-form');
form.addEventListener('keyup', labelOut);
subscribe.addEventListener('keyup', labelOut);
function labelOut(e){
        if (!e.target.value) {
            e.target.previousElementSibling.classList.remove('form-container__label--hide')
    } else {
        e.target.previousElementSibling.classList.add('form-container__label--hide');
    }
}

//activating modal video
const modalVidBtn = document.querySelector('#modalVidBtn');
const modalVid = document.querySelector('#modalVid');
const modalVidToggle = () => {
    modalVid.classList.toggle('hidden');
    modalVid.classList.toggle('modal');
}
modalVidBtn.addEventListener('click', ()=> {modalVidToggle()})
modalVid.addEventListener('click', ()=>{modalVidToggle()})

//activating team member modal
const teamElements = document.querySelectorAll('.team-element__link');
const modalTeam = document.querySelector('#modalTeam');
const modalClose = document.querySelector('#modalClose');
const modalToggle = () => {
    modalTeam.classList.toggle('hidden');
    modalTeam.classList.toggle('modal');
}
modalClose.addEventListener('click', ()=> { 
    modalToggle();
})
teamElements.forEach(teamElement => {
    teamElement.addEventListener('click', function(){
        modalToggle();
        const modalContainer = modalTeam.children[0];
        modalContainer.children[1].innerHTML = teamElement.dataset.name;
        modalContainer.children[2].innerHTML = teamElement.dataset.subname;
        modalContainer.children[3].innerHTML = teamElement.dataset.description;
    })
})

//here are some experiment with glide.js, it is not 100% succesful, however I believe
//slider does look like it should
const createGlide = () => {
    if (window.innerWidth < 850) {
        document.querySelector('.team-content').classList.add('glide');
        document.querySelector('.team-container').classList.add('glide__track');
        document.querySelector('.team-content__elements').classList.add('glide__slides');   
        document.querySelectorAll('.glide__slide--custom-styles').forEach(glideSlide => {
            glideSlide.classList.add('glide__slide');
        })    
        document.querySelector('.team-content___bullets').classList.remove('hidden');
        new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 1
        }).mount();
    } else if (window.innerWidth > 850) {
        document.querySelector('.team-content').classList.remove('glide');
        document.querySelector('.team-container').classList.remove('glide__track');
        document.querySelector('.team-content__elements').classList.remove('glide__slides');
        document.querySelectorAll('.glide__slide--custom-styles').forEach(glideSlide => {
            glideSlide.classList.remove('glide__slide');
        })
        document.querySelector('.team-content___bullets').classList.add('hidden');
    }
}
//so this part does not work as I wish it would - it works only from bigger to smaller size; 
//i cannot reach these glide--swipeable, glide--ltr, glide--slider classes
//(they appear along with a 'glide' class, but for some reason doc.querySelector cannot grab them),
//so for going back to desktop-view you have to refresh site
window.addEventListener('resize', createGlide);
createGlide();
