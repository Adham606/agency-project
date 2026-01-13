window.addEventListener('load', function() {
    let myElement = document.querySelector('.header-container');
    let newElement = document.querySelectorAll('.header a');
    // let newElement1 = document.getElementsByClassName(".header-container")

    function checkHeader() {
        if (window.scrollY > 50) {
            for (let i = 0; i < newElement.length; i++) {
                newElement[i].classList.add('black');
            }
        } else {
            for (let i = 0; i < newElement.length; i++) {
                newElement[i].classList.remove('black');
            }
        }
    }

    checkHeader();

    window.addEventListener('scroll', function() {
        checkHeader();
    });
});
