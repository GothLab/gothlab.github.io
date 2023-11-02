$( ".placer" ).each(function() {
    $(this).on("click", function(){
      
            var key = $(this).attr('trigger');
            
          var myModal = new bootstrap.Modal(document.getElementById(''+key))
myModal.show()
            
    });
});