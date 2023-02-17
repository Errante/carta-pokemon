
function numeroRamdom(numMin, numMax) {
    let amplitud = numMax - numMin
    let ramdom = Math.floor(Math.random() * amplitud) + numMin
    return ramdom
}

let vernum = numeroRamdom(0, 898)
console.log(vernum)

let puntos = 0
let poke


document.addEventListener("DOMContentLoaded", () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${vernum}`)
        .then(res => {
            console.log(res.data);
            // nombre del pokemon
             poke = res.data.name;
            // convertir la primera letra en mayus
            let priMayus = poke[0].toUpperCase() + poke.substring(1)
            console.log(priMayus);
            // impirmir nombre
            document.getElementById("nombre").innerText = priMayus
            //imagen del pokemon
            document.getElementById("imagen").src = res.data.sprites.other.home.front_default
            // experiencia del pokemon
            document.getElementById("xp").innerText = "XP: " + "" + res.data.base_experience
            // Salud del pokemon
            document.getElementById("hp").innerText = "HP: " + "" + res.data.stats[0].base_stat
            // Ataque
            document.getElementById("numAtaque").innerText = "" + res.data.stats[1].base_stat
            // Defensa
            document.getElementById("defensa").innerText = "" + res.data.stats[2].base_stat
            // Ataque especial 
            document.getElementById("ataqueE").innerText = "" + res.data.stats[3].base_stat
            console.log("Esta es una modificacion");
        })
        .catch(error => {
            console.log(error);
        })
})

function ganaste() {
    
    console.log(poke);
    console.log(document.getElementById("listBox").value);
    if (poke == document.getElementById("listBox").value.toLowerCase()) {
        document.getElementById("nombre").style = "display: block"
        document.getElementById("imagen").style = "filter: brightness(100%) ;"
        puntos++
    } else {
        document.getElementById("alert").style = "display: block" 
        setTimeout(() => {
            document.getElementById("alert").style = "display: none"
        },  3000); 
    }
}


