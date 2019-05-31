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
      jasonCards[count].children[0].innerHTML =  `<img src="${eachPokemon.sprite}" >`
      jasonCards[count].children[1].children[0].innerText = `Attack: ${eachPokemon.atk}`
      jasonCards[count].children[1].children[1].innerText = `Defense: ${eachPokemon.def}`
      jasonCards[count].children[1].children[2].innerText = `Sp Attack: ${eachPokemon.sp_atk}`
      jasonCards[count].children[1].children[3].innerText = `Sp Defense: ${eachPokemon.sp_def}`
      jasonCards[count].children[1].children[4].innerText = `Speed: ${eachPokemon.spd}`
      count++
    }
    count = 0
  for (eachPokemon of joan.party) {
      joanCards[count].children[0].innerHTML =  `<img src="${eachPokemon.sprite}" >`
      joanCards[count].children[1].children[0].innerText = `Attack: ${eachPokemon.atk}`
      joanCards[count].children[1].children[1].innerText = `Defense: ${eachPokemon.def}`
      joanCards[count].children[1].children[2].innerText = `Sp Attack: ${eachPokemon.sp_atk}`
      joanCards[count].children[1].children[3].innerText = `Sp Defense: ${eachPokemon.sp_def}`
      joanCards[count].children[1].children[4].innerText = `Speed: ${eachPokemon.spd}`
      count++
    }
    count = 0
  for (eachPokemon of esteban.party) {
      estebanCards[count].children[0].innerHTML =  `<img src="${eachPokemon.sprite}" >`
      estebanCards[count].children[1].children[0].innerText = `Attack: ${eachPokemon.atk}`
      estebanCards[count].children[1].children[1].innerText = `Defense: ${eachPokemon.def}`
      estebanCards[count].children[1].children[2].innerText = `Sp Attack: ${eachPokemon.sp_atk}`
      estebanCards[count].children[1].children[3].innerText = `Sp Defense: ${eachPokemon.sp_def}`
      estebanCards[count].children[1].children[4].innerText = `Speed: ${eachPokemon.spd}`
      count++
    }
    count = 0
  }
}, 400)
