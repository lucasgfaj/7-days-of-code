const prompt = require('prompt-sync')();

function startGame() {
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End'): ");
    let tecnologia;
    
    if (area.toLowerCase() === "front-end") {
        tecnologia = prompt("Você quer aprender React ou Vue? ");
    } else if (area.toLowerCase() === "back-end") {
        tecnologia = prompt("Você quer aprender C# ou Java? ");
    } else {
        console.log("Opção inválida. Tente novamente.");
        return;
    }
    
    let especializacao = prompt("Você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? (Digite 'especializar' ou 'fullstack'): ");
    
    if (especializacao.toLowerCase() === "especializar") {
        console.log(`Ótima escolha! Se especializar pode te tornar um especialista na área de ${area} com ${tecnologia}.`);
    } else if (especializacao.toLowerCase() === "fullstack") {
        console.log("Muito bom! Ser Fullstack permite que você tenha conhecimento tanto no Front-End quanto no Back-End!");
    } else {
        console.log("Opção inválida. Tente novamente.");
        return;
    }
    
    let tecnologias = [];
    let continuar = "sim";
    
    while (continuar.toLowerCase() === "sim") {
        let novaTecnologia = prompt("Qual outra tecnologia você gostaria de aprender? ");
        tecnologias.push(novaTecnologia);
        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'Sim' ou 'Não'): ");
    }
    
    console.log("Você deseja aprender as seguintes tecnologias: " + tecnologias.join(", ") + ". Boa sorte na sua jornada!");
}

startGame();
