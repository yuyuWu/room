/**
 * Created by Administrator on 2017/4/5.
 */

$("#btn_1").bind('click',function(){
    $.ajax({

        url: 'http://120.27.95.22/CloudHome/index.php/Home/Index/user_login',
        type: 'GET',
        dataType: "json",
        data:{
            phone:123456767,
            user_pwd:"555555"
        },
        contentType: "application/json",
        async:true,
        success: function(data){
            alert("123") ;
            var json = JSON.stringify(data);
            alert(json);
        },
        error: function(){
            alert("’˝‘⁄«Î«Û£¨«Î…‘∫Ú...");
        }
    });})
