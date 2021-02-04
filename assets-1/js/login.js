var send=0;
function register(){
    location.href= "/register.html";
}

function check(status){
    if(status){
        document.getElementById("IDnumber").type= "text";
    }
    else{
        document.getElementById("IDnumber").type= "password";
    }
}

function Confirm(){
    var name= document.getElementById("Number").value;
    var IDnumber= document.getElementById("IDnumber").value;
    
    if(name=="" ){
        alert("請輸入學號");
    }
    else if( IDnumber==""){
        alert("請輸入身份證字號");
    }
    else{
        if(IDnumber[0]<'A' || IDnumber[0]>'z'){
            alert("身分證字號輸入錯誤!!!");
            document.getElementById("IDnumber").value="";
        }
        else if(IDnumber[0]>'Z'){
            IDnumber=IDnumber.toUpperCase();
            Send(name, IDnumber);
        }
        else{
            Send(name, IDnumber);
        }
    }
}

function Send(name, IDnumber){
    var Url=["https://script.google.com/macros/s/AKfycbxzPg5Z5FuVDCKlR1ubd1bTw8xW9qsWMOWkC2coDQMZl9uzbOE/exec","https://script.google.com/macros/s/AKfycbxZ0BOpexJgOoS4Ki3wARpi10pyR9EWgUDuLGdkvw/exec"];
    $.ajax({
        type:'get',
        cache: false,
        timeout: 8000,
        url: Url[send%2],
        data:  {
            'name' : name,
            'idnumber': IDnumber
        },
        datatype:'json',
        success: function(respond){
            if(respond=="fail"){
                alert("密碼輸入錯誤，請重新填寫");
                document.getElementById("IDnumber").value="";
            }
            else{
                alert("登入成功");
                window.opener.document.getElementById("activityId").value= respond;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            send++;
            confirm();
            alert("登入逾時\n將自動幫您重新傳送資料");
        }
    });
}   