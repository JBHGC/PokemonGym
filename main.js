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

const jason = new Trainer('Jason', [778,306,385])
const joan = new Trainer('Joan', [74,150,356])
const esteban = new Trainer('Esteban', ["articuno", "zapdos", "Ho-oh"])
console.log(jason)
console.log(joan)
console.log(esteban)

class Pkmn {
  constructor(pkdex, name, hp, atk, def, sp_atk, sp_def, spd, abilities, sprite, fullImage) {
    this.pkdex = pkdex
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.sp_atk = sp_atk
    this.sp_def = sp_def
    this.spd = spd
    this.abilities = abilities
    this.sprite = sprite
    this.fullImage = fullImage
  }
}

function loadPkmn(pknum, trainer) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      if (data.abilities.length == 1) {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        trainer.party.push(pokemon)
      } else if (data.abilities.length == 2){
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name, data.abilities[1].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        trainer.party.push(pokemon)
      } else {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name, data.abilities[1].ability.name, data.abilities[2].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        trainer.party.push(pokemon)
      }
    }
  }
  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${pknum}`, true)
  xhttp.send()
}
