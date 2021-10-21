var ul=document.getElementById("minhaLista")    
var li
var itemId
var objeto
addTarefa=function(){
    if(document.getElementById("panda")!="")
        {objeto =document.getElementById("panda")
        itemId=ul.childElementCount
        li=item(objeto,itemId)
        li.appendChild(clrtarefa(itemId))
        ul.appendChild(li)
        objeto.value=""} 
}


removerTarefa=function(itemId){
   for(i =0;i<ul.children.length;i++){
       if(ul.children[i].getAttribute("index")==itemId){
           ul.children[i].remove();}
       

   }    

}

item=function(itemValue,itemId){
    let li=document.createElement("li")
    li.setAttribute("index",itemId)
    li.appendChild(document.createTextNode(itemValue.value))
    return li
}

clrtarefa=function(itemId){
    let btn = document.createElement("button")
    btn.setAttribute("onclick","removerTarefa("+itemId+")")
    btn.innerHTML ="X"
    return btn
}



/*****************************************************/


