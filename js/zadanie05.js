const container = document.querySelector('#container');
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        container.innerHTML = this.dataset.text;
    });
});