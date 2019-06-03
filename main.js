class Trainer {
  constructor(name, party = []) {
    this.name = name
    this.party = party
  }
  all() {
    console.log(this.party)
  }
  add(newPkmn) {
    loadPkmn(newPkmn)
  }
  get(name) {
    for (var search of this.party) {
      if (search.name == name || search.pkdex == name){
      console.log(search)
    }
    }
  }
}

const jason = new Trainer('Jason', [306,205,385])
const joan = new Trainer('Joan', [74,150,356])
const esteban = new Trainer('Esteban', ["articuno", "zapdos", "ho-oh"])
console.log(jason)
console.log(joan)
console.log(esteban)

class Pkmn {
  constructor(pkdex, name, hp, atk, def, sp_atk, sp_def, spd, sprite) {
    this.pkdex = pkdex
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.sp_atk = sp_atk
    this.sp_def = sp_def
    this.spd = spd
    this.sprite = sprite
  }
}

function loadPkmn(pknum, trainer) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      pokemon = new Pkmn(data.id, data.species.name.charAt(0).toUpperCase()+data.species.name.slice(1), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, `pkmngif/${data.species.name}.png`)
      trainer.party.push(pokemon)
      trainer.party.shift()
    }
  }
  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${pknum}`, true)
  xhttp.send()
}

function reload(trainer) {
for (let team of trainer.party) {
  loadPkmn(team, trainer)
}}

reload(jason)
reload(joan)
reload(esteban)

const allTrainers = [jason, joan, esteban]
const jasonCards = document.getElementsByClassName('jason')
const joanCards = document.getElementsByClassName('joan')
const estebanCards = document.getElementsByClassName('esteban')

const allCards = [jasonCards, joanCards, estebanCards]

var count = 0
setTimeout(function() {
for (person of allTrainers) {
  for (eachPokemon of jason.party) {
    jasonCards[count].children[0].innerHTML = `<h4>Name:</h4> <span>${eachPokemon.name}</span> <h4>HP:</h4> <span>${eachPokemon.hp}</span>`
    jasonCards[count].children[1].innerHTML =  `<img class="jason-poke" src="${eachPokemon.sprite}" >`
    jasonCards[count].children[2].children[0].innerHTML = `<span class='poke-atr' id='poke-atk'>Attack:</span> <strong>${eachPokemon.atk}</strong>`
    jasonCards[count].children[2].children[1].innerHTML = `<span class='poke-atr' id='poke-def'>Defense:</span> <strong>${eachPokemon.def}</strong>`
    jasonCards[count].children[2].children[2].innerHTML = `<span class='poke-atr' id='poke-spatk'>Sp Attack:</span> <strong>${eachPokemon.sp_atk}</strong>`
    jasonCards[count].children[2].children[3].innerHTML = `<span class='poke-atr' id='poke-spdef'>Sp Defense:</span> <strong>${eachPokemon.sp_def}</strong>`
    jasonCards[count].children[2].children[4].innerHTML = `<span class='poke-atr' id='poke-spd'>Speed:</span> <strong>${eachPokemon.spd}</strong>`
      count++
    }
    count = 0
  for (eachPokemon of joan.party) {
    joanCards[count].children[0].innerHTML = `<h4>Name:</h4> <span>${eachPokemon.name}</span> <h4>HP:</h4> <span>${eachPokemon.hp}</span>`
    joanCards[count].children[1].innerHTML =  `<img class="joan-poke" src="${eachPokemon.sprite}" >`
    joanCards[count].children[2].children[0].innerHTML = `<span class='poke-atr' id='poke-atk'>Attack:</span> <strong>${eachPokemon.atk}</strong>`
    joanCards[count].children[2].children[1].innerHTML = `<span class='poke-atr' id='poke-def'>Defense:</span> <strong>${eachPokemon.def}</strong>`
    joanCards[count].children[2].children[2].innerHTML = `<span class='poke-atr' id='poke-spatk'>Sp Attack:</span> <strong>${eachPokemon.sp_atk}</strong>`
    joanCards[count].children[2].children[3].innerHTML = `<span class='poke-atr' id='poke-spdef'>Sp Defense:</span> <strong>${eachPokemon.sp_def}</strong>`
    joanCards[count].children[2].children[4].innerHTML = `<span class='poke-atr' id='poke-spd'>Speed:</span> <strong>${eachPokemon.spd}</strong>`
      count++
    }
    count = 0
  for (eachPokemon of esteban.party) {
    estebanCards[count].children[0].innerHTML = `<h4>Name:</h4> <span>${eachPokemon.name}</span> <h4>HP:</h4> <span>${eachPokemon.hp}</span>`
    estebanCards[count].children[1].innerHTML =  `<img class="este-poke" src="${eachPokemon.sprite}" >`
    estebanCards[count].children[2].children[0].innerHTML = `<span class='poke-atr' id='poke-atk'>Attack:</span> <strong>${eachPokemon.atk}</strong>`
    estebanCards[count].children[2].children[1].innerHTML = `<span class='poke-atr' id='poke-def'>Defense:</span> <strong>${eachPokemon.def}</strong>`
    estebanCards[count].children[2].children[2].innerHTML = `<span class='poke-atr' id='poke-spatk'>Sp Attack:</span> <strong>${eachPokemon.sp_atk}</strong>`
    estebanCards[count].children[2].children[3].innerHTML = `<span class='poke-atr' id='poke-spdef'>Sp Defense:</span> <strong>${eachPokemon.sp_def}</strong>`
    estebanCards[count].children[2].children[4].innerHTML = `<span class='poke-atr' id='poke-spd'>Speed:</span> <strong>${eachPokemon.spd}</strong>`
      count++
    }
    count = 0
  }
}, 400)
