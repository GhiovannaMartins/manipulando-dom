// 1- acessando um elemento
// document - representa toda página/arquivo
//getElementById - é um método(função,ação) que procura um elemento pelo atributo ID
const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

// 2- alterando o conteúdo de um elemento
paragrafo.textContent = "Alterando o texto do paragrafo com JS"

// 3- alterando o estilo
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "2rem"

// 4- criando elemento
// createElement - Serve para criar um novo elemento HTML (cria na memoria, não está inserido).
const paragrafoJavaScript = document.createElement("p")

//4.1 - atualizando o conteúdo do paragrafo
paragrafoJavaScript.textContent = "Este paragrafo foi criado com JavaScript"
paragrafoJavaScript.style.fontFamily = "sans-serif"
paragrafoJavaScript.style.fontSize = "1.5rem"
paragrafoJavaScript.style.backgroundColor = "deeppink"
paragrafoJavaScript.style.borderRadius = "1rem"

//4.2 - inserindo o paragrafo na página
//appendChild - serve para adicionar um item ao final da página
document.body.appendChild(paragrafoJavaScript)

// 5- removendo um elemento do  HTML
const titulo = document.getElementById("titulo")

//5.1 - removendo
titulo.remove()