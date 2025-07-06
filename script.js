let botaao = document.querySelector("#botaao");

botaao.style.background="lightblue";

botaao.addEventListener("mouseover", e =>{
    botaao.style.background= "blue";
    botaao.style.color= "white";
});

botaao.addEventListener("mouseout", e =>{
    botaao.style.background= "lightblue";
    botaao.style.color= "black";
});

botaao.addEventListener("click", e =>{
    botaao.style.background= "red";
    alert("O homem que sofre antes de ser necessário, sofre mais que o necessário. - Sêneca");
});