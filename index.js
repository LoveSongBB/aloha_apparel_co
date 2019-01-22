$(function() {
$('.selection').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: true,
    percentPosition: false,
    imagesLoaded: true,
    preNextButtons: false,
  }); 
});

$(function() {
  $(".form").on("click", ".box", function() {
    const text = $("input[name='first_name']").val();  
  
    if( checkmail(text)===true){
      alert("Thank you for subscribing!");
    }else{
      alert("You entered an incorrect email!");
    }
  $("input[name='first_name']").val()="";
  });
});
function checkmail(text){
  if(text.indexOf("@")>=0){ 
    return true;
  }
  return false;
}
