const resul = document.getElementById("resul");
const randomBtn = document.getElementById("get-random");
let pessoas = {
    nomes: [
        "Lídia", "Matheus", "Angélica", "Diogo", "Irene",
        "Osvaldo", "Marcos", "Lene", "Leda", "Valdirene",
        "Valcilene", "Taynara", "Rodrigo", "Vera", "Carlos",
        "André", "Naldo"
    ],
    tamanho: ["35","41-42","35","41-42","35","38","41-42","36","37","35","37","37","41-42","36","42","41-42","41-42"]
};
const pessoasFromLocalStorage = JSON.parse(localStorage.getItem("pessoas"));

if(pessoasFromLocalStorage){
    pessoas = pessoasFromLocalStorage;
}

randomBtn.addEventListener("click", function (){
    if(pessoas.nomes.length){
        let index = Math.floor(Math.random() * pessoas.nomes.length);
        resul.innerHTML =  "<ul> <li>NOME: "+ pessoas.nomes[index]+"</li><li>NÚMERO: "+pessoas.tamanho[index]+" </li> </ul>";
        pessoas.nomes.splice(index, 1);
        pessoas.tamanho.splice(index, 1);
        this.localStorage.setItem(JSON, JSON.stringify(pessoas));
    }else{
        resul.innerHTML = "<h2>Sorteio Finalizado! Todos os nomes já foram sorteados</h2>"
    }
})