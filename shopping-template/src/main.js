// data set
function cloth(gender, kinds, color, size, src){
    this.gender = gender;
    this.kinds = kinds;
    this.color = color;
    this.size = size;
    this.src = src;
}

const clothes = [
    new cloth('male', 'pants', 'blue', 'small', 'img/blue_p.png' ),
    new cloth('male', 'pants', 'yellow', 'small', 'img/yellow_p.png' ),
    new cloth('male', 'pants', 'pink', 'small', 'img/pink_p.png' ),
    new cloth('male', 'shirts', 'blue', 'small', 'img/blue_t.png' ),
    new cloth('male', 'shirts', 'yellow', 'small', 'img/yellow_t.png' ),
    new cloth('male', 'shirts', 'pink', 'small', 'img/pink_t.png' ),
    new cloth('male', 'pants', 'blue', 'large', 'img/blue_p.png' ),
    new cloth('male', 'pants', 'yellow', 'large', 'img/yellow_p.png' ),
    new cloth('male', 'pants', 'pink', 'large', 'img/pink_p.png' ),
    new cloth('male', 'shirts', 'blue', 'large', 'img/blue_t.png' ),
    new cloth('male', 'shirts', 'yellow', 'large', 'img/yellow_t.png' ),
    new cloth('male', 'shirts', 'pink', 'large', 'img/pink_t.png' ),
    new cloth('female', 'pants', 'blue', 'small', 'img/blue_p.png' ),
    new cloth('female', 'pants', 'yellow', 'small', 'img/yellow_p.png' ),
    new cloth('female', 'pants', 'pink', 'small', 'img/pink_p.png' ),
    new cloth('female', 'shirts', 'blue', 'small', 'img/blue_t.png' ),
    new cloth('female', 'shirts', 'yellow', 'small', 'img/yellow_t.png' ),
    new cloth('female', 'shirts', 'pink', 'small', 'img/pink_t.png' ),
    new cloth('female', 'skirt', 'blue', 'small', 'img/blue_s.png' ),
    new cloth('female', 'skirt', 'yellow', 'small', 'img/yellow_s.png' ),
    new cloth('female', 'skirt', 'pink', 'small', 'img/pink_s.png' ),    
    new cloth('female', 'pants', 'blue', 'large', 'img/blue_p.png' ),
    new cloth('female', 'pants', 'yellow', 'large', 'img/yellow_p.png' ),
    new cloth('female', 'pants', 'pink', 'large', 'img/pink_p.png' ),
    new cloth('female', 'shirts', 'blue', 'large', 'img/blue_t.png' ),
    new cloth('female', 'shirts', 'yellow', 'large', 'img/yellow_t.png' ),
    new cloth('female', 'shirts', 'pink', 'large', 'img/pink_t.png' ),
    new cloth('female', 'skirt', 'blue', 'large', 'img/blue_s.png' ),
    new cloth('female', 'skirt', 'yellow', 'large', 'img/yellow_s.png' ),
    new cloth('female', 'skirt', 'pink', 'large', 'img/pink_s.png' )    
]

/////////////////////////////////////////////////////////////////////////////
// form
const form = document.querySelector('form');
// logo btn
const head = document.querySelector('.logo');
const logo = head.querySelector('img');
// menu btn
const menu = document.querySelector('.menu');
const btnShirts = menu.querySelector('#shirts');
const btnPants = menu.querySelector('#pants');
const btnSkirt = menu.querySelector('#skirt');
const btnBlue = menu.querySelector('#blue');
const btnYellow = menu.querySelector('#yellow');
const btnPink = menu.querySelector('#pink');

form.addEventListener('click', loadClothes);

function loadClothes(event){
    if(event.target === logo){
        filterClothes('logo');
    }
    else if(event.target === btnShirts){
        filterClothes('shirts');
    }
    else if(event.target === btnPants){
        filterClothes('pants');
    }
    else if(event.target === btnSkirt){
        filterClothes('skirt');
    }
    else if(event.target === btnBlue){
        filterClothes('blue');
    }
    else if(event.target === btnYellow){
        filterClothes('yellow');
    }
    else if(event.target === btnPink){
        filterClothes('pink');
    }
    else{
        return;
    }
}

function filterClothes(k){  
    if(k==="shirts" || k=== "skirt" || k==="pants"){
        const result= clothes.filter(cloth=>cloth.kinds === k); 
        showClothes(result);
    }
    else if(k==="blue" || k=== "pink" || k==="yellow"){
        const result2 = clothes.filter(cloth=> cloth.color ===k)
        showClothes(result2);
    }
    else{
        showClothes(clothes);
    }    
}

function showClothes(array){
    const section = document.querySelector('.section');
    while(section.hasChildNodes()){
        section.removeChild(section.lastChild);
    }    

    for (let i = 0; i < array.length; i++) {        
        let box = document.createElement('div');
        let image = document.createElement('img');
        let details = document.createElement('p');
        
        box.classList.add('contents');
        image.classList.add('image');
        image.src = `img/${array[i].color}_${array[i].kinds}.png`;
        details.classList.add('details');
        details.innerText = `${array[i].gender}, ${array[i].size} size`;

        box.append(image);
        box.append(details);
        section.append(box);    
    }        
    
}