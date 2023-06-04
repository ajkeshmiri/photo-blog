const yearButton = document.querySelectorAll('li');
const post = document.querySelectorAll('.post');
const span = document.querySelectorAll('span');

function sortByYear(year) {
    for (i = 0; i < span.length; i++) {
        if (span[i].innerText = '2018') {
            post[i].classList.toggle('hidden');
        }
    }
}

yearButton[1].addEventListener('click', sortByYear(2018));

