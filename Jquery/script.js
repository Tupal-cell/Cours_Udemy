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

$(function(){
    $("button").click(function(){
        $("div").animate({
            left: '600px',
            opacity: 0.2,
            width: '200px',
            height: '200px'}
            , 3000 )

    })
})