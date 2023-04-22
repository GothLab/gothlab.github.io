 $('.navg').hide();  

$('.TRGR').each(function(){
       
$(this).on('click',function(){
$('.TRGR').removeClass('active');   
$(this).addClass('active');
 $('.navg').hide();  
 $('#sub2').hide();
 var TRG = $(this).attr('targetz');
       
 $('#'+TRG).toggle();       
        
});
        
      
});




 $('#VFX').hide();

$('#bmain').on('click',function(){

 $('#VFX').hide();
    
 $('#intro').show();

});

$('#btitles').on('click',function(){});

$('.beffects').on('click',function(){

 $('#VFX').show();
 $('#intro').hide();
    
});

$('#bpacks').on('click',function(){ });

$('#bcourses').on('click',function(){ });

$('#bgallery').on('click',function(){ });



