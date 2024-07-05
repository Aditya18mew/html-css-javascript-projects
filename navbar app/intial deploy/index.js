const threerod=document.getElementById("threerod")
const navlist=document.getElementById("navlist")

threerod.addEventListener("click",function(){
   
    const currentdisplay=window.getComputedStyle(navlist).display


    if(currentdisplay==="none"){
        console.log("click")
        navlist.style.display="block"
    }else{
        navlist.style.display=`none`
    }

})


