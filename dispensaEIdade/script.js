var idade = parseInt(
    prompt("Digite sua idade!")
);

var dispensa = prompt("Você já foi dispensado do exército? Responsa com sim, não ou n/a");
dispensa = dispensa.toLowerCase();

if(dispensa == "não" || idade < 18) {
    window.alert("O cadastro falhou. Você não atende aos requisitos mínimos!");
} else if(dispensa == "sim" || dispensa == "n/a"){
    window.alert("Obrigado por se cadastrar. Entraremos em contato em breve!");
}



