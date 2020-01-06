document.addEventListener('DOMContentLoaded', () => {

    const arrowRight = document.querySelector('#arrow_right'),
        arrowLeft = document.querySelector('#arrow_left');

    let containerFiftWidth = document.querySelector('.container-fifth'),
        slides = document.querySelectorAll('.slide'),
        arrowRightPostition = 1204,
        position = 0,
        counter = 0;
    slider = document.querySelector('.slider');
    slider.style.width = 'containerFiftWidth.offsetWidth * 3';
    //containerFiftWidth.style.maxWidth = slides[0].offsetWidth + 'px';
    arrowRight.addEventListener('click', () => {
        padding = parseInt(getComputedStyle(containerFiftWidth, true).paddingLeft)
        position = position - containerFiftWidth.offsetWidth + padding * 2;
        if (position < (-containerFiftWidth.offsetWidth + padding * 2) * 2) {
            position = 0;
            slider.style.left = position + 'px';
            /*arrowLeft.style.left = -position + 'px';
            arrowRight.style.left = arrowRightPostition - position + 'px';*/
        } else {
            slider.style.left = position + 'px';
            /*arrowLeft.style.left = -position + 'px';
            arrowRight.style.left = arrowRightPostition - position + 'px';*/
        }
    });
    arrowLeft.addEventListener('click', () => {
        padding = parseInt(getComputedStyle(containerFiftWidth, true).paddingLeft)
        position = position + containerFiftWidth.offsetWidth - padding * 2;
        if (position > 0) {
            position = 0;
            slider.style.left = position + 'px';
            /*arrowLeft.style.left = -position + 'px';
            arrowRight.style.left = arrowRightPostition - position + 'px';*/
        } else {
            slider.style.left = position + 'px';
            /*arrowLeft.style.left = -position + 'px';
            arrowRight.style.left = arrowRightPostition - position + 'px';*/
        }
    });
});