// $(document).ready(function(){
//     $("#p1").click(function(){
//         $("#p5").hide();
//     });
// });

// $(document).ready(function(){
//     $("#p1").mouseenter(function(){
//         $("#p5").hide();
//     });
// });

// $(function(){

//     $("#p1").click(function(){
//         $("#p4").hide();
//     });
// });

// $(function(){

//     $(selector).animate(arg1, arg2, arg3)


// })

// $(function(){
//     $("button").click(function(){
//         $("div").animate({
//             left: '600px',
//             opacity: 0.2,
//             width: '200px',
//             height: '200px'}
//             , 3000 )

//     })
// })

// $(function(){
//     $("#start").click(function(){
//         // var myVar = $("div").attr("style");
//         // console.log(myVar);
//         $("#p1").text("Voila mon nouveau texte");

//     });
// });


$(function(){
    $("#but1").click(function()
    {
        $("#p1,#p2").toggleClass("red");
    })
    
    //     $("#but2").click(function()
    // {
    //         $("#p1,#p2").removeClass("red");

    // })
})