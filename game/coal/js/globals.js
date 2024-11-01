
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let pickaxeLevel = localStorage.getItem('pickaxeLevel') ? parseInt(localStorage.getItem('pickaxeLevel')) : 0;

function updateScoreDisplay() {
    $('#title').text(`${score}`);
}

function updatePickaxeDisplay() {
    $('#pickaxe-level').text(`Pickaxe Level ${pickaxeLevel}`);
}

function updatePickaxeCostDisplay() {
    const cost = calculatePickaxeCost();
    $('#pickaxe-cost').text(`Cost ${cost}`);
}

function calculatePickaxeCost() {
    return 10 + (pickaxeLevel * 20);
}