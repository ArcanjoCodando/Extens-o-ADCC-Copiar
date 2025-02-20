function addCopyButtons() {
    document.querySelectorAll(".participant").forEach(span => {
      if (span.dataset.hasButton) return; // Evita adicionar o botão mais de uma vez
      
      const button = document.createElement("button");
      button.innerText = "📋 Copiar";
      button.style.cursor = "pointer";
      button.style.padding = "4px 8px";
      button.style.fontSize = "14px";
      button.style.border = "none";
      button.style.margin = "1px 10px 5px 1px";
      button.style.backgroundColor = "#fe8a34";
      button.style.color = "white";
      button.style.borderRadius = "4px";
      
      button.addEventListener("click", () => {
        let name = span.cloneNode(true);
        name.querySelectorAll(".club").forEach(club => club.remove());
        let textToCopy = name.innerText.trim();
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          button.innerText = "✅ Copiado!";
          button.style.backgroundColor = "#00ff00";
          setTimeout(() => button.innerText = "📋 Copiar", 2000);
          setTimeout(() => button.style.backgroundColor = "#fe8a34", 2000);
        });
      });
      
      span.dataset.hasButton = "true"; // Marca o elemento para evitar duplicação
      span.parentNode.insertBefore(button, span);
    });
  }
  
  // Observador para mudanças na página
  targetNode = document.body;
  const observer = new MutationObserver(() => {
    addCopyButtons();
  });
  observer.observe(targetNode, { childList: true, subtree: true });
  
  // Executa a função inicial ao carregar a página
  addCopyButtons();
  