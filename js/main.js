// IMPORTA OS MÓDULOS ESPECÍFICOS
import { gerarHTMLProjetos } from './projetos.js';
import { inicializarFormulario } from './formulario.js';

// O MOTOR DE NAVEGAÇÃO
function carregarRota() {
    const palcoPrincipal = document.getElementById('conteudo-principal');
    let rotaAtual = window.location.hash || '#inicio';

    if (rotaAtual === '#projetos') {
        palcoPrincipal.innerHTML = `
            <h1 style="text-align: center; margin-bottom: 30px;">Os Nossos Projetos Mágicos</h1>
            ${gerarHTMLProjetos()}
        `;
    } else if (rotaAtual === '#apoiar') {
        const arquivoGuardado = localStorage.getItem('doadorMagico');
        let mensagemBemVindo = ''; 
        
        if (arquivoGuardado) {
            const dados = JSON.parse(arquivoGuardado);
            mensagemBemVindo = `<div class="alerta-sucesso" style="margin-bottom:20px;">
                ✨ Bem-vindo de volta, <strong>${dados.nome}</strong>! Obrigado por ajudar a espalhar a magia da leitura. Seu registro foi feito em <strong>${dados.dataRegisto}</strong>.
            </div>`;
        }

        palcoPrincipal.innerHTML = `
            <h1 style="margin-bottom: 20px;">Registo de Doadores</h1>
            ${mensagemBemVindo}
            <form id="form-doacao" style="max-width: 400px; margin: 0 auto; text-align: left;">
                <label for="nome-doador">Nome Mágico:</label><br>
                <input type="text" id="nome-doador" required style="width: 100%; margin-bottom: 15px; padding: 10px;"><br>
                <button type="submit" class="botao-magico" style="width: 100%;">Enviar Cadastro</button>
            </form>
            <div id="mensagem-sucesso" style="margin-top: 20px; font-weight: bold;"></div>
        `;
        // ATENÇÃO: Chama o especialista de formulários LOGO APÓS criar o formulário no ecrã!
        inicializarFormulario(); 
        
    } else {
        palcoPrincipal.innerHTML = `
            <h1 style="margin-bottom: 15px;">Faça parte desta história mágica!</h1>
            <p style="margin-bottom: 30px;">A sua doação ajuda a levar a leitura a milhares de crianças.</p>
            <img src="../imagens/criancas-lendo.jpg" alt="Duas crianças a sorrir" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <br>
            <button class="botao-magico">Doar Livros</button>
        `;
    }
}

// OS GUARDAS DE ROTA
window.addEventListener('hashchange', carregarRota);
window.addEventListener('DOMContentLoaded', carregarRota);