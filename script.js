window.addEventListener('load', function() {
    var myElement = document.querySelector('.header-container');
    var newElement = document.querySelectorAll('.header a');

    // 1️⃣ دالة لفحص scroll وتطبيق الكلاس
    function checkHeader() {
        if (window.scrollY > 50) {  // لو الصفحة متسكروهاش فوق
            for (var i = 0; i < newElement.length; i++) {
                newElement[i].classList.add('black');
            }
        } else {
            for (var i = 0; i < newElement.length; i++) {
                newElement[i].classList.remove('black');
            }
        }
    }

    // 2️⃣ نفحص أول مرة عند تحميل الصفحة
    checkHeader();

    // 3️⃣ نفحص بعد كل scroll
    window.addEventListener('scroll', function() {
        checkHeader();
    });
});
