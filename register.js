/**
 * Created by Administrator on 2017/4/9.
 */
function Show_Hidden(obj)
{
    if(obj.style.display=="block")
    {
        obj.style.display='none';
    }
    else
    {
        obj.style.display='block';
    }
}
window.onload=function() {
    var send = document.getElementById("send");
    var Resend = document.getElementById("Resend");
    var Time = document.getElementById("Time");

    send.onclick = function () {
        Show_Hidden(Resend);
        return false;

    }

}
