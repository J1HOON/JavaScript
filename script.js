

var handleId = 0;
var h1 = document.getElementById("time");
var go = document.getElementById("go");
var stop = document.getElementById("stop");
 

function getTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = "현재 시각 : "+`${hour}시${minutes}분${seconds}초`
    h1.textContent = time;
}
 

go.onclick = function(){
    if(handleId == 0){
        handleId = setInterval(getTime,1000);
    }
}
stop.onclick = function(){
    clearInterval(handleId);
    handleId = 0;
}