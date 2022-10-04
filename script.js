let opera ="";
let prevOpert='';
let firstvalue ='';
let secondvalue= '';
let finalAnswer ="";

function btn(value){
    if(h1.innerHTML ==0){
        h1.innerHTML='';
    }
    if(h1.innerHTML==finalAnswer){
           h1.innerHTML=""
           h6.innerHTML=""
    }
    h1.innerHTML+=value;
}

function clearh1Screen(){
    h1.innerHTML =0;
    h6.innerHTML ='';
}

function clearScreen(){
    h1.innerHTML =0;
    // h6.innerHTML ='';
}

function op(answer){
// notice how opera is '' the first time so its false so after running the second time 
// it wpould make opera true

    if (opera) {
    equals()
    }
// if i press a number and an operation in the absense of an equals to let it continue
// to work
    opera=answer;
    prevOpert=h1.innerHTML;
    h6.innerHTML= `${prevOpert} ${opera}`;

        if (h1.innerHTML == prevOpert) {
        h1.innerHTML=0;
        } 
         
}

function square() {
    let value =h1.innerHTML;
    let answer = Number(value)**2;
    h6.innerHTML = `sqr(${value})`;
    h1.innerHTML =answer;
}

function inverse() {
    let value =h1.innerHTML;
    let answer = 1/Number(value);
    h6.innerHTML = `1/(${value})`;
    h1.innerHTML =answer;
}

function squareroot() {
    let value =h1.innerHTML;
    let answer = Number(value)**0.5;
    h6.innerHTML = `root(${value})`;
    h1.innerHTML =answer;
}

function percent() {
    let value =h1.innerHTML;
    let answer = Number(value)/100;
    h6.innerHTML = `percentage(${value})`;
    h1.innerHTML =answer;
}

function plusorminus() {
    let value =h1.innerHTML;
    let answer = Number(-value);
    h6.innerHTML = `negate(${value})`;
    h1.innerHTML =answer;
}

function deleteprevnumber() {
 h1.innerHTML=h1.innerHTML.slice(0,-1)
}

function equals(){
   firstvalue =  prevOpert;
   secondvalue =h1.innerHTML;

   if (opera =='+') {
   finalAnswer = Number(firstvalue) + Number(secondvalue);
}
 else if (opera =='-') {
   finalAnswer = Number(firstvalue) - Number(secondvalue);
}
  else if (opera =='/') {
   finalAnswer = Number(firstvalue) / Number(secondvalue);
}
  else if (opera =='*') {
   finalAnswer = Number(firstvalue) * Number(secondvalue);
}

h6.innerHTML=`${firstvalue} ${opera} ${secondvalue} =`;
   h1.innerHTML=finalAnswer;

   if(finalAnswer){
    opera="";
   }
}
