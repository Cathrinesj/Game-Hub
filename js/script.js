const spinner = document.querySelector(".spinner");

function changeSpinner() {
    spinner.innerHTML = 'img scr = ../images/fortnite.jpg'
}

setTimeout(changeSpinner, 2500);

const loading = document.querySelector(".spinner");

setTimeout(function() {
    loading.classList.remove("spinpic1");
}, 1000);