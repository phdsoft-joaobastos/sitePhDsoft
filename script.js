document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens do menu e todos os painéis de conteúdo
    const navItems = document.querySelectorAll('.nav-item');
    const contentPanels = document.querySelectorAll('.content-panel');

    navItems.forEach(item => {
        // Adiciona o evento de 'mouseenter' (hover) para cada item
        item.addEventListener('mouseenter', () => {
            
            // 1. Remove a classe 'active' de todos os itens do menu
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas ao item que recebeu o hover
            item.classList.add('active');

            // 3. Pega o valor do atributo 'data-target' (ex: "physics-ai")
            const targetId = item.getAttribute('data-target');

            // 4. Esconde todos os painéis de conteúdo
            contentPanels.forEach(panel => panel.classList.remove('active'));

            // 5. Mostra apenas o painel correspondente ao ID
            const activePanel = document.getElementById(targetId);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    
    // Seleciona o conteúdo original (a div .logo-slide)
    const originalContent = track.querySelector(".logo-slide");
    
    // Clona o conteúdo
    const clonedContent = originalContent.cloneNode(true);
    
    // Adiciona o clone ao final do trilho
    track.appendChild(clonedContent);

    // Ajuste de Animação CSS via JS (para garantir precisão matemática)
    // O CSS keyframe "scroll" deve mover exatamente -50% do tamanho total do trilho
    // já que agora o trilho tem 2 metades iguais.
    
    // Vamos injetar uma regra específica para garantir que o loop seja perfeito
    // baseada na largura. Mas, para simplificar, a regra CSS:
    // transform: translateX(-50%); 
    // funciona na maioria dos casos se aplicarmos a animação no container correto.
    
    // Ajuste no CSS (injeção dinâmica para garantir que funcione com o clone):
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Move metade, que é o tamanho do set original */
        }
    `;
    document.head.appendChild(styleSheet);
});