// A $( document ).ready() block.
$(document).ready(function () {
   //console.log( "ready!" );
  //alert('test');
  
  $(document).on('change', '#t-shirt', chkTshirt );
  
  
  //chkTshirt function
  
  function chkTshirt() {
    
    var tshirt=$('#t-shirt').val();
    //alert(tshirt);
    
    //begin if
    if (tshirt =='Custom') {
      //alert('it works');
      $('#custom').removeAttr('disabled'); //remove disabled
      
    }//end if tshirt
    else {
      $('#custom').attr('disabled', true); //disabled again
      $('#custom').val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove required
    }
    
  }//end of chkTshirtfunction
  
});
