
let myleads=[]
 const input=document.getElementById("input") // const cannot be reassigned
 const ul=document.getElementById("ul")
 const tabbtn=document.getElementById("savetab")
 const deletebtn=document.getElementById("delete")
 
/* 

try and hard to convert a string to array and array to string
myleads=JSON.parse(myleads)
myleads.push("www.youtube.com")
myleads=JSON.stringify(myleads)

console.log(myleads)
 */

deletebtn.addEventListener("dblclick",function(){
localStorage.clear()
myleads=[]
render(myleads)


})

tabbtn.addEventListener("click",function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
   myleads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
})
})



const leadsfromlocalstorage =JSON.parse(localStorage.getItem("myleads"))

if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    render(myleads)
}




// this is same as onclick function but it more good as it does not have any connection with html
const inputbutton=document.getElementById("inputbutton")
inputbutton.addEventListener("click",function(){
    myleads.push(input.value)
   localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    input.value=""
})




function render(leads)
{let listitems=""
for(let i=0;i<myleads.length;i++){
   // listitems+= "<li><a target='_blank' href='" + myleads[i] + "'>" +myleads[i]  +"</a></li>"
    listitems+= `<li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
    </li>`

   // ADDING A ANCHOR TAG IS SO COMPLEX
   
   /*  // another way
    const li=document.createElement("li")
    li.textContent=myleads[i]
    ul.append(li) */
}
ul.innerHTML=listitems
}
