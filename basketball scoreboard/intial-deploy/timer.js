
let inputtime=document.getElementById("time")
let setnewtime=document.getElementById("setnewtime")
let setprevioustime=document.getElementById("setprevioustime")
let stopwatch=document.getElementById("timer")
let start=document.getElementById("start")
let stoptimer=document.getElementById("stop")

let timming=0
let intervalid=0
let sametime=0
let timerstopped=true


start.addEventListener("click",function(){
    if(timerstopped){
        timerstopped=false
        intervalid=setInterval(timeworking,1000)
    timeworking()
    }
})


stoptimer.addEventListener("click",function(){
    timerstopped=true
    clearInterval(intervalid)
 
})




setnewtime.addEventListener("click",function(){
timming=inputtime.value*60
sametime=inputtime.value*60
showtime()
timerstopped=true
clearInterval(intervalid)
inputtime.value=""
})


setprevioustime.addEventListener("click",function(){
    timming=sametime
    showtime()
    timerstopped=true
    clearInterval(intervalid)
})






function timeworking(){
    showtime()
    timming--
    if(timming<0){
        clearInterval(intervalid)
    }
}

function showtime(){
    let timemin=Math.floor(timming/60)
    let timesec=Math.floor(timming%60)

if(timemin<10){
    if(timesec<10){
        stopwatch.textContent=`0${timemin}:0${timesec}`
    }
    else{
        stopwatch.textContent=`0${timemin}:${timesec}`
    }
}else{
    if(timesec<10){
        stopwatch.textContent=`${timemin}:0${timesec}`
    }
    else{
        stopwatch.textContent=`${timemin}:${timesec}`
    }
}

}