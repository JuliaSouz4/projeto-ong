const listaProjetos = [
    { titulo: "Leitura na Praça", status: "Ativo", desc: "Levamos contos de fadas para as praças aos domingos." },
    { titulo: "Biblioteca Itinerante", status: "Brevemente", desc: "Uma carrinha repleta de livros a viajar pelas escolas." },
    { titulo: "Livro Amigo", status: "Novo", desc: "Apadrinhe uma criança e doe um livro mensalmente." }
];

export function gerarHTMLProjetos() {
    const cartoesGerados = listaProjetos.map(projeto => {
        return `
            <article class="caixa-projeto">
                <span class="cracha-magico">${projeto.status}</span>
                <h2 style="margin-top: 10px;">${projeto.titulo}</h2>
                <p style="margin: 15px 0;">${projeto.desc}</p>
                <button class="botao-magico">Saber mais</button>
            </article>
        `;
    }).join('');
    return `<section class="vitrine-projetos">${cartoesGerados}</section>`;
}