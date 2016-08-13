window.addEventListener("DOMContentLoaded",init)

function init()
{
var bt=document.getElementsByTagName("button");

for(var i=0;i<bt.length;i++)
    {
        bt[i].addEventListener("click",get);
    }
}

function get()
{
    var x=window.document.getElementById("firstno").value;
    var y=window.document.getElementById("secondno").value;
    var z=0;
    //alert("Hello"+this.innerHTML);
    
    if(this.innerHTML==="+")
    {z=add(x,y);}
    else if(this.innerHTML==="-")
    {z=subtract(x,y);}
    else if(this.innerHTML==="*")
    {z=multiply(x,y);}
    else if(this.innerHTML==="/")
    {z=divide(x,y);}
    
    document.getElementById("fs").innerHTML=z;
}

/*function init()
{
    var operations=[+,-,*,/];
    document.getElementsByTagName("button").addEventListener("click",);                
    operations.forEach(calculate);
}
                    
function calculate(item,index)
{
    document.getElementById("fs").innerHTML=item;                
}*/