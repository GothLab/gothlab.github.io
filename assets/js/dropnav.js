function init_drop_act () {
	
$('.dropdown-item').each(function(){

$(this).on('click',function(){    $('.dropdown-item').removeClass('act');
	
$(this).addClass('act');   })	

 
        
        
});
};