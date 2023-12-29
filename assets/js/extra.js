$('#beffects').on('click',function(){
	
	
	$("#VFX-1").show();
	$("#mixer").hide();
	
});

$('#bpacks').on('click',function(){
	
	
	$("#VFX-1").hide();
	$("#mixer").show();
	
});

$("#VFX-1").hide();




  $(document).ready(function() {
    // Custom jQuery filter for case-insensitive :contains
    $.expr[':'].containsIgnoreCase = function (n, i, m) {
      return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    // Find all .card-title elements that contain the text "free" (case-insensitive) and add CSS
    $('.card-title:containsIgnoreCase("free")').css('color', '#42bedf').text('Free');
  });
