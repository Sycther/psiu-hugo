var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="overlay"]'))

console.log(popoverTriggerList)

for (var i = 0; i < popoverTriggerList.length; i++) {
    popoverTriggerList[i].addEventListener("focusin", focusin(i));
    popoverTriggerList[i].addEventListener("mouseenter", focusin(i));
    popoverTriggerList[i].addEventListener("focusout", focusout(i));
    popoverTriggerList[i].addEventListener("mouseleave", focusout(i));
}

function focusin(i) {
    return function() {
        popoverTriggerList[i].getElementsByClassName('card-img')[0].classList.add('overlay-img-dark');
        popoverTriggerList[i].getElementsByClassName('card-img-overlay')[0].classList.add('visible');
        popoverTriggerList[i].getElementsByClassName('card-img-overlay')[0].classList.remove('invisible');
        console.log(i);
    };
}

function focusout(i) {
    return function() {
        popoverTriggerList[i].getElementsByClassName('card-img')[0].classList.remove('overlay-img-dark');
        popoverTriggerList[i].getElementsByClassName('card-img-overlay')[0].classList.remove('visible');
        popoverTriggerList[i].getElementsByClassName('card-img-overlay')[0].classList.add('invisible');
        console.log(-i);
    };
}