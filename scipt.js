// === JavaScript: A MÁGICA DO SITE ===

// 1. Primeiro, precisamos "encontrar" os elementos do HTML com quem queremos interagir.
// Usamos o "document.getElementById" para pegar o elemento pelo ID que colocamos no HTML.
const botao = document.getElementById('meuBotao');
const texto = document.getElementById('textoClique');

// 2. Vamos verificar se os elementos existem na página (para evitar erros).
// É sempre bom fazer essa checagem.
if (botao && texto) {
    // 3. Aqui é a parte principal: "Escutar" o clique no botão.
    // O "addEventListener" fica esperando o evento 'click' acontecer.
    botao.addEventListener('click', function() {
        // 4. Quando o clique acontecer, esta função (o código dentro das chaves) será executada.

        // Vamos mudar o conteúdo (texto) e a cor do elemento 'textoClique'.
        // O "textContent" altera o texto.
        texto.textContent = 'As hortas verticais com aeroponia podem reduzir o uso de água em até 95%! 🌱';

        // O "style.color" altera a cor do texto diretamente pelo JavaScript.
        texto.style.color = '#1a4d2e'; // Muda para verde escuro

        // Deixamos mais divertido mudando também a cor do botão para dar um feedback.
        botao.style.backgroundColor = '#1a4d2e';
        botao.textContent = 'Informação Atualizada!';

        // Opcional: Podemos fazer o botão "voltar ao normal" depois de um tempo? 
        // Vamos usar o "setTimeout" para isso (é um temporizador).
        // A linha abaixo é um "extra" e não precisa se preocupar muito agora.
        // setTimeout(() => {
        //     botao.style.backgroundColor = '#3498db';
        //     botao.textContent = 'Mais Informações';
        // }, 2000); // 2000 = 2 segundos
        
    });
} else {
    // Se não encontrar os elementos, mostra um aviso no console (F12 do navegador).
    console.log('Elementos do JavaScript não encontrados.');
}

// BÔNUS: Outro pequeno efeito - quando clicamos em um link do menu, a seção aparece suavemente.
// Isso é chamado de "scroll suave". Vamos fazer com CSS (mais fácil)!
// Adicione isso ao seu arquivo style.css:
/*
html {
    scroll-behavior: smooth;
}
*/
// Essa linha faz com que qualquer clique em um link interno (como #introducao) role a tela suavemente.
// Você pode colocar essa regra no seu CSS, no começo do arquivo, dentro do seletor "html".