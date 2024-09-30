$("h1").on("mouseover", function () {
  if ($("h1").css("color") === "rgb(0, 128, 0)") {
    $("h1").css("color", "red");
  } else $("h1").css("color", "green");
});

$(".heading").on("click", function () {
  if ($(this).html() === "Red") {
    $("h1").css("color", "rgb(255,0,0)");
  }
  if ($(this).html() === "Green") {
    $("h1").css("color", "rgb(0,255,0)");
  }
  if ($(this).html() === "Blue") {
    $("h1").css("color", "rgb(0,0,255)");
  }
  if ($(this).html() === "White") {
    $("h1").css("color", "rgb(255,255,255)");
  }
  if ($(this).html() === "Black") {
    $("h1").css("color", "rgb(0,0,0)");
  }
});

$(".back").on("click", function () {
  if ($(this).html() === "Red") {
    $("body").css("background-color", "rgb(255,0,0)");
  }
  if ($(this).html() === "Green") {
    $("body").css("background-color", "rgb(0,255,0)");
  }
  if ($(this).html() === "Blue") {
    $("body").css("background-color", "rgb(0,0,255)");
  }
  if ($(this).html() === "White") {
    $("body").css("background-color", "rgb(255,255,255)");
  }
  if ($(this).html() === "Black") {
    $("body").css("background-color", "rgb(0,0,0)");
  }
});

$(".submit").on("click", function () {
  if ($("body").css("background-color") === "rgb(255, 255, 255)") {
    
    $("body").css("background-color", "rgb(112, 127, 209)"); 
    $("body").css("background-color", "white"); 
  }
});

$(".action").on("click", function () {
    if ($(this).html() === "Hide"){
        $("h1").toggle();
    }
    if ($(this).html() === "Fade"){
        $("h1").fadeToggle();
    }
    if ($(this).html() === "Slide"){
        $("h1").slideToggle();
    }
    if ($(this).html() === "Opaque") {
        if ($("h1").css("opacity") == 0.5) {
            $("h1").slideUp().slideDown().animate({opacity: 1});  
        } else {
            $("h1").slideUp().slideDown().animate({opacity: 0.5});  
        }
    }
    
});
