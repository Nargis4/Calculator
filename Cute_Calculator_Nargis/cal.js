const inputBox=document.getElementById("inputBox");

function appendtodisplay(input){
inputBox.value += input;
}

function clearDisplay(){
inputBox.value="";
}

function calculate(){
try{
    inputBox.value = eval(inputBox.value);
}
catch(error){
    inputBox.value="Error";
}
}

function del(){
    inputBox.value = inputBox.value.slice(0,-1);
}



