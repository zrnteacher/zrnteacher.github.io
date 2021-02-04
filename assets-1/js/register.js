function confirm(){
    var IDnumber= document.getElementById("IDnumber").value;
    if(IDnumber[0]<'A' || IDnumber[0]>'z'){
            alert("身分證字號輸入錯誤!!!");
            document.getElementById("IDnumber").value="";
    }
    else if(IDnumber[0]>'Z'){
        IDnumber[0] -= 'a';
        IDnumber[0] += 'A';
    
        var reply= [document.getElementById("class").value,
                    document.getElementById("number").value,
                    document.getElementById("name").value,
                    document.getElementById("learning-namber").value,
                    IDnumber
               ]
        var confirmMsg= "煩請檢查一下資料是否有錯\n\n　" + "班級：" + reply[0] + ""
        var check= confirm();
    }
}