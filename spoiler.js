// v1
// let links = document.getElementsByClassName('toggle');

// for (let link of links) {
//     link.addEventListener('click', function() {
//         let elem = document.querySelector('#' + this.dataset.elem)
//         elem.classList.remove('spoiler');
//         elem.classList.add('active');
//     })
// }

// v2
let links = document.querySelectorAll('a');

for (let link of links) {
    link.addEventListener('click', function() {
        let parent = link.parentElement;
        parent.nextElementSibling.classList.toggle('active')
    })
}


