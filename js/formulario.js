export function inicializarFormulario() {
    const form = document.getElementById('form-doacao');
    if (!form) return; // Se não houver formulário na página, não faz nada

    form.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        const inputNome = document.getElementById('nome-doador');
        const nome = inputNome.value.trim(); 
        const aviso = document.getElementById('mensagem-sucesso');
        
        if (nome === "" || nome.length < 3) {
            inputNome.style.borderColor = "#c62828"; 
            aviso.style.color = "#c62828"; 
            aviso.innerHTML = `❌ Erro: Por favor, insira um nome válido.`;
            return; 
        }

        const dadosDoador = { nome: nome, dataRegisto: new Date().toLocaleDateString() };
        localStorage.setItem('doadorMagico', JSON.stringify(dadosDoador));

        inputNome.style.borderColor = "#ccc"; 
        aviso.style.color = "#2e7d32"; 
        aviso.innerHTML = `✅ Magia realizada, ${nome}! O seu registro foi guardado.`;
        
        confetti({
            particleCount: 150, 
            spread: 80,         
            origin: { y: 0.6 },
            colors: ['#290663', '#ffd700', '#6718e6'] 
        });

        evento.target.reset();
    });
}