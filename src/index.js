function getSpriteUrls(sprites){
    let spriteUrl = []
    function getUrlWithRec(toCheck){
        for (const key in toCheck){
            value = toCheck[key]
            if (value != null && typeof value == "string"){
                spriteUrl.push(value);

            }
            else if (value != null && typeof value == "object") {
                getUrlWithRec(value);
            }
        }

    }

    getUrlWithRec(sprites);
    return spriteUrl
}


let cards = document.getElementById('cards')
data.forEach(card => {
    const spriteUrls = getSpriteUrls(card.sprites)
    const newCard = document.createElement('card');
    let counter = 0;
    newCard.className = 'card'
    newCard.id = card.name;

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

    newCard.addEventListener("click", function(){
        counter++;
        img.src = spriteUrls[counter];
    })

    cards.appendChild(newCard)
});

