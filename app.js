let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function()
{
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btnelement = document.createElement("button");
    btnelement.innerText = "Delete";
    btnelement.classList.add("delete");
    item.appendChild(btnelement);
    ul.appendChild(item);
      
    inp.value="";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click", function()
//     {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


//use event delegation because it works only in default list items not after adding new;
//uske liye parent ko access jarna padega

ul.addEventListener("click", function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        let delitem = event.target.parentElement;
        delitem.remove();
        console.log("delete");
    } 
    // else
    // {
    //     console.log("Don't delete");
    // }
    // konsa button click kiya wo dekhne ke liye ye property lagti hai
    //nodeName use karte hai kyonki jo trgger hua wo kya tha ya button tha ya p tha ya h tha aise
    console.log("clicked!");
})