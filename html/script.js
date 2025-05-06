(function($) { $(document).ready(function(){

  $("header").load("index.html header div.content", function(response, status, xhr) {
    if(status == "success") {
      var currentLocation = window.location.pathname;
      $('nav ul li a').each(function() {
        if($(this).attr("href") === currentLocation){ $(this).addClass('active'); }
      });
    } 
    else{ console.log("Error: " + xhr.status + " " + xhr.statusText); }
  });

  $("footer").load("index.html footer div.content");
  $("footer").on("click", ".content a", function(event) { event.preventDefault(); $("footer .content div").toggle(); $("html, body").animate({ scrollTop: $(document).height() }, 250); });

  $("div.qst").click(function() { 
    $(this).next('div.ans').slideToggle(300);
    $(this).children('img').toggleClass('flip');
  });

  $("table.example a").click(function(){ return false; });
  
  $('a.popup').click(function(event) { 
    event.preventDefault(); 
    $("div#popgray").fadeIn(100);
    $("div#popup").load("devs.html?ts=" + new Date().getTime() + " section#"+$(this).attr('data'), function(response, status, xhr) {
      if(status == "success") {
        $("div#popup").prepend('<div id="popheader">Developer Notes</div>');
        $("div#popup").append('<div id="popfooter"><button>Close</button></div>');
      } 
      else{ console.log("Error: " + xhr.status + " " + xhr.statusText); }
    });
    $('div#popup').fadeIn(100);
  });

  $("div#popgray").click(function() {
    $(this).fadeOut(100);
    $('div#popup').fadeOut(100);
  });
  $("div#popup").on("click", "button", function(event) { $("div#popgray").trigger("click"); });

}); })(jQuery);
