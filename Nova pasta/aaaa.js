// Ex1: Alternar cor das formas ao clicar
// function alternarCor(id, cor1, cor2) {
//     const forma = document.getElementById(id);
//     forma.addEventListener('click', function () {
//         forma.style.backgroundColor = forma.style.backgroundColor === cor1 ? cor2 : cor1;
//     });
// }

// alternarCor('forma', 'red', 'black');
// alternarCor('forma2', 'blue', 'gray');
// alternarCor('forma3', 'green', 'purple');

// Ex2: Contador de cliques e reset
// const clicar = document.getElementById('clicar');
// const contador = document.getElementById('contador');
// const zerrar = document.getElementById('excluir');
// let contagem = 0;

// clicar.addEventListener('click', function () {
//     contagem++;
//     contador.innerText = contagem;
// });

// zerrar.addEventListener('click', function () {
//     contagem = 0;
//     contador.innerText = contagem;
// });

// Ex3: Exibir e ocultar mensagem
// const mensagem = document.getElementById('mensagem');
// const exibir = document.getElementById('exibir');
// const ocultar = document.getElementById('ocultar');

// mensagem.style.display = 'none';

// exibir.addEventListener('click', function () {
//     mensagem.style.display = 'inline';
// });

// ocultar.addEventListener('click', function () {
//     mensagem.style.display = 'none';
// });

// Ex4: Alterar texto ao clicar no botão
// const botao = document.getElementById("botao");
// const texto = document.getElementById("texto");

// botao.addEventListener('click', function () {
//     const textoNovo = prompt("Me diga uma frase nova:");
//     if (textoNovo) texto.innerText = textoNovo;
// });

// Ex5: Detectar tecla pressionada
// document.addEventListener('keydown', function (event) {
//     texto.innerText = `Você digitou a tecla: ${event.key}`;
// });

// Ex6: Votação em candidatos
// const votar = document.getElementById("votar");
// const imagemG = document.getElementById("generico");

// votar.addEventListener("click", function () {
//     const pergunta = Number(prompt("Em qual candidato você quer votar:\n(3)Dallomo \n(780) Machado\n(7) Felipo\n(24) Nunes\n(69) Candidato secreto"));
//     let candidato = '';
//     let imagemSrc = '';

//     switch (pergunta) {
//         case 3:
//             candidato = "Dallomo";
//             imagemSrc = "/imagens/4.jpeg";
//             break;
//         case 780:
//             candidato = "Machado";
//             imagemSrc = './imagens/3.jpeg';
//             break;
//         case 7:
//             candidato = "Felipo";
//             imagemSrc = '/Imagens/2.jpeg';
//             break;
//         case 24:
//             candidato = "Nunes";
//             imagemSrc = '/Imagens/1.jpeg';
//             break;
//         case 69:
//             candidato = "Candidato Secreto Otto";
//             imagemSrc = '/Imagens/5.jpeg';
//             break;
//         default:
//             alert("Opção inválida! Reinicie a página e escolha um candidato válido.");
//             return;
//     }

//     const confirmar = prompt(`Você deseja confirmar seu voto no candidato ${candidato}? (S/N)`);
//     if (confirmar && confirmar.toUpperCase() === 'S') {
//         alert(`Você votou no candidato ${candidato}`);
//         imagemG.setAttribute('src', imagemSrc);
//     } else {
//         alert("Reinicie a página e escolha outro candidato");
//     }
// });