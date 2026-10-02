# Páginas do Amanhã 🌍

Single Page Application (SPA) desenvolvida para o terceiro setor, focada na captação de voluntários e recursos para ONGs.

## 🚀 Tecnologias e Dependências
* **Lógica e Roteamento:** JavaScript (ES6 Modules)
* **Estrutura e Estilo:** HTML5 Semântico e CSS3 Responsivo
* **Armazenamento:** LocalStorage (persistência local de dados)
* **Bibliotecas Externas:** `canvas-confetti` (via CDN) para feedback visual

## ⚙️ Como executar o projeto localmente
1. Clone este repositório: `git clone https://github.com/SeuUsuario/projeto-ong.git`
2. Abra a pasta no seu editor de código (ex: VS Code).
3. Inicie um servidor web local (recomenda-se a extensão **Live Server**).
*Nota: Abrir o ficheiro `index.html` diretamente no navegador (file://) causará erros de CORS devido à utilização de ES6 Modules (`type="module"`).*

## 🌿 Estratégia de Versionamento
Este projeto utiliza o padrão **GitFlow**:
* `main`: Ambiente de produção (código estável).
* `develop`: Ambiente de desenvolvimento e integração.
* `feature/`: Ramificações isoladas para novas funcionalidades (ex: `feature/acessibilidade`).

Todo o histórico segue a convenção de **Conventional Commits** (feat, fix, docs, chore).
