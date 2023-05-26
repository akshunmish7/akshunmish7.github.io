var nav=document.querySelectorAll('.nav-menu a');
for(var i=0; i<nav.length; i++){
    nav[i].addEventListener('click',function(event){
        event.preventDefault();
        var tgid=this.textContent.trim().toLowerCase();
        var tgse=document.getElementById(tgid);
        var interval=setInterval(function(){
            var tg=tgse.getBoundingClientRect();
            if(tg.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);
    });
}
