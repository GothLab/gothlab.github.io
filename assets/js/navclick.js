/*$('#vfx .TRGR').on('mouseover',function(){
$(this).click();
})*/

function hider () {
    
    $('#VFX-1').hide();
    $('#PACKS').hide();
    
};

function show (x) {
  $('#'+x).show();  
    
};

hider();show('PACKS');
$('#bpacks').click();