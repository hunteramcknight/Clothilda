var deci2 = false;
function o1(){
    //alert('ok!!');
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "1";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "1";
    }
}
function o2(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "2";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "2";
    }
}
function o3(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "3";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "3";
    }
}
function o4(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "4";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "4";
    }
}
function o5(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "5";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "5";
    }
}
function o6(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "6";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "6";
    }
}
function o7(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "7";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "7";
    }
}
function o8(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "8";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "8";
    }
}
function o9(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "9";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "9";
    }
}
function o0(){
    if (document.getElementById('opp_sign').innerHTML === ""){
    document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + "0";
    } else {
    document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + "0";
    }
}
function oDecimal(){
    var op1 = toString(document.getElementById('output1').innerHTML);
    var op2 = toString(document.getElementById('output2').innerHTML);


    if (document.getElementById('opp_sign').innerHTML === ""){
        //check if decimal is already within number (output 1)
        if(document.getElementById('output1//').innerHTML.indexOf(".") <= -1){
            document.getElementById('output1').innerHTML = document.getElementById('output1').innerHTML + ".";
            //alert(document.getElementById('output1').innerHTML.indexOf("."));
        }
    } else {
        //check if decimal is already within number (output 2)
            if(document.getElementById('output2').innerHTML.indexOf(".") <= -1){
            document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML + ".";

            //alert(document.getElementById('output2').innerHTML.indexOf("."));
        }
    }
}
function oClear(){
    document.getElementById('output1').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    document.getElementById('opp_sign').innerHTML = "";
    deci2 = false
}
function opp_add(){
    document.getElementById('opp_sign').innerHTML = ".+";
    deci2 = false;
}

function opp_sub(){
    document.getElementById('opp_sign').innerHTML = ".-";
}
function opp_mul(){
    document.getElementById('opp_sign').innerHTML = ".*";
}
function opp_div(){
    document.getElementById('opp_sign').innerHTML = "./";
}

function opp_equals(){
    var outp1 = Number(document.getElementById('output1').innerHTML);
    if(document.getElementById('output2').innerHTML !== ""){

        var outp2 = Number(document.getElementById('output2').innerHTML);

    }else{
        var outp2 = 0;
    }
    var sign = document.getElementById('opp_sign').innerHTML;
    switch (sign) {
        case ".+":
            document.getElementById('output1').innerHTML = outp1 + outp2;
            document.getElementById('opp_sign').innerHTML = "";
            document.getElementById('output2').innerHTML = "";
            break;
        case ".-":
            document.getElementById('output1').innerHTML = outp1 - outp2;
            document.getElementById('opp_sign').innerHTML = "";
            document.getElementById('output2').innerHTML = "";
            break;
        case ".*":
            document.getElementById('output1').innerHTML = outp1 * outp2;
            document.getElementById('opp_sign').innerHTML = "";
            document.getElementById('output2').innerHTML = "";
            break;
        case "./":
            document.getElementById('output1').innerHTML = outp1 / outp2;
            document.getElementById('opp_sign').innerHTML = "";
            document.getElementById('output2').innerHTML = "";
            break;
        case "":
            break;
    }
}

function display_screen(){

}
