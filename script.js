let botao = document.querySelectorAll(".botao")
let botaoavancado = document.querySelectorAll(".avancado");
let nomefonte = document.getElementById("fontName");
let tamanhofonte = document.getElementById("fontSize");
let texto = document.getElementById("areadotexto");
let botaolink = document.getElementById("createLink")
let botaoalinhamento = document.querySelectorAll(".alinhamento");
let botaorecuo = document.querySelectorAll(".recuo");
let botaoformatacao = document.querySelectorAll(".formatacao");
let botaotamanho = document.querySelectorAll(".tamanho");
let listafontes = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "Cursive",];


const inicializa = () => {
  ligabotao(botaoalinhamento, true);
  ligabotao(botaorecuo, true);
  ligabotao(botaoformatacao, false);
  ligabotao(botaotamanho, true);

  listafontes.map((value) => {
  let opcao = document.createElement("option");
  opcao.value = value;
  opcao.innerHTML = value;
  nomefonte.appendChild(opcao);
  });

  for (let i = 1; i <= 7; i++) {
    let opcao = document.createElement("option");
    opcao.value = i;
    opcao.innerHTML = i;
    tamanhofonte.appendChild(opcao);
  }
  tamanhofonte.value = 3;
};

const mudatexto = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

botao.forEach((button) => {
  button.addEventListener("click", () => {
    mudatexto(button.id, false, null);
  });
});

botaoavancado.forEach((button) => {
  button.addEventListener("change",()=>{
    mudatexto(button.id, false, button.value);
  });
});

botaolink.addEventListener("click", ()=>{
  let linkusuario = prompt("Digite a URL");
  if (/http/i.test(linkusuario)) {
    mudatexto(botaolink.id,false,linkusuario);
  }
  else {
    linkusuario = "http://" + linkusuario;
    mudatexto(botaolink.id,false,linkusuario);
  }
});

const ligabotao =  (nomeclasse, precisadesligar) => {
  nomeclasse.forEach((button) => {
        button.addEventListener("click", () =>{
            if (precisadesligar) {
                  let estaligado = false;
                    if (button.classList.contains("ligado")) {
                        estaligado = true;
                      }
                desligabotao(nomeclasse);
                if (!estaligado) {
                      button.classList.add("ligado");
                }
            }
            else {
                button.classList.toggle("ligado");
            }
        });
  });
};

const desligabotao = (nomeclasse) =>{
  nomeclasse.forEach((button) => {
    button.classList.remove("ligado")
  });
};
window.onload = inicializa();
