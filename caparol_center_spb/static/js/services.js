document.addEventListener('DOMContentLoaded', () => {
    const imgCard1 = document.querySelector('#card-img-1'),
        imgCard2 = document.querySelector('#card-img-2'),
        imgCard3 = document.querySelector('#card-img-3');
    let decisionCard1 = document.querySelector('#card_decision-1'),
        decisionCard2 = document.querySelector('#card_decision-2'),
        decisionCard3 = document.querySelector('#card_decision-3');

    imgCard1.addEventListener('click', () => {
        decisionCard1.style.border = '2px solid green';
        decisionCard2.style.border = 'none';
        decisionCard3.style.border = 'none';
    })
    imgCard2.addEventListener('click', () => {
        decisionCard2.style.border = '2px solid green';
        decisionCard1.style.border = 'none';
        decisionCard3.style.border = 'none';
    })
    imgCard3.addEventListener('click', () => {
        decisionCard3.style.border = '2px solid green';
        decisionCard2.style.border = 'none';
        decisionCard1.style.border = 'none';

    })

});