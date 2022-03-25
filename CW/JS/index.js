
function validateForm(){
    
    var txt = "";
    var count = 0;
    if((document.getElementById("name").value).trim() == ''){
        txt = txt.concat("\n    Full Name");
        count++;
    }
    if((document.getElementById("email").value).trim() == ''){
        txt = txt.concat("\n    Email address");
        count++;
    }
    if(document.getElementsByName("subject")[0].value == "None"){
        txt = txt.concat("\n    Query Subject");
        count++;  
    }
    if(document.getElementsByName("details")[0].value == ''){
        txt = txt.concat("\n    Query Information");
        count++;
    }
    if (count > 0){
        alert("Oops! You forgot to fill the following:".concat(txt));
        return 0;
    }   
    return 1
};


function navigation() {

    if(validateForm() == 1){
        
        var navigation_top = document.getElementById("top");
        var navigation_content = document.getElementById("content");
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var subject = document.getElementsByName("subject")[0];
        var info = document.getElementsByName("details")[0];

        name.disabled = true;
        email.disabled = true;
        subject.disabled = true;
        info.disabled = true;

        var navigation_button = document.getElementById("button");
        navigation_top.innerHTML = 'QUERY DETAILS <hr> <lbr>';
        navigation_content.innerHTML = '<b><span style = "font-size: 14px">Name</span> </b>:&emsp;' + name.value; 
        navigation_content.innerHTML += '<br><br> <b><span style = "font-size: 14px">Email</span></b>:&emsp;' +email.value;
        navigation_content.innerHTML +='<br><br><b><span style = "font-size: 14px">Subject</span></b>:&emsp;'+ subject.value 
        navigation_content.innerHTML += '<br><br><b><span style = "font-size: 12px">Details</span></b>:&emsp;' + '<p><span style ="display:inline-block; padding-left:10px;" >&emsp;<i>' +  info.value + '</p></span>';  
        
        navigation_button.innerHTML =  '<input type="submit" id="edit" value="Edit"></input><input type="submit" id="sent" value="Send"></input>';
        document.getElementById("display-details").classList.add("on");
        var edit = document.getElementById("edit");
        var submit = document.getElementById("sent");

        edit.addEventListener("click",function(){

            document.getElementById("top").innerHTML = "";
            document.getElementById("content").innerHTML = "";
            document.getElementById("button").innerHTML = "";
            document.getElementById("display-details").classList.remove("on");
            
            name.disabled = false;
            email.disabled = false;
            subject.disabled = false;
            info.disabled = false;
            
        });
        submit.addEventListener("click", function(){
            window.open('mailto:lojanjaya@gmail.com?subject=Query details&body='+  (name.value+ email.value +subject.value+info.value));
            window.location.href = "submit.html";
            
        });
    }
    
}