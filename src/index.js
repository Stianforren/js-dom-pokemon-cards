
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
// for (i = 0; i<data.length;i++){
//     const newCard = document.createElement('card');
//     newCard.
// }
let cards = document.getElementById('cards')
// console.log(cards)
data.forEach(card => {
    const newCard = document.createElement('card');
    newCard.className = 'card'
    const header = document.createElement('h2');
    header.textContent = card.name;
    newCard.appendChild(header)
    const img = document.createElement('img');
    img.className = 'card--img'
    img.src = card.sprites.other["official-artwork"].front_default;
    img.width = 256;
    newCard.appendChild(img);
    const cardDetails = document.createElement('ul');
    cardDetails.className = 'card--text'
    card.stats.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = stat.stat.name + ": " + stat.base_stat
        cardDetails.appendChild(li);
    });
    const appearedIn = document.createElement('ul')
    appearedIn.className = 'card--text';
    appearedIn.innerHTML = '<strong> Appeared in </strong>'
    card.game_indices.forEach(gameName => {
        const li = document.createElement('li');
        li.textContent = gameName.version.name;
        appearedIn.appendChild(li);
    })
    newCard.appendChild(cardDetails)
    newCard.appendChild(appearedIn)
    cards.appendChild(newCard)
});