function toggleMode() {
  const html = document.documentElement
  //if é a função se, que retorna resposta booleana, falsa ou verdadeira. nesse caso, se a lista de classes existente no doc html contiver a classe light-mode, ele vai remover essa classe. else é "caso contrário", ou seja, se voltar como falso, não contém, então ele adiciona essa classe
  if(html.classList.contains("light-mode")) {
    html.classList.remove("light-mode")
  } else {
    html.classList.add("light-mode")
  }
  //quer é pesquisar, então aqui pedimos para pesquisar pelo seletor, e usamos o mesmo do css
  const img = document.querySelector("#profile0 img")
  if (html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/foto_luiza.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")  
  }
  if (html.classList.contains("light-mode")) {
    img.setAttribute(
      "alt",
      "texto alternativo com descrição da foto/imagem, tipo uma audiodescrição"
    )
  } else {
    img.setAttribute("alt", "outro texto alternativo")
  }
  }

//o JS já tem uma função chamada toggle que já faz toda a logica acima, automaticamente, mas por enquanto prefiro deixar assim
