let menuToggle = document.querySelector('#nav');
let iconToggle = document.querySelector('.toggle');

iconToggle.onclick = () => {
    iconToggle.classList.toggle('active');
    menuToggle.classList.toggle('show')
}
