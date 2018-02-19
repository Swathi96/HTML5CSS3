function big(e) {
    
 var divOverlay =document.getElementById("imagenew");
 var imgClass=e.id;
 //document.write(imgClass);
 //console.log(imgClass);
 var sourceImg=imgClass.src;
// document.write(sourceImg);
 divOverlay.src =imgClass.src;
 //console.log()
 var ele=document.getElementById(imgClass);
 var srcimg=ele.src;
 //console.log(srcimg);
 divOverlay.src=srcimg;
  if( e.className == "imgnormal" ) {
      //document.write(divOverlay.src);
        e.className = "bigImg";
          divOverlay.style.opacity="1.0";
        
    } 
    
}

function small(e) {
    

 var divOverlay =document.getElementById("imagenew");
 var imgClass=e.id;

 var sourceImg=imgClass.src;

 divOverlay.src =imgClass.src;
 
 var ele=document.getElementById(imgClass);
 var srcimg=ele.src;

 divOverlay.src=srcimg;
  if( e.className == "bigImg" ) {
      //document.write(divOverlay.src);
        e.className = "imgnormal";
          divOverlay.style.opacity="0.0";
        
    } 
    
}
