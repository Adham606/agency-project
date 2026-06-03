window.addEventListener('load', function() {
    let myElement = document.querySelector('.header-container');
    let newElement = document.querySelectorAll('.header a');
    let whImg = document.getElementById("wh-img")
    let blImg = document.getElementById("bl-img")
    let header = document.getElementsByClassName('header')[0]
    let spanHolder = document.querySelector('.span-holder')
    let ul = document.querySelector('.nav')
    let slider = document.querySelector('.about-img')
    let arrowg = document.querySelector('.arrow-g')
    
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
    
    function arrowgChecker() {
        if (window.scrollY > 800) {
            arrowg.classList.add('active')
        } else {
            arrowg.classList.remove('active')
        }
    }

    arrowg.addEventListener ('click', ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

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

    document.querySelector(".f-i").addEventListener("click", function() {
        if (slider.src.includes("about1.jpg")) {
            slider.src= "images/about2.webp"
        } else {
            slider.src= "images/about1.jpg"
        }
    });

    document.querySelector(".f-i-r").addEventListener("click", function() {
        if (slider.src.includes("about1.jpg")) {
            slider.src= "images/about2.webp"
        } else {
            slider.src= "images/about1.jpg"
        }
    });

    spanHolder.addEventListener ("click", function () {
        ul.classList.toggle("open")
    });

    checkHeaderContainer();
    checkHeader();
    colorImg();
    header1();
    noName();

    window.addEventListener("resize", function() {
        noName()
        checkHeaderContainer()
    });
    window.addEventListener('scroll', function() {
        checkHeader();
        checkHeaderContainer()
        colorImg()
        header1()
        noName()
        arrowgChecker()
    });
});
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);
});