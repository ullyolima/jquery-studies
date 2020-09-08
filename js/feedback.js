$(document).ready(function () {

    // thumbs up
    let btnThumb = $("#thumbs");
    let counterThumb = $("#thumbs .thumb-counter span");
    
    btnThumb.on("click", onClick);

    // counter
    let num = $("#num span");
        // increase counter    
    let btnPlus = $("#plus");
    btnPlus.on("click", increase);
        // decrease counter
    let btnMinus = $("#minus");
    btnMinus.on("click", decrease);

    // functions

    function onClick() {

        let count = parseInt(counterThumb.text());
        let imgThumb = $(".icone img");

        if (count == 0) {
            counterThumb.text(count + 1);
            imgThumb.animate({ height: 'toggle' }, "slow");
            imgThumb.animate({ height: 'toggle' }, "slow");
            imgThumb.css("animation", "hands-up 1s linear");

        // Acrescentando um elemento dinamicamente
            // let p = $('<p>', {
            //     text: "Obrigada pelo feedback!"
            // });

            // imgThumb.after(p);

        } else if (count == 1) {

            counterThumb.text(count - 1);
        }
    }

    function increase() {
        let countNum = parseInt(num.text());
        num.text(countNum + 1);
    }

    function decrease() {
        let countNum = parseInt(num.text());
        if (countNum > 0) {
            num.text(countNum - 1);
        }
    }
});