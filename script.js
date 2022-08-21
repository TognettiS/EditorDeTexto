let opcaobotao = document.querySelectorAll('.opcaobotao');
let opcaobotaoavancado = document.querySelectorAll('.opcaobotaoavancado');
let nomedafonte = document.getElementById('nomedafonte');
let tamanhodafonte = document.getElementById('tamanhodafonte');
let areadotexto = document.getElementById('areadotexto');
let crialink = document.getElementById('crialink')
let opcaobotaoalinhamento = document.querySelectorAll('.opcaobotaoalinhamento');
let opcaobotaorecuo = document.querySelectorAll('.opcaobotaorecuo');
let formatacaobloco = document.querySelectorAll('.formatacaobloco');
let opcaobotaotamanho = document.querySelectorAll('.opcaobotaotamanho');

let listadefontes = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "Curisve"];

const inicializa = () => {
  marcatexto(opcaobotaoalinhamento, true);
  marcatexto(opcaobotaorecuo, true);
  marcatexto(formatacaobloco, false);
  marcatexto(opcaobotaotamanho, true);
};

const marcatexto = (nomedaclasse, precisaremover) =>{
  nomedaclasse.forEach((button) => {
    button.addEventListener("click", () =>{
      if (precisaremover) {
        let jaligado = false;

        if (button.classList.contains("ligado")) {
            jaligado = true;
        }
        removemarcatexto(nomedaclasse);
        if (!jaligado) {
          button.classList.add("ligado");
        }
      }
      else {
        button.classList.toggle("ligado");
      }
    });
  });

}
