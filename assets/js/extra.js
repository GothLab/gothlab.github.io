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
    $('.card-title:containsIgnoreCase("free")').css('color', '#42df98').text('Free');
  });
$('.card').each(function() {
    let card = $(this);
    let downloadBtn = card.find('a.btn.btn-primary');
    let link = downloadBtn.attr('href');

    // hide stuff
    downloadBtn.hide();
    card.find('span').hide();

    // fully disable lightbox and link behavior
    let photos = card.find('.photos a');
    photos.removeAttr('data-bss-baguettebox href');
    photos.css('pointer-events', 'none');

    // single open on card click
    card.off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.open(link, '_blank');
    });
});
