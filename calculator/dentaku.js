//new Function('return' + 式)

function get_calc(btn){
    if(btn.value == "="){
        document.screen.display.value = new Function('return' + document.screen.display.value)();
    }else if(btn.value == "C"){
        document.screen.display.value = "";//画面を消すため""
    }else if(btn.value == "×"){
        document.screen.display.value += "*";
    }else if(btn.value == "÷"){
        document.screen.display.value += "/";
    }else{
        document.screen.display.value += btn.value;
    }
    
    document.screen.div_btn.value = "÷";
    document.screen.multi_btn.value = "×";
}
