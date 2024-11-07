let cont = 0;

function adicionar() {
    let cardName = document.getElementById('inputName').value.trim();
    let cards = document.getElementById('cards');
    let btnApagarTodos = document.getElementById('btnApagarTodos');
    let image = cont + 10;

    if (cardName === '') {
        alert("Precisa adicionar um título!");
    } else {
        let newCard = `<div id="${cont}" class="card m-5" style="width: 15rem;">
        <img src="https://picsum.photos/id/${image}/600/400" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${cardName}</h5>
        </div>
        <button onclick="apagar(${cont})" type="button" class="btn btn-danger mx-auto mb-3" style="width: 100px;">Apagar</button>
        </div>`;
        cards.innerHTML += newCard;
    }

    document.getElementById('inputName').value = '';
    cont++

    if (cont > 0) {
        btnApagarTodos.style.opacity = 1;
    }

}

function apagar(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
    cont--;

    if (cont === 0) {
        btnApagarTodos.style.opacity = 0;  
    }
}

function apagarTodos(){
    cont = 0;
    cards.innerHTML = '';
    btnApagarTodos.style.opacity = 0;
}