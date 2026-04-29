window.addEventListener('load', function() {
    let myElement = document.querySelector('.header-container');
    let newElement = document.querySelectorAll('.header a');
    let arrow = document.querySelector('.drop-minue > a')
    let whImg = document.getElementById("wh-img")
    let blImg = document.getElementById("bl-img")
    let header = document.getElementsByClassName('header')[0]
    let spanHolder = document.querySelector('.span-holder')
    let ul = document.querySelector('.nav')

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

    function checkHeaderContainer() {
        if (window.innerWidth <= 768) {
            myElement.classList.add("bk-color");
        } else if (window.scrollY > 50) {
            myElement.classList.add("bk-color");
        } else {
            myElement.classList.remove("bk-color");
        }  
    }

    function noName() {
        if (window.innerWidth <= 768 && window.scrollY > 50) {
            for (let i = 0; i < newElement.length; i++) {
                newElement[i].classList.remove('black')
            }
        }
    }

    function arrowChecker() {
        if (window.scrollY > 50) {
            arrow.style.setProperty("--w-color", "black");
        } else {
            arrow.style.setProperty('--w-color', 'white');
        }
    }

    function colorImg() {
        if (window.scrollY > 50) {
            whImg.classList.add("display")
            blImg.classList.remove("display")
        } else {
            whImg.classList.remove("display")
            blImg.classList.add("display")
        }
    }

    function header1() {
        if (window.scrollY > 50) {
            header.style.setProperty("padding-top", "0");
        } else {
            header.style.setProperty("padding-top", "10px");
        }
    }

    spanHolder.addEventListener ("click", function () {
        ul.classList.toggle("open")
    })

    checkHeaderContainer();
    checkHeader();
    arrowChecker();
    colorImg()
    header1()
    noName()

    window.addEventListener("resize", function() {
        noName()
        checkHeaderContainer()
    });
    window.addEventListener('scroll', function() {
        checkHeader();
        checkHeaderContainer()
        arrowChecker()
        colorImg()
        header1()
        noName()
    });
});
