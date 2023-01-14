$('img').each(function(){

$(this).addClass('img-fluid');
});

$('h2,h5').each(function(){
var ATR = $(this).attr('data-heading');
$(this).attr('id',ATR);

});



$('.top').on('click',function(){

window.scrollTo(0,0)

});


$('#tabs').find('Img').on('mouseover',function(){

var VAL = $(this).attr('src');
              
    
});


$('#tabs').find('Img').each(function(){

var VAL = $(this).attr('src');
var VAL2 = VAL.split('/');
var VAL3 = VAL2[3];    
var VAL4 = VAL3.split('_');
var VAL5 = VAL4[0]    
$(this).attr('title',VAL5);                      
    
});