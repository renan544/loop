var res = document.querySelector(".res")
var numero = Number(prompt("digite um numero"))

for (var inicio =1; inicio <= 10; inicio++){
    res.innerHTML += `<p>${numero} x ${inicio} = ${numero * inicio}</p>`
}