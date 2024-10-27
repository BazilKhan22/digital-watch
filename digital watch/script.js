function updateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
   
    document.getElementById('time').innerText = time;
}


setInterval(updateTime, 1000);
updateTime(); 
