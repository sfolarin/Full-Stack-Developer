
/*
$("h1").addClass("big-text")
$("button").html("<em>Hey</em>")
$("h1").removeClass("big-text")

$("button").click(newClick)




$("input").keypress(keyPressed)

function keyPressed(event){
    $("h1").text(event.key)
}


}
*/

/*
$("h1").on("click", myFunc)

function myFunc(){
    $("h1").css("color", "red")
    setTimeout(function (){$("h1").css("color", "black")}, 500)
    $("h1").addClass("big-text")
   
    $("h1").animate("opacity:0.5");
}
*/
$("button").on("click", newFunc)

function newFunc(){
    $("h1").animate({opacity:0.1})
}

