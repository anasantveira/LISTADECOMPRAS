function adicionarItem() {
    const itemInput = document.getElementById("itemInput");
    const lista = document.getElementById("lista");
    const itemTexto = itemInput.value.trim();

    if (itemTexto !== "") {
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `${itemTexto} <button onclick="removerItem(this)">Remover</button>`;
        lista.appendChild(novoItem);
        itemInput.value = "";
    } else {
        alert("Digite o nome de um item.");
    }
}

function removerItem(elemento) {
    const item = elemento.parentElement;
    item.remove();
}
