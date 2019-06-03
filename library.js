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
const allCards = document.getElementsByClassName('pkcard')

var count = -1
setTimeout(function() {
  for (perCard of allCards) {
    for (person of allTrainers) {
      for (eachPokemon of person.party) {
        count++
        allCards[count].children[0].innerHTML = `<h4 id='dex'>#${eachPokemon.pkdex}:</h4> <strong>${eachPokemon.name}</strong> <h4 id='hp'>HP:</h4> <strong>${eachPokemon.hp}</strong>`
        allCards[count].children[1].setAttribute('style', `background-image: url('pkmnBackground/${eachPokemon.name}.jpg');background-size: cover`)
        allCards[count].children[1].innerHTML =  `<img class="trainer-poke" src="${eachPokemon.sprite}" >`
        allCards[count].children[2].children[0].innerHTML = `<span class='poke-atr' id='poke-atk'>Attack:</span> <strong>${eachPokemon.atk}</strong>`
        allCards[count].children[2].children[1].innerHTML = `<span class='poke-atr' id='poke-def'>Defense:</span> <strong>${eachPokemon.def}</strong>`
        allCards[count].children[2].children[2].innerHTML = `<span class='poke-atr' id='poke-spatk'>Sp Attack:</span> <strong>${eachPokemon.sp_atk}</strong>`
        allCards[count].children[2].children[3].innerHTML = `<span class='poke-atr' id='poke-spdef'>Sp Defense:</span> <strong>${eachPokemon.sp_def}</strong>`
        allCards[count].children[2].children[4].innerHTML = `<span class='poke-atr' id='poke-spd'>Speed:</span> <strong>${eachPokemon.spd}</strong>`
      }
    }
  }
}, 450)
