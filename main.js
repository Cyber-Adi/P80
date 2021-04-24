
function getP1(){
    var inputs=[];
    
    for (var j=1; j<=6; j++)
    {
        inputs.push(document.getElementById("P1IB" + j).value);
        inputs.join(". ");
        document.getElementById("showP1").innerHTML=inputs.join(". ");
    }
}
function getP2(){
    var inputs=[];
    
    for (var j=1; j<=6; j++)
    {
        inputs.push(document.getElementById("P2IB" + j).value);
        inputs.join(". ");
        document.getElementById("showP2").innerHTML=inputs.join(". ");
    }
}