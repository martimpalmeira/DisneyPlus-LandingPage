const questionTitle = document.querySelectorAll('.question-title');
const answer = document.getElementsByClassName('answer');
const iconsContainer = document.getElementsByClassName('icons-container');

const x = iconsContainer[0];
console.log(x.children[0])

export function init() {

    for (let i = 0; i < questionTitle.length; i++) {
        questionTitle[i].addEventListener('click', () => {
            answer[i].classList.toggle('show-answers');
            for (let j = 0; j < iconsContainer[i].children.length; j++) {
                iconsContainer[i].children[j].classList.toggle('hide-icon')
            }
        })
    }
}

