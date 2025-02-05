buttonColor=["blue","green","red","yellow"]
gamePattern=[];
userClickedPattern=[];
level=0;
started=false;

$(".start").click (function(){
    if(!started){
        nextSequence();
        started=true;
        $(".start").text("Re-start");
    }
    else {
        level=0;
        gamePattern=[];
        // userClickedPattern=[];
        nextSequence();
    }
    
        $(".start").css("font-size", "34px"); 
})


// setTimeout(function(){
//     $(document).click (function(){
//     if(!started)nextSequence();
//     started=true
// })
// },500)

function nextSequence(){
    userClickedPattern = [];
    let randomNum=Math.floor(Math.random()*4);
    randomChosenColor=buttonColor[randomNum];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    let a=new Audio("sounds/"+randomChosenColor+".mp3");
    a.play();
    $("h1").text("level "+level++)
}

// $(".btn").click(function(){
//     $(this).addClass("pressed");
//     let b=$(this)
//     setTimeout(function(){
//         b.removeClass("pressed")
//     },100)
// });

$(".btn").click(function(){
    handler($(this));
})

function handler(c){
    c.addClass("pressed");
    setTimeout(function(){
        c.removeClass("pressed");
    },100)
    let b=c.attr("id");
    let a=new Audio("sounds/"+b+".mp3");
    a.play();
    userClickedPattern.push(b);
    checkAnswer(userClickedPattern.length-1)
}
function checkAnswer(l){
    // alert("hi")
    if(gamePattern[l]===userClickedPattern[l]){
        // alert("success")
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else {
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },1000)
        a=new Audio("sounds/wrong.mp3");
        a.play();
        $("h1").text("Game is over \n Press start to start again")
        started=false;
        level=0;
        gamePattern=[];
        $(".start").css("font-size", "50px"); 
        $(".start").text("start"); 
    }
}