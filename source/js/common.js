

$(document).ready(function() {

    $("th.number, td.number").click(function(){
    $("input#number").val($("input#number").val()+$(this).html());
    })

    $(".delete").click(function(){
        var inputText = $("input#number").val();
       $("input#number").val(inputText.substr(0, inputText.length -1));
  
    })

    $(".re-entry").click(function(){
    $("input#number").val("");
    })


    $('a.print_btn').click(function() {
        $("div.popup").css("display", "block");
        $('div.popup').css("height", $(document).height());
    });

    $("div.more a").click(function() {
        $(this).css("display", "none");
        $("div.list_wrap").addClass("down");
        
        return false;
    });

    $("div#map p.img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("th").mouseup(function(){ 
        $("th").removeClass("on");
    });

    $("th").mousedown(function(){ 
        $(this).addClass("on");
    });

    $("th").on('touchstart', function (e) {
        $(this).addClass("on");
    });
    
    $("th").on('touchend', function (e) {
        $("th").removeClass("on");
    });

    $("td").mouseup(function(){ 
        $("td").removeClass("on");
    });

    $("td").mousedown(function(){ 
        $(this).addClass("on");
    });

    $("td").on('touchstart', function (e) {
        $(this).addClass("on");
    });
    
    $("td").on('touchend', function (e) {
        $("th").removeClass("on");
    });

    $("div.ad").slick({
        autoplay:true,
        speed: 2000,
        infinite: true,
    });
        
    $("div.map_img").slick({
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".guid",
    }); 

    $("div.guid").slick({
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        asNavFor: ".map_img",
    });
});

