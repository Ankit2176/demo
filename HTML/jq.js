//box

$(".box").mouseenter(function () {
    $(this).css('height', '500px')

})
$(".box").mouseleave(function () {
    $(this).css('height', '300px')

})
$(".box").click(function () {
    $(this).css('width', '150%')


})
$(".box").dblclick(function () {
    $(this).hide(1000)

})



//p

$("p").click(function () {
    $(this).hide(1000);
});


$("p").mouseenter(
    function () {
        $(this).css('background-color', 'lightblue')
    }
)

// //boxes
// $(document).ready(function(){
// $(".boxes").hover(
//     function () {
//         alert("I am Body buddy !!")
//     },
//     function () {
//         alert("go back budyy !!")
//     })
// });

$("#button1").click(function () {
    $("h1").toggle(1000)
    $(this).css('background-color', 'lightblue')
    $(this).css('width', '100%')

});

$("#button2").click(function () {
    $("footer").fadeToggle(2000)
    $(this).css('background-color', 'lightblue')

    $(this).css('width', '100%')
})


$("#button3").click(function () {
    $("section").slideToggle(1000);

})


$("#button4").click(function () {
    $("footer").animate({
        height: '+=16vh',

    })
})

$("#button5").click(function () {
    $("footer").animate({
        height: '-=16vh',

    }, 5000)
})

//ajax
$(document).ready(function () {
    $("button5").click(function (e) {
        preventDefault(e)
        $(".box-1").load("abc.text");
    })
})

const a = navigator.userAgent


console.log("a");