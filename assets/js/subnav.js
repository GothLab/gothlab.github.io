$('.BTNT').each(function(){
       
$(this).on('click',function(){
 $('.BTNT').removeClass('active');
 $(this).addClass('active');       
 $('#sub2').show(); 
var TXT = $(this).parent().find('.dropdown-menu').html();   
        
$('#sub2').children().remove();        
$('#sub2').append(TXT);
init_drop_act ();
});
        
        
        
})