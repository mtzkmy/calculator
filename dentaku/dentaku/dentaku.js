

function get_calc(btn){
    if(btn.value == "="){
        try{document.screen.display.value = eval(document.screen.display.value);
        } catch(e){
            document.screen.display.value = "Error";
        }
    }

    else if(btn.value == "C"){
        document.screen.display.value = "";//画面を消すため""
    }else if(btn.value == "×"){
        document.screen.display.value += "*";
    }else if(btn.value == "÷"){
        document.screen.display.value += "/";
    }else{
        document.screen.display.value += btn.value;
    }
    
}

