var timeClock;
function sendCode() {
    var timer_num = 60;
    timeClock=setInterval(function(){
        timer_num--;
        $('.header-content').html(timer_num);
       
        if (timer_num == 0) {
            clearInterval(timeClock);
            $('.header-content').html(60);
        } 
    },1000)
}
$('.header-content').click(function(){
        sendCode();
});
