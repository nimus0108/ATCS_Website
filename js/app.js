var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<ul></ul>")
var $website = $("<a></a>")

$overlay.append($image);
$overlay.append($caption);
$overlay.append($website);
$("body").append($overlay);


$("#our-class a").click(function(event){
    event.preventDefault();
    var imageLocation = $("img").attr("src");
    $image.attr("src", imageLocation);
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    var websiteLink = $(this).attr("href");
    $website.text("Website");
    $website.attr("href", websiteLink);
    console.log(websiteLink);
    
    $overlay.show();
});

$overlay.click(function(){
    $overlay.hide();
});