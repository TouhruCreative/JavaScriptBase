let text = "";
function pressButton(value){
    if(['+','-','*','/'].includes(value)){
        if(text[text.length-1] == value){
            return;
        }
    }
    if(value == '='){
        text = eval(text);
    } else if (value == 'c'){
        text = "";
    } 
    else{
        text+=value;
    }
    let out = document.getElementById("out");
    out.value = text;
}