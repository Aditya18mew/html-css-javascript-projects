let homeplusone=document.getElementById("homeplusone")
let homeplustwo=document.getElementById("homeplustwo")
let visitorplusone=document.getElementById("visitorplusone")
let visitorplustwo=document.getElementById("visitorplustwo")
let homescore=document.getElementById("homescore")
let visitorscore=document.getElementById("visitorscore")
let quater=document.getElementById("quater")
let updatequater=document.getElementById("updatequater")


let totalhomescore=0
function homescoreupdater(value){
    
totalhomescore+=value
if(totalhomescore<9){
    homescore.textContent=`0${totalhomescore}`
}
if(totalhomescore>9){
    homescore.textContent=`${totalhomescore}`
}

}
let totalvisitorscore=0
function visitorscoreupdater(value){
    
totalvisitorscore+=value
if(totalvisitorscore<9){
    visitorscore.textContent=`0${totalvisitorscore}`
}
if(totalvisitorscore>9){
    visitorscore.textContent=`${totalvisitorscore}`
}

}

homeplusone.addEventListener("click",function(){
homescoreupdater(1)
})
homeplustwo.addEventListener("click",function(){
    homescoreupdater(2)
})
visitorplusone.addEventListener("click",function(){
visitorscoreupdater(1)
})
visitorplustwo.addEventListener("click",function(){
    visitorscoreupdater(2)
})


let currentquater=0
updatequater.addEventListener("click",()=>{
    currentquater+=1
    quater.textContent=`${currentquater}`
})



