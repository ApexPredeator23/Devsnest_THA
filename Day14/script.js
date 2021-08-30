document.getElementById("tg").onclick = function ()
{
  my_fun1();
  my_fun2();
}

function my_fun1()
{
  var x = document.getElementsByClassName("adv")
    for(var i=0; i<x.length;i++) {
      if (x[i].style.display === "none") {
        x[i].style.display = "block"
        flag = false
      } else {
        x[i].style.display = "none"
        flag = true           
      }      
    }  
}

function my_fun2()
{
  var x = document.getElementsByClassName("btnpro")
    for(var i=0; i<x.length;i++) {
      if(flag){
        x[i].style.width = "80px";
      }else{
        x[i].style.width = "60px";
      }  
    }
}
