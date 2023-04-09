const header = document.getElementById('header');
const topButton = document.querySelector('.btn-top');

window.onscroll = function() {
    showHeader();
}

function showHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = '#fff';
        topButton.classList.add('show');
    } else{
        header.style.backgroundColor = 'transparent';
        topButton.classList.remove('show'); 
    }
}

topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})