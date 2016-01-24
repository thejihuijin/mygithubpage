$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }    
});

$(function(){
  $('.loader').click(function() {
    $body.addClass("loading");
    setTimeout(function(){$body.removeClass("loading");}, 2000);
  });
});


